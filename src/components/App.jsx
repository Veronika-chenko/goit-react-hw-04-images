import { Component } from 'react';
import { fetchImageList } from './services/Api';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery/';
import { Button } from './Button';
import { Loader } from './Loader';
import { Modal } from './Modal';

export class App extends Component {
  state = {
    gallery: [],
    searchQuery: '',
    pageNum: 1,

    loading: false,
    showModal: false,
    largeImage: '',

    hitsQuantity: 0,
    total: 0,
  };

  async componentDidUpdate(_, prevState) {
    const { searchQuery, pageNum } = this.state;

    if (searchQuery !== prevState.searchQuery) {
      try {
        this.setState({ pageNum: 1, loading: true });
        const data = await fetchImageList(searchQuery, pageNum);
        this.setState({
          gallery: data.hits,
          loading: false,
          hitsQuantity: data.hits.length,
          total: data.totalHits,
        });
      } catch (error) {
        console.log(error);
      }
    }

    if (pageNum !== prevState.pageNum) {
      try {
        this.setState({ loading: true });
        const data = await fetchImageList(searchQuery, pageNum);
        this.setState(prevState => ({
          gallery: [...prevState.gallery, ...data.hits],
          loading: false,
          hitsQuantity: prevState.hitsQuantity + data.hits.length,
        }));
      } catch (error) {
        console.log(error);
      }
    }
  }

  changeSearchQuery = text => {
    this.setState({ searchQuery: text });
  };

  changeSearchPage = page => {
    this.setState({ pageNum: page + 1 });
  };

  toggleModal = image => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      largeImage: image,
    }));

    return image;
  };

  render() {
    const {
      gallery,
      pageNum,
      loading,
      showModal,
      largeImage,
      hitsQuantity,
      total,
    } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.changeSearchQuery} />
        <ImageGallery data={gallery} onImageClick={this.toggleModal} />
        {loading && <Loader />}

        {hitsQuantity < total && (
          <Button currPage={pageNum} onClick={this.changeSearchPage} />
        )}

        {showModal && (
          <Modal onClose={this.toggleModal} src={largeImage}>
            {this.state.largeImage}
          </Modal>
        )}
      </>
    );
  }
}

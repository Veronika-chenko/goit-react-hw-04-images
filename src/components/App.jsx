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

    hitsQuantity: 0,
    totalHits: 0,

    loading: false,
    showModal: false,
    modalData: {
      src: '',
      alt: '',
    },
  };

  async componentDidUpdate(_, prevState) {
    const { searchQuery, pageNum } = this.state;

    if (searchQuery !== prevState.searchQuery) {
      try {
        this.setState({ pageNum: 1, loading: true });
        const { hits, totalHits } = await fetchImageList(searchQuery, pageNum);
        this.setState({
          gallery: hits,
          loading: false,
          hitsQuantity: hits.length,
          totalHits,
        });
      } catch (error) {
        console.log(error);
      }
    }

    if (pageNum !== prevState.pageNum) {
      try {
        this.setState({ loading: true });
        const { hits } = await fetchImageList(searchQuery, pageNum);
        this.setState(prevState => ({
          gallery: [...prevState.gallery, ...hits],
          loading: false,
          hitsQuantity: prevState.hitsQuantity + hits.length,
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

  toggleModal = (src, alt) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      modalData: {
        src,
        alt,
      },
    }));
  };

  render() {
    const {
      gallery,
      pageNum,
      loading,
      showModal,
      hitsQuantity,
      totalHits,
      modalData,
    } = this.state;
    const { src, alt } = modalData;

    return (
      <>
        <Searchbar onSubmit={this.changeSearchQuery} />
        <ImageGallery data={gallery} onImageClick={this.toggleModal} />
        {loading && <Loader />}

        {hitsQuantity < totalHits && (
          <Button currPage={pageNum} onClick={this.changeSearchPage} />
        )}

        {showModal && (
          <Modal onClose={this.toggleModal} src={src} alt={alt}></Modal>
        )}
      </>
    );
  }
}

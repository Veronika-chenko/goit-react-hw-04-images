import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './Gallery/ImageGallery';
import { Button } from './Button/Button';
import { fetchImageList } from './services/Api';

export class App extends Component {
  state = {
    gallery: [],
    searchQuery: '',
    pageNum: 1,
  };

  async componentDidUpdate(_, prevState) {
    const { searchQuery, pageNum } = this.state;

    if (searchQuery !== prevState.searchQuery) {
      try {
        const data = await fetchImageList(searchQuery, pageNum);
        this.setState({ gallery: data.hits });
      } catch (error) {
        console.log(error);
      }
    }

    if (pageNum !== prevState.pageNum) {
      try {
        const data = await fetchImageList(searchQuery, pageNum);
        this.setState(prevState => ({
          gallery: [...prevState.gallery, ...data.hits],
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

  render() {
    const { gallery, pageNum } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.changeSearchQuery} />
        <ImageGallery data={gallery} />
        {gallery.length !== 0 && (
          <Button currPage={pageNum} onClick={this.changeSearchPage} />
        )}
        {/* <Button currPage={pageNum} onClick={this.changeSearchPage} /> */}
      </>
    );
  }
}

// #1
// ❌ забула прибрати, коли вставила код запиту в componentDidUpdate()
// зациклився запит, Axios is firing off all requests simultaneously
// Axios Request failed with status code 429
// async componentDidUpdate(_, prevState) {
//   if (this.state.searchQuery !== prevState) {
//     const { searchQuery } = this.state;
//     const QUERY_PARAMS = `&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true`;
//     if (searchQuery) {❌
//       try {
//         const res = await axios.get(
//           API_KEY + QUERY_PARAMS + paginationParams
//         );
//         this.setState({ gallery: res.data.hits });
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   }
// }

// #2
// увага до розпилення
// gallery: [...prevState.gallery, ...newData],

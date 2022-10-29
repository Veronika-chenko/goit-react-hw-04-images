import { useState, useEffect } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchImageList } from './services/Api';
//
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery/';
import { Button } from './Button';
import { Loader } from './Loader';

export const App = () => {
  const [gallery, setGallery] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [pageNum, setPageNum] = useState(1);
  const [hitsQuantity, setHitsQuantity] = useState(0);
  const [totalHits, setTotalHits] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!searchQuery) return;
    (async function () {
      try {
        setLoading(true);
        const { hits, totalHits } = await fetchImageList(searchQuery, pageNum);
        setGallery(state => [...state, ...hits]);
        setTotalHits(totalHits);
        setHitsQuantity(state => state + hits.length);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [pageNum, searchQuery]);

  const changeSearchQuery = text => {
    setSearchQuery(text);
    resetIfNewQuery();
  };

  const changeSearchPage = page => setPageNum(page + 1);

  const resetIfNewQuery = () => {
    setGallery([]);
    setPageNum(1);
    setHitsQuantity(0);
  };

  return (
    <>
      <Searchbar onSubmit={changeSearchQuery} />
      <ImageGallery data={gallery} />
      {loading && <Loader />}
      {hitsQuantity < totalHits && !loading && (
        <Button currPage={pageNum} onClick={changeSearchPage} />
      )}
      {/* <ToastContainer autoClose={2000} /> */}
    </>
  );
};

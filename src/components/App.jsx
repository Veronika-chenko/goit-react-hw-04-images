import { useState, useEffect } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchImageList } from './services/Api';
//
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery/';
import { Button } from './Button';
import { Loader } from './Loader';
import { Modal } from './Modal';
// NewApp

export const App = () => {
  const [gallery, setGallery] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [pageNum, setPageNum] = useState(1);
  const [hitsQuantity, setHitsQuantity] = useState(0);
  const [totalHits, setTotalHits] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [srcModal, setSrcModal] = useState('');
  const [altModal, setAltModal] = useState('');

  useEffect(() => {
    if (!searchQuery) return;
    async function fetchImageList1() {
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
    }
    fetchImageList1();
  }, [pageNum, searchQuery]);

  const changeSearchQuery = text => {
    setSearchQuery(text);
    resetBeforeNewQuery();
  };
  const changeSearchPage = page => setPageNum(page + 1);

  const toggleModal = (src, alt) => {
    setSrcModal(src);
    setAltModal(alt);
    setShowModal(!showModal);
  };

  const resetBeforeNewQuery = () => {
    setGallery([]);
    setPageNum(1);
    setHitsQuantity(0);
  };

  return (
    <>
      <Searchbar onSubmit={changeSearchQuery} />
      <ImageGallery data={gallery} onImageClick={toggleModal} />
      {loading && <Loader />}
      {hitsQuantity < totalHits && (
        <Button currPage={pageNum} onClick={changeSearchPage} />
      )}
      {showModal && (
        <Modal onClose={toggleModal} src={srcModal} alt={altModal}></Modal>
      )}
      {/* <ToastContainer /> */}
    </>
  );
};

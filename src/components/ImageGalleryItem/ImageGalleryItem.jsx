import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal';
import { PhotoCard } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ el }) => {
  const [showModal, setShowModal] = useState(false);
  const [srcModal, setSrcModal] = useState('');
  const [altModal, setAltModal] = useState('');

  const { webformatURL, largeImageURL, tags } = el;

  useEffect(() => {
    setSrcModal(largeImageURL);
    setAltModal(tags);
  }, [largeImageURL, tags]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <PhotoCard>
      <img src={webformatURL} alt={tags} onClick={toggleModal} />
      {showModal && (
        <Modal onClose={toggleModal} src={srcModal} alt={altModal}></Modal>
      )}
    </PhotoCard>
  );
};

ImageGalleryItem.propTypes = {
  el: PropTypes.object.isRequired,
};

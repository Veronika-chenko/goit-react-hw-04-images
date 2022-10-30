import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal';
import { ImageCard } from './ImageGalleryItem.styled';

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
    <ImageCard>
      <img src={webformatURL} alt={tags} onClick={toggleModal} />
      {showModal && (
        <Modal onClose={toggleModal} src={srcModal} alt={altModal}></Modal>
      )}
    </ImageCard>
  );
};

ImageGalleryItem.propTypes = {
  el: PropTypes.object.isRequired,
};

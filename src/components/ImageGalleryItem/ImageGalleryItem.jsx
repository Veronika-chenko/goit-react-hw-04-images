import { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal';
import { PhotoCard } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ el }) => {
  const { webformatURL, largeImageURL, tags } = el;

  const [showModal, setShowModal] = useState(false);
  const [srcModal, setSrcModal] = useState('');
  const [altModal, setAltModal] = useState('');

  const toggleModal = () => {
    setSrcModal(largeImageURL);
    setAltModal(tags);
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

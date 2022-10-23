// import { Component } from 'react';
import { PhotoCard } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ el, onClick }) => {
  return (
    <PhotoCard>
      <img
        src={el.webformatURL}
        alt={el.tags}
        onClick={() => onClick(el.largeImageURL)}
      />
    </PhotoCard>
  );
};

ImageGalleryItem.propTypes = {
  el: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

import PropTypes from 'prop-types';
import { PhotoCard } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ el, onClick }) => {
  const { webformatURL, largeImageURL, tags } = el;
  return (
    <PhotoCard>
      <img
        src={webformatURL}
        alt={tags}
        onClick={() => onClick(largeImageURL, tags)}
      />
    </PhotoCard>
  );
};

ImageGalleryItem.propTypes = {
  el: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

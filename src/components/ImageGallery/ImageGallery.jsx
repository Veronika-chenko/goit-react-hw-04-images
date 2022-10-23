import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { ImageList } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export const ImageGallery = ({ data, onImageClick }) => {
  return (
    <ImageList>
      {data.map(el => (
        <ImageGalleryItem key={el.id} el={el} onClick={onImageClick} />
      ))}
    </ImageList>
  );
};

ImageGallery.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

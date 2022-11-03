import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { ImageList } from './ImageGallery.styled';

export const ImageGallery = ({ galleryList }) => {
  return (
    <ImageList>
      {galleryList.map(item => (
        <ImageGalleryItem key={item.id} item={item} />
      ))}
    </ImageList>
  );
};

ImageGallery.propTypes = {
  galleryList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { ImageList } from './ImageGallery.styled';

export const ImageGallery = ({ data }) => {
  return (
    <ImageList>
      {data.map(el => (
        <ImageGalleryItem key={el.id} el={el} />
      ))}
    </ImageList>
  );
};

ImageGallery.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

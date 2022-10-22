import { GalleryItem } from './ImageGalleryItem';
import { ImageList } from './Gallery.styled';

export const ImageGallery = ({ data }) => {
  // console.log(data);
  // const id =
  return (
    <ImageList>
      {data.map(el => (
        <GalleryItem key={el.id} el={el} />
      ))}
    </ImageList>
  );
};

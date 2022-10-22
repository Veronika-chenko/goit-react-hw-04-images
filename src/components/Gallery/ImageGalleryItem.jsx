import { PhotoCard } from './Gallery.styled';

export const GalleryItem = ({ el }) => {
  return (
    <PhotoCard>
      <img src={el.webformatURL} alt={el.tags} />
    </PhotoCard>
  );
};

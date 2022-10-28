import { useState } from 'react';
import { LoadMoreButton } from './Button.styled';

export const Button = ({ currPage, onClick }) => {
  const [page, setPage] = useState(currPage);

  const handleClick = () => {
    setPage(prevState => prevState + 1);
    onClick(page);
  };

  return (
    <LoadMoreButton type="button" onClick={handleClick}>
      Load more
    </LoadMoreButton>
  );
};

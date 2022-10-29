import { useState } from 'react';
import PropTypes from 'prop-types';
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

Button.propTypes = {
  currPage: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

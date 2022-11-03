import PropTypes from 'prop-types';
import { FiSearch } from 'react-icons/fi';
import {
  SearchBox,
  SearchForm,
  SearchButton,
  SearchInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.elements.searchQuery.value;
    if (query.trim() === '') return;
    onSubmit(query);
  };

  return (
    <SearchBox>
      <SearchForm onSubmit={handleSubmit}>
        <SearchButton type="submit">
          <FiSearch />
        </SearchButton>

        <SearchInput
          type="text"
          name="searchQuery"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchBox>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

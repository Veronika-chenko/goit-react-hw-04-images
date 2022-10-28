import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import {
  SearchBox,
  SearchForm,
  SearchButton,
  SearchInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChande = e => setQuery(e.currentTarget.value);

  const handleSubmit = e => {
    e.preventDefault();
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
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChande}
        />
      </SearchForm>
    </SearchBox>
  );
};

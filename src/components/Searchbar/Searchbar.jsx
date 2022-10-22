import { Component } from 'react';
import { SearchBox, SearchForm } from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    queryName: '',
  };

  handleChande = e => {
    this.setState({ queryName: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.queryName.trim() === '') {
      return;
    }
    this.props.onSubmit(this.state.queryName);
  };

  render() {
    const { queryName } = this.state;
    return (
      <SearchBox>
        <SearchForm onSubmit={this.handleSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={queryName}
            onChange={this.handleChande}
          />
        </SearchForm>
      </SearchBox>
    );
  }
}

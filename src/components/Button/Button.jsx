import { Component } from 'react';
import { LoadMoreButton } from './Button.styled';

export class Button extends Component {
  state = {
    pageNum: this.props.currPage,
  };

  handleIncrement = () => {
    this.setState(prevState => ({
      pageNum: prevState.pageNum + 1,
    }));
  };

  handleClick = () => {
    this.handleIncrement();
    this.props.onClick(this.state.pageNum);
  };

  render() {
    return (
      <LoadMoreButton type="button" onClick={this.handleClick}>
        Load more
      </LoadMoreButton>
    );
  }
}

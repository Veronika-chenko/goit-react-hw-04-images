import styled from "styled-components";

export const SearchBox = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 20px;
    background-color: #db7093;
`
export const SearchForm = styled.form`
    position: relative;
`
export const SearchButton = styled.button`
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    padding: 4px;
    background-color: transparent;
    display: flex;
    align-items: center;

`
export const SearchInput = styled.input`
    height: 20px;
    padding: 2px 4px 2px 24px;
    border: none;
    border-radius: 2px;
`
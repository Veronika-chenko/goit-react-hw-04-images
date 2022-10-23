import styled from "styled-components";

export const SearchBox = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 20px;
    padding: 10px;
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
    width: 30px;
    height: 30px;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    & svg {
        width: 15px;
        height: 15px;
    }

`
export const SearchInput = styled.input`
width: 300px;
    height: 30px;
    padding: 4px 4px 4px 30px;
    border: none;
    border-radius: 2px;
`
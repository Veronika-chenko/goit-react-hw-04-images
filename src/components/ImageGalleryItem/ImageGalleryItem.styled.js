import styled from "styled-components";

export const PhotoCard = styled.li`
margin-bottom: 15px;

    @media screen and (min-width: 768px) {
        width: calc(100% / 2 - 15px);
        margin-left: 15px;
    }
    @media screen and (min-width: 1000px) {
        width: calc(100% / 3 - 15px);
        margin-left: 15px;
    }
    @media screen and (min-width: 1280px) {
        width: calc(100% / 4 - 15px);
    }
    
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
            0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`
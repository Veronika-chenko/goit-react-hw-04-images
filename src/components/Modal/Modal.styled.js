import styled from "styled-components";

export const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
`
export const ModalWrap = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-height: 200px;
    max-width: 300px;
    width: 100%;
    border-radius: 4px;
    box-shadow: 0 4px 10px #0000000d;

    @media screen and (min-width: 768px) {
        max-width: 500px;
    }

    @media screen and (min-width: 1000px) {
        max-width: 900px
    }
`
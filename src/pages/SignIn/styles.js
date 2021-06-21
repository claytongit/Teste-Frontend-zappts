import styled from 'styled-components'
import global from '../../Global';

export const Signin = styled.div`
    display: flex;

    @media (max-width: 920px){
        flex-direction: column;
        overflow-x: none;
    }
`;

export const ContainerSlider = styled.div`
    width: 50vw;
    height: 100vh;
    padding-bottom: 50px;
    background-color: ${global.backgroundSlider};
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 920px){
        width: 100vw;
        display: none;
    }
`;

export const SliderDiv = styled.div`
    height: 90vh;
`;

export const Form = styled.div`
    width: 50vw;
    height: 100vh; 
    padding: 0 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 920px){
        width: 100vw;
        padding: 0;
    }
`;

export const TextForm = styled.h1`
    text-align: right;

    @media (max-width: 920px){
        text-align: center;
    }
`;
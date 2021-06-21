import styled, { css } from 'styled-components'
import global from '../../Global';

export const ContainerRegister = styled.div`
    width: 60%;
    margin: 30px auto;

    h2{
        font-size: ${global.textSizeFor};
        font-weight: ${global.containerTitleWeight};
        color: ${global.TextColorSecondary};
        text-align: center;
        margin-bottom: 30px;
    }

    @media (max-width: 920px){
        width: 90vw;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    label{
        font-size: ${global.textSizeThree};
        color: ${global.TextColorSecondary};
        margin: 5px 0;
        display: flex;
        justify-content: space-between;

        span{
            font-size: ${global.textSizePrimary};
            color: ${global.textColorThree};
            text-align: right;
        }
    }

    @media (max-width: 920px){
        padding: 0;
    }
`;

export const Input = styled.input`
    font-size: ${global.textSizeThree};
    border: none;
    background: transparent;
    margin-bottom: 10px;
    padding: 7px;
    outline: none;
    border-bottom: 1px solid #707070;

    ${props => props.validation && css`
        border-bottom: 1px solid red;
    `}
`;

export const Forgot = styled.a`
    text-decoration: none;
    font-size: ${global.textSizeSecondary};
    color: ${global.TextColorSecondary};
    text-align: right;

    &:hover{
        opacity: .4;
    }
`;

export const ButtonSignIn = styled.button`
    width: 130px;
    margin: 30px auto;
    padding: 10px;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    background-color: ${global.TextColorSecondary};
    color: ${global.colorWhite};
    transition: opacity .5s ease-in-out;

    &:hover{
        opacity: .5;
    }
`;

export const Or = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    hr{
        width: 50%;
        border: none;
        border-top: .5px solid #dddddd;
    }

    span{
        font-size: ${global.textSizeSecondary};
        color: ${global.TextColorSecondary};
        margin: 0 15px;
    }
`;

export const ButtonGoogle = styled.a`
    width: 200px;
    border-radius: 30px;
    padding: 10px;
    background-color: #FFF;
    box-shadow: 3px 3px 4px rgba(0, 0, 0, .3);
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    margin: 30px auto;
    transition: all .3s;

    img{
        width: 20px;
        margin-right: 5px;
    }

    p{
        font-size: ${global.textSizeSecondary};
        margin: 0 5px;
        text-decoration: none;
        color: ${global.colorBlack};
        font-weight: ${global.TitleBold};
    }

    &:hover{
        box-shadow: none;
        background-color: rgb(235, 235, 235);
    }
`;

export const LinkCreate = styled.span`
    font-size: ${global.textSizeSecondary};
    color: ${global.TextColorSecondary};
    text-align: center;
    margin-top: 3px;
    a{
        color: ${global.backgroundSlider};
        margin-left: 4px;
    }

    a:hover{
        text-decoration: none;
    }
`;
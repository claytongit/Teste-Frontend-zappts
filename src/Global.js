import { createGlobalStyle  } from 'styled-components'

export default {
    colorWhite: "#FFF",
    colorBlack: "#000",
    backgroundSlider: "#A9C5BA",
    TextColorSecondary: "#707070",
    textColorThree: "red",

    textSizePrimary: "10px",
    textSizeSecondary: "12px",
    textSizeThree: "14px",
    textSizeFor: "25px",

    containerTitleWeight: "300",
    TitleBold: "bold",
}

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: sans-serif;
    }
`
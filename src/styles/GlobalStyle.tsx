import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard.css");

    h1{
        font-family: 'Pretendard-Regular';
    }
`;

export default GlobalStyle;
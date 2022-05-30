import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  
  ${normalize}
  *{
    box-sizing: border-box;
  }
    body {
        margin: 0px;
        background-color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        font-size: 10pt;
    }

    a{
        text-decoration-line: none;
        &:hover{
          cursor:pointer;
          color:#c2bbbb;
        }
      }
      textarea {
        resize: none;
    }

    ::-webkit-scrollbar {
    width: 0.9rem;
    margin: 0;
   }

    ::-webkit-scrollbar-thumb {
    height: 17%;
    background-color: #c2bbbb;
    border-radius: 10px;
    background-clip: padding-box;
    border: 0.3rem solid transparent;
    }

    button {
      &:hover{
      cursor: pointer;
      color: #c2bbbb;
    }
    border: none;
    background: none;
}
    input:focus{
    outline: none;
  }

   textarea{
     &:focus{
    outline:none;
  }}
  
    
`;

export default GlobalStyle;

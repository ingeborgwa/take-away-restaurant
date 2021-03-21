import { createGlobalStyle} from 'styled-components';



const GlobalStyle = createGlobalStyle `

    *{ 
        box-sizing:border-box;
        margin: 0px; 
        
    }


    body{
        font-family:'Poppins', sans-serif;
        background-color:${props => props.theme.colors.white};
        
    }

`;

export default GlobalStyle;
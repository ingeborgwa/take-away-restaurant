import { createGlobalStyle} from 'styled-components';
import theme from '../../styles/theme';



const GlobalStyle = createGlobalStyle `

    *{ 
        box-sizing:border-box;
        margin: 0px; 
        
    }


    body{
        font-family:'Poppins', sans-serif;
        background-color:${props => props.theme.colors.beige};
        
    }

`;

export default GlobalStyle;
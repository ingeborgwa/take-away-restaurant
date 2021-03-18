import { AuthProvider } from '../auth';
import { Basket } from "../contexts/BasketContext";

import GlobalStyle from '../components/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';


function MyApp({ Component, pageProps }) {

  return ( 
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
          <AuthProvider>
            <Basket>
              <Component {...pageProps} />
            </Basket>
          </AuthProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
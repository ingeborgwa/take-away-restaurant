import { AuthProvider } from '../auth';
import GlobalStyle from '../components/GlobalStyle';


function MyApp({ Component, pageProps }) {

  return ( 
    <>
      <GlobalStyle />
      <AuthProvider>
      <Component {...pageProps} />
      </AuthProvider>
    </>
  )
}

export default MyApp
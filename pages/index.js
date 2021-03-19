import Nav from './nav';
import Link from 'next/link';
import styled from 'styled-components';
// import img from '../public/frontPageImg.jpg'

const MainBase = styled.main`

  margin-top: auto;
  margin-bottom: auto;
  height: 100vh;
  text-align: center;

  background-color: ${props => props.theme.colors.beige};

`;

const LogInBox = styled.div`
  
  border-style: solid;
  border-color:${props => props.theme.colors.black};
  margin-left: auto;
  margin-right: auto; 

  width: 20em;
  height: 7em;
  padding: 2em 0;
  text-align: center;
  text-decoration: underline;
  
`;

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;

`;



export default function Home (){
  return(
    
    <MainBase>
        <h1>Børres Burger</h1>
          <LogInBox>
            <Link href="/login">
              <h2>Logg inn for å bestille</h2>
            </Link>
        </LogInBox>  
        <Wrapper>
          <Link href="meny"><h2>Se vår meny her</h2></Link>
        </Wrapper>
    </MainBase>
    
  )
}




import Link from 'next/link';
import styled from 'styled-components';


export default function Home (){
  return(
    
    <MainBase>
      <Wrapper>
        <h1>Børres Burger</h1>
          <LogInBox>
            <Link href="/login">
              <h3>Logg inn for å bestille</h3>
            </Link>
        </LogInBox>  
        <Link href="meny"><h3>Se vår meny her</h3></Link>
      </Wrapper>
    </MainBase>
    
  )
}

//STYLES

const MainBase = styled.main`

  background: url("/frontPageImg.jpg");
  background-repeat:no-repeat;
  background-size: cover;
  background-position: right;

  height: 100vh;
  text-align: center;

  h3{
    &:hover {
      color:${props => props.theme.colors.yellow};
    }
  }
`;

const LogInBox = styled.div`
  width: 20em;
  height: 5em;
  padding: 1em 0;
  text-align: center;
  text-decoration: underline;
  
`;

const Wrapper = styled.div`
  /* display: flex;
  justify-content: center; */

  margin-left: auto;
  margin-right: auto;   

  background-color: rgba(0,0,0, 0.4 );
  color: ${props => props.theme.colors.beige};
  height: 13em;
  width: 25em;
  padding: 2em;

  border-style: solid;
  border-color:${props => props.theme.colors.black};

`;




import firebase from '../config/firebase';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useAuth } from '../auth';
import { useBasket } from '../contexts/BasketContext';
import styled from 'styled-components';

import LogInOutBtn from '../components/LogInOutBtn';




function Meny (){
    const basket = useBasket ();
    const {user} = useAuth();


    return(
        <Main>
            <Header>
                    <Link href="/"><h3>Børres Burger</h3></Link>
                    <div>
                        <LogInOutBtn />
                        <p> {user ? (
                            <Link href="/cart">
                            <a>Handlekurv <span>{basket.total} NOK</span></a>
                            </Link>) : ("")}
                        </p>
                        
                    </div>
            </Header>
            
            <h1>Meny</h1>
                <Wrapper>
                    <MenyBox>
                        <Link href="/burgers">
                            <h2>Burgere</h2>
                        </Link>
                    </MenyBox>
                    <MenyBox>
                        <Link href="/sides">
                            <h2>Tilbehør</h2>
                        </Link>
                    </MenyBox>
                    <MenyBox>
                        <Link href="/drinks">
                            <h2>Drikke</h2>
                        </Link>
                    </MenyBox> 
                </Wrapper>   
            
        </Main>
    )
}




export default Meny;


//STYLE

const Header = styled.header `
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid black; 
    padding: 0.6em;
    margin-left: auto;
    margin-right: auto;
    width: 700px; 
    align-items: center;

    text-decoration: none;
`;


const Main = styled.main `
    height: 100vh;
    text-align: center; 

    h1{
        margin-top:1.5em;
    }
`;

const MenyBox = styled.div`
    background-color:${props => props.theme.colors.yellow};
    border-style: solid;

    &:hover {
        background-color:${props => props.theme.colors.white};
    }

    width:9em;
    height:9em;
    text-align:center;
    
    padding-top: 2.5em;
`;

const Wrapper = styled.section`
    display: flex;
    justify-content: space-evenly;
    padding:2em;

    margin-left: auto;
    margin-right: auto;
    width: 600px;


`;

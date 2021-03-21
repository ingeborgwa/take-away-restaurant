import firebase from '../config/firebase';
import { useRouter } from 'next/router';
import { useBasket } from '../contexts/BasketContext';
import { useAuth } from '../auth';
import Link from 'next/link';
import styled from 'styled-components';


import LogInOutBtn from '../components/LogInOutBtn';
import StyledBtn from '../components/StyledBtn';




function Burgers ({burger, error}) {
    const basket = useBasket();
    const router = useRouter();
    const {user} = useAuth();

    const handleAddToBasket = (item) => {
        basket.addProductLine(item);
    }

    return (
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
            <h1>Burgere</h1>
            <StyledBtn onClick={() => router.back()}>Tilbake</StyledBtn>
            <ul>
                {burger.map(item=>{
                    return(
                        <ItemBox key={item.id}>
                            <div>
                                <h2>{item.navn}</h2>
                                <p>{item.ingredienser}</p>
                            </div>
                            <h3>{item.pris} NOK</h3>
                            <StyledBtn 
                                onClick={() => {handleAddToBasket(item)}} 
                                type="submit"> Legg til
                            </StyledBtn>
                        </ItemBox>
                    )
                })}
            </ul>
        </Main>
    )
}

Burgers.getInitialProps = async () => {
    try{
        const burgerCollection = await firebase.firestore().collection('burger');
        const burgerData = await burgerCollection.get({});

        let burger = [];
        burgerData.forEach(item => {
            burger.push({
                id:item.id,
                ...item.data()
            });

        });

        return {burger};
        
    } catch (error) {
        return{
            error: error.message
        };
    }
}

export default Burgers;


//STYLES



const Main = styled.main `
    background-color:${props => props.theme.colors.beige};
    
    text-align: center; 

    margin-left: auto;
    margin-right: auto;
`;

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid black; 
    padding: 0.6em;
    margin-left: auto;
    margin-right: auto;
    width: 600px; 
    align-items: center;

    text-decoration: none;
`;

const ItemBox = styled.div`
    border-bottom: dotted;
    margin-bottom:2em;
    margin-top:2em;
    padding:2em;

    width: 600px; 
    margin-left: auto;
    margin-right: auto;


`;



import styled from 'styled-components';
import { useRouter } from 'next/router';
import firebase from '../config/firebase';
import Link from 'next/link';
import { useBasket } from '../contexts/BasketContext';
import { useAuth } from '../auth';

import StyledBtn from '../components/StyledBtn';
import LogInOutBtn from '../components/LogInOutBtn';




export default function Cart() {
    const basket = useBasket();
    const router = useRouter();
    const {user} = useAuth();

    const handleRemoveProduct = (id) => {
        basket.removeProductLine(id);
    };


    function handleOrderPush(){

        const collection = firebase.firestore().collection('orders')
        collection
            .add({
                items: [...basket.productLines],
                complete: false,
                bill: basket.total,
                orderNumber: Math.floor(Math.random() * 1000),

            })
            .then((doc) => {
                // console.log ('pushed to firebase', doc.id)
                router.push(`confirmedOrder/${doc.id}`)
            })
            .then (() => {
                basket.clearCart();
            })
            .catch((error) => {
                console.log(error)
            })
    }


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
            <h2>Handlekurv</h2>
            <StyledBtn onClick={() => router.back()}>Tilbake</StyledBtn>
            <section>
                {basket.productLines.map((item) => {
                    return (
                        <ItemBox>
                            <p key={item.id}>
                                {item.navn} {item.pris} kr. x {item.antall}
                            </p>
                            <StyledBtn
                                onClick = {() => {handleRemoveProduct(item.id)}}>
                                Fjern
                            </StyledBtn>
                        </ItemBox>
                    );
                })}
            </section>
            <TotalBox>
                <h4>Total {basket.total} NOK</h4>
                <StyledBtn
                    onClick = {() => {
                        handleOrderPush()}}>
                    Bestill
                </StyledBtn>
            </TotalBox>
        </Main>
    );
}





//STYLES


const Main = styled.main `
    text-align: center;

    margin-left: auto;
    margin-right: auto;

    h2{
        padding-top:2em;
    }
`;


const Header = styled.header`
    display: flex;
    justify-content: space-around;

    border-bottom: 2px solid black;
    padding: 0.6em;
    margin-left: auto;
    margin-right: auto;
    width: 600px;
    align-items: center;

    text-decoration: none;
`;

const ItemBox = styled.section`
    display:flex;
    justify-content: space-between;
    
    margin-bottom:1em;
    margin-top:1em;
    padding:1em;

    width: 400px;
    margin-left: auto;
    margin-right: auto;

`;

const TotalBox = styled.section`
    display:flex;
    justify-content: space-between;
    border-top: dotted;
    margin-top:1em;
    padding-top:1em;

    width: 400px;
    margin-left: auto;
    margin-right: auto;
`;

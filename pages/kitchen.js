import firebase from '../config/firebase';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import StyledBtn from '../components/StyledBtn'

const Kitchen = () => {

    const [orders, setOrders] = useState (null);
    const [ready, setReady] = useState (null);

    useEffect(() => {
        try {
            firebase.firestore().collection('orders').where('complete','==',false).onSnapshot((querySnapshot) => {
                let items = [];
                querySnapshot.forEach((doc) => {
                    items.push({
                        id: doc.id,
                        ...doc.data()
                    });
                });
                setOrders(items);
                console.log(items);
            })   
        }catch (error) {
            console.log(error, "error Kitchen")
        }
    }, [])



    useEffect(() => {
        try {
            firebase.firestore().collection('orders').where('complete','==',true).onSnapshot((querySnapshot) => {
                let items = [];
                querySnapshot.forEach((doc) => {
                    items.push({
                        id: doc.id,
                        ...doc.data()
                    });
                });
                setReady(items);
                console.log(items);
            })   
        }catch (error) {
            console.log(error, "error Kitchen")
        }
    }, [])


    const delivered = (item) => {   
        firebase.firestore().collection('orders').doc(item.id).delete();
        firebase.firestore().collection('delivered').doc(item.id).set({...item});
    };


    const handleReady = (item) => {
        firebase.firestore().collection('orders').doc(item.id).update({
            complete: true
        })
        .then(() =>{
            console.log('Oppdatert')
        })
    };


    return(
        <Main>
            <h1>Børres kjøkken</h1>
            <Wrapper>
            <section>
                <h2>Bestillinger</h2>
                {orders && orders.map((item) => {
                    return (
                        <Order>
                            {
                                item.items.map((product) => {
                                    return (
                                        <section>
                                            <h4>{product.navn}</h4>
                                            <p>{product.ingredienser}</p>
                                        </section>
                                    )
                                })
                            }
                            <OrderNumber>{item.orderNumber}</OrderNumber>
                            <StyledBtn 
                                onClick = {() => {handleReady(item)}}>
                                Klar til henting
                            </StyledBtn>   
                        </Order>
                    )
                })}
            </section>

            <section>
                <h2>Klar til henting</h2>
                {ready && ready.map((item) => {
                    return (
                        <Order>
                            <OrderNumber>{item.orderNumber}</OrderNumber>
                            <StyledBtn
                            onClick = {() =>{delivered(item)}}>Hentet</StyledBtn>
                        </Order>
                    )
                })}
            </section>
            </Wrapper>
        </Main>
    )


}

export default Kitchen;



// STYLES

const Main = styled.main`
    text-align: center; 
    margin-left: auto;
    margin-right: auto;

    h1{
        margin-bottom:2em;
    }
`;



const Wrapper = styled.section`
    display:flex;
    justify-content:space-evenly;

`;


const OrderNumber = styled.p`

    height: 46px;
    width: 46px;
    line-height: 46px;
    display: block;
    
    border-radius:23px;
    border-color:${props => props.theme.colors.yellow};
    border-style:solid;
    text-align: center;
        
`;

const Order = styled.article`
    display:flex;
    justify-content:space-between;

    border-bottom: dotted;
    margin-bottom:2em;
    margin-top:2em;
    padding:2em;

    width: 400px; 
    /* margin-left: auto;
    margin-right: auto; */

    

`;


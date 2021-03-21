import firebase from '../config/firebase';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


const pickUp = () => {

    const [orders, setOrders] = useState (null);

    useEffect(() => {
        try {
            firebase.firestore().collection('orders').onSnapshot((querySnapshot) => {
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
            console.log(error, "error pickUp")
        }
    }, [])


    return(
        <Main>
            <Wrapper>
                <section>
                    <h1>Lages nå</h1>
                    {orders && orders.filter(item => !item.complete).map((item) => {
                    return (
                        <section>
                            <p>{item.orderNumber}</p>  
                        </section>
                    )
                    
                })}
                </section>
                <section>
                    <h1>Klar til henting</h1>
                    {orders && orders.filter(item => item.complete).map((item) => {
                        return (
                            <section>
                                <p>{item.orderNumber}</p>
                            </section>
                        )
                    })}
                </section>
            </Wrapper>
        </Main>
    )
};

export default pickUp;



const Main = styled.main`
    text-align: center; 
    margin-left: auto;
    margin-right: auto;

    h1{
        margin: 2em;
        font-size: ${props => props.theme.fontSizes.h1};
        border-bottom: solid ${props => props.theme.colors.yellow} 5px;
    }

    p{
        font-size: ${props => props.theme.fontSizes.h2};
    }
`;



const Wrapper = styled.section`
    display:flex;
    justify-content:space-evenly;

`;

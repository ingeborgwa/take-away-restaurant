import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import firebase from '../../config/firebase';
import styled from 'styled-components';

const confirmedOrder = () => {
    const router = useRouter();
    console.log(router.query.orderId)

    
    const [order, setOrder] = useState(null);


    useEffect(() =>{
        console.log(order)
    },[order]);

    useEffect(() => {
        const orderRef = firebase.firestore().collection('orders').doc(router.query.orderId);

        orderRef.get().then((doc) => {
        if (doc.exists) {
            setOrder({
                id: doc.id,
                ...doc.data()
            });
            console.log(order);
            console.log("Document data:", doc.data().orderNumber);
        } else {
            // doc.data() will be undefined in this case3
            console.log("No such document!");
        }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });

    }, []);

    return(
        <Main>
            <h1>Bekreftelse</h1>
            <h3>Din bestilling er mottatt og er nå sendt til kjøkkenet.</h3>
            <Order>    
                <p>Ditt ordrenummer er: <b>{order && order.orderNumber}</b></p>
                <section>
                {
                    order && order.items.map((product) => {
                        return (
                            <section>
                                <h4>Du har bestilt</h4>
                                <p>{product.navn} x {product.antall}</p>
                                <p>Totalt {product.pris} NOK</p>
                            </section>
                        )
                    })
                }
                </section>
            </Order>
            <h3>Håper det smaker!</h3>
            
        </Main>
    )
};

export async function getServerSideProps (ctx) {
    console.log('LETT Å FÅ ØYE PÅ',ctx.query.orderId);

    return {props:{}}
    
};

export default confirmedOrder;



//STYLE

const Main = styled.main`
    margin-top:5em;
    text-align: center; 

    margin-left: auto;
    margin-right: auto;

    h1{
        margin: 2em;
        font-size: ${props => props.theme.fontSizes.h1};
        border-bottom: solid ${props => props.theme.colors.yellow} 5px;
    }
`;


const Order = styled.section `
    padding:2em;
`;
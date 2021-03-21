import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import firebase from '../../config/firebase';

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
        <>
            <h1>Kvittering</h1>
            <p>{order && order.orderNumber}</p>
            <section>
            {
                order && order.items.map((product) => {
                    return (
                        <section>
                            <p>{product.navn}</p>
                        </section>
                    )
                })
            }
            </section>
            
        </>
    )
};

export async function getServerSideProps (ctx) {
    console.log('LETT Å FÅ ØYE PÅ',ctx.query.orderId);

    return {props:{}}
    
};

export default confirmedOrder;
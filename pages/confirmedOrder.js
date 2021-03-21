
import firebase from '../config/firebase';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useBasket } from '../contexts/BasketContext';
import { BasketConsumer } from '../contexts/BasketContext';

function confirmedOrder () {


    // const [orders, setOrders] = useState (null);

    // useEffect(() => {
    //     try {
    //         firebase.firestore().collection('orders').onSnapshot((querySnapshot) => {
    //             let items = [];
    //             querySnapshot.forEach((doc) => {
    //                 items.push({
    //                     id: doc.id,
    //                     ...doc.data()
    //                 });
    //             });
    //             setOrders(items);
    //             console.log(items);
    //         })
            
    //     }catch (error) {
    //         console.log(error, "error Kitchen")
    //     }
    // }, [])

    // return(
    //     <>
    //         <section>
    //             <h2>Din bestilling er mottatt</h2>
    //             {orders && orders.map((item) => {
    //             return (
    //                 <section>
    //                     <p>Ditt ordrenummer er: {item.orderNumber}</p>  
    //                 </section>
    //             )
                
    //         })}
    //         </section>
    //     </>
    // )


    const basket = useBasket();

    return(
        <>
            <section>
                <h2>Bekreftet</h2>
            </section>
            <section>
                <h3>Din bestilling</h3>
                {basket.productLines.map((item) => {
                    return (
                        <div>
                            <p>{item.navn}</p>
                            <p>{item.pris} NOK</p>
                        </div>
                    )
                })}
            </section>
            <p> Total {basket.total} NOK </p>
            <Link href="pickUp"> Klikk her for å følge orderen din</Link>
        </>
    )

};


export default confirmedOrder; 
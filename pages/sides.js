import firebase from '../config/firebase';
import { useRouter } from 'next/router';

import { useBasket } from '../contexts/BasketContext';

import Nav from './nav';


function Sides ({sides, error}) {
    const router = useRouter();
    const basket = useBasket();

    const handleAddToBasket = (item) => {
        basket.addProductLine(item);
    }

    return (
        <>
            <Nav />
            <h2>Tilbehør</h2>
            <button onClick={() => router.back()}>Tilbake</button>
            <ul>
                {sides.map(item=>{
                    return(
                        <div key={item.id}>
                            <h2>{item.navn}</h2>
                            <h3>{item.pris}</h3>
                            <button onClick={() => {handleAddToBasket(item)}} type="submit">
                                Legg til
                            </button>
                        </div>
                    )
                })}
            </ul>
        </>
    )
}

Sides.getInitialProps = async () => {
    try{
        const sidesCollection = await firebase.firestore().collection('sides');
        const sidesData = await sidesCollection.get({});


        let sides = [];
        sidesData.forEach(item => {
            sides.push({
                id:item.id,
                ...item.data()
            });

        });

        return {sides};
        
    } catch (error) {
        return{
            error: error.message
        };
    }
}

export default Sides;
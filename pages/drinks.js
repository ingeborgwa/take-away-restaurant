import firebase from '../config/firebase';
import { useRouter } from 'next/router';

import { useBasket } from '../contexts/BasketContext';

import Nav from './nav';


function Drinks ({drinks, error}) {
    const router = useRouter()
    const basket = useBasket();

    const handleAddToBasket = (item) => {
        basket.addProductLine(item);
    }

    return (
        <>
            <Nav />
            <h2>Drikke</h2>
            <button onClick={() => router.back()}>Tilbake</button>
            <ul>
                {drinks.map(item=>{
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

Drinks.getInitialProps = async () => {
    try{
        const drinksCollection = await firebase.firestore().collection('drinks');
        const drinksData = await drinksCollection.get({});

        let drinks = [];
        drinksData.forEach(item => {
            drinks.push({
                id:item.id,
                ...item.data()
            });

        });

        return {drinks};
        
    } catch (error) {
        return{
            error: error.message
        };
    }
}

export default Drinks;
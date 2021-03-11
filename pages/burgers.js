import firebase from '../config/firebase';
import { useRouter } from 'next/router';

import { useBasket } from '../contexts/BasketContext';

<<<<<<< HEAD

=======
>>>>>>> d482c03e7a9eefce7f65e98d54460105a199fe54
import Nav from './nav';

function Burgers ({burger, error}) {
    const basket = useBasket();
    const router = useRouter();

    const handleAddToBasket = (item) => {
        basket.addProductLine(item);
    }

    return (
        <>
            <Nav />
            <h2>Burgere</h2>
            <button onClick={() => router.back()}>Tilbake</button>
            <ul>
                {burger.map(item=>{
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
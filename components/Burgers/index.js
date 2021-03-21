import firebase from '../../config/firebase';
import { useRouter } from 'next/router';
import { useBasket } from '../../contexts/BasketContext';

import StyledBtn from '../StyledBtn';


const Burgers = () => {

    const basket = useBasket();
    const router = useRouter();

    const handleAddToBasket = (item) => {
        basket.addProductLine(item);
    }

    return (
        <>
            
            <h2>Burgere</h2>
            <StyledBtn onClick={() => router.back()}>Tilbake</StyledBtn>
            <ul>
                {burger.map(item=>{
                    return(
                        <div key={item.id}>
                            <h2>{item.navn}</h2>
                            <h3>{item.pris}</h3>
                            <StyledBtn 
                                onClick={() => {handleAddToBasket(item)}} 
                                type="submit"> Legg til
                            </StyledBtn>
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

};

export default Burgers;
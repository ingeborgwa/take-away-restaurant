import firebase from '../config/firebase';
import { useRouter } from 'next/router';


function Burgers ({burger, error}) {
    
    const router = useRouter()

    return (
        <>
            <h2>Burgere</h2>
            <button onClick={() => router.back()}>Tilbake</button>
            <ul>
                {burger.map(item=>{
                    return(
                        <div key={item.id}>
                            <h2>{item.navn}</h2>
                            <h3>{item.pris}</h3>
                            <button>Legg til</button>
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
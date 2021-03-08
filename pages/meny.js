import firebaseInstance from '../config/firebase';

import Nav from './nav';


function Meny ({burger, error}){

    return(
        <main>
            <Nav />
            <h1>Meny</h1>
            <ul>
                {burger.map(item=>{
                    return(
                        <div key={item.id}>
                            <h2>{item.navn}</h2>
                            <p>{item.ingredienser}</p>
                            <h3>{item.pris}kr</h3>
                            <button>Legg til</button>
                        </div>
                    )
                })}
            </ul>
        </main>
    )
}


Meny.getInitialProps= async( ) =>{

    try {
        const brugerCollection = await firebaseInstance.firestore().collection('burger');
        const burgerData = await brugerCollection.get({})

        let burger = [];
        burgerData.forEach(item =>{
            burger.push({
                id: item.id,
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

export default Meny;
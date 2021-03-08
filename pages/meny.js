import firebase from '../config/firebase';
import { useRouter } from 'next/router';
import Link from 'next/link';

import Nav from './nav';


function Meny ({burger, error}){
    const router = useRouter();

    const handleSignOut = async () => {
        await firebase.auth().signOut();
        router.push("/");
    };

    return(
        <main>
            <Nav />
            <h1>Meny</h1>
            <button onClick={handleSignOut}>Logg ut</button>
            <Link href="/burgers">
                <h2>Burgere</h2>
            </Link>
            <Link href="/sides">
                <h2>Tilbehør</h2>
            </Link>
            <Link href="/drinks">
                <h2>Drikke</h2>
            </Link>
            
        </main>
    )
}



            // <ul>
            //     {burger.map(item=>{
            //         return(
            //             <div key={item.id}>
            //                 <h2>{item.navn}</h2>
            //                 <p>{item.ingredienser}</p>
            //                 <h3>{item.pris}kr</h3>
            //                 <button>Legg til</button>
            //             </div>
            //         )
            //     })}
            // </ul>





// Meny.getInitialProps = async() => {
//     try{
//         const burgerCollection = await firebase.firestore().collection('burger');
//         const burgerData = await burgerCollection.get({})

//         let burger = [];
//         burgerData.forEach(item => {
//             burger.push({
//                 id: item.id,
//                 ...item.data()
//             });

//         });

//         return {burger};
        
//     }catch(error) {
//         return{
//             error: error.message
//         };
        
//     }

// }

export default Meny;
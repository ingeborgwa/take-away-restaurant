import firebase from '../config/firebase';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useAuth } from '../auth';
import { useBasket } from '../contexts/BasketContext';
import styled from 'styled-components';

import LogInOutBtn from '../components/LogInOutBtn';


const Header = styled.header `
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid black; 
    padding: 0.6em;
    margin-left: auto;
    margin-right: auto;
    width: 700px; 
    align-items: center;

    text-decoration: none;
`;


const Main = styled.main `
    background-color:${props => props.theme.colors.beige};
    height: 100vh;
    text-align: center; 
`;

const MenyBox = styled.div`
    /* display: flex;
    justify-content: center; */
    background-color: ${props => props.theme.colors.beige};
    border-style: solid;

    &:hover {
        background-color:${props => props.theme.colors.yellow};
    }

    width:9em;
    height:9em;
    
    align-content:center;
    padding: 2em;
`;

const Wrapper = styled.section`
    display: flex;
    justify-content: space-evenly;
    padding:2em;

    margin-left: auto;
    margin-right: auto;
    width: 600px;


`;


function Meny (){
    const basket = useBasket ();
    const {user} = useAuth();


    return(
        <Main>
            <Header>
                    <Link href="/"><h3>Børres Burger</h3></Link>
                    <div>
                        <LogInOutBtn />
                        <p> {user ? (
                            <Link href="/cart">
                            <a>Handlekurv <span>{basket.total} NOK</span></a>
                            </Link>) : ("")}
                        </p>
                        
                    </div>
            </Header>
            
            <h1>Meny</h1>
                <Wrapper>
                    <MenyBox>
                        <Link href="/burgers">
                            <h2>Burgere</h2>
                        </Link>
                    </MenyBox>
                    <MenyBox>
                        <Link href="/sides">
                            <h2>Tilbehør</h2>
                        </Link>
                    </MenyBox>
                    <MenyBox>
                        <Link href="/drinks">
                            <h2>Drikke</h2>
                        </Link>
                    </MenyBox> 
                </Wrapper>   
            
        </Main>
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
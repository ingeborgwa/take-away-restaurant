import React, { useState } from 'react';
import firebase from '../config/firebase';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';


const Login = () => {

    const [email, setEmail]=useState(null);
    const [password, setPassword]=useState(null);
    const [error, setError]=useState(null);
    const history = useRouter();
    
    const handleSubmit = async(event)=>{

        event.preventDefault();

        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            history.push("/meny")
            console.log("Du har blitt logget inn");
            
        } catch (error) {
            setError(error.message);
            console.log("Noe gikk galt");
        }
    };
    
    return(
        <Main>
            <Box>
                <h2>Logg inn</h2>
                <form onSubmit={handleSubmit}>
                    <h3>E-post</h3>
                    <input 
                        type="text" 
                        name="email" 
                        placeholder="Email"
                        onChange={e=>setEmail(e.target.value)}
                    />
                    <h3>Passord</h3>
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Passord"
                        onChange={e=>setPassword(e.target.value)}
                    />
                    <button type="submit">Logg inn</button>
                    <Link href="/signup">
                        <a>Registrer ny bruker her</a>
                    </Link>
                </form>
            </Box>
        </Main>

    )
}

export default Login;



//STYLES


const Main = styled.main `
    background-color:${props => props.theme.colors.beige};
    text-align: center; 
    height:100vh;
    margin-left: auto;
    margin-right: auto;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  text-align: end;

  margin-left: auto;
  margin-right: auto;   

  margin-top:10em;

  background-color: ${props => props.theme.colors.yellow};
  color: ${props => props.theme.colors.black};
  height: 13em;
  width: 25em;
  padding: 2em;

  border-style: solid;
  border-color:${props => props.theme.colors.black};

`;
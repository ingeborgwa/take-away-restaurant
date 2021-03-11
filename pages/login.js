import React, { useState } from 'react';
import firebase from '../config/firebase';
import { useRouter } from 'next/router';
import Link from 'next/link';

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
        <>
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
        </>

    )
}

export default Login;

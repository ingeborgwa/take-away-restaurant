import React, { useState } from 'react';
import firebase from '../config/firebase';
import Link from 'next/link';
import { useRouter } from 'next/router';


const SignUp = ()=>{

    const [email, setEmail]=useState(null);
    const [password, setPassword]=useState(null);
    const [error, setError]=useState(null);
    const history = useRouter();
    
    
    
    const handleSubmit = async(event)=>{
        event.preventDefault();

        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password);
            history.push("/meny");
            console.log("Du har blitt logget inn");
            
        } catch (error) {
            setError(error.message);
            console.log("Noe gikk galt");
        }
    };
    
    return(
        <>
        <h2>Registrer bruker</h2>
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
                placeholder="Minst seks tegn"
                onChange={e=>setPassword(e.target.value)}
            />
            <button type="submit">Registrer</button>
            <Link  href="/login">
            <a>Har du bruker? Logg inn her</a>
            </Link>
        </form>
        </>
    )
}

export default SignUp;
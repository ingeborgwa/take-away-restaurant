import React, { useState } from 'react';
import firebase from '../config/firebase';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '../auth';


const SignUp = () => {

    const user = useAuth();

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [fullName, setFullName] = useState(null);
    const [error, setError] = useState(null);
    const history = useRouter();

    const usersCollection = firebase.firestore().collection('users');
   
     
    const handleSubmit = async(event) => {
        event.preventDefault();
        console.log (email, password, fullName);

        try {
            const users = await firebase.auth().createUserWithEmailAndPassword(email, password);
            await users.updateProfile({displayName : fullName})

            usersCollection.doc(users.user.uid).set({
                userId: users.user.uid, 
                userEmail: users.user.email,
                userName: users.user.fullName,
            })
            
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
            <h3>Navn</h3>
            <input 
                type="text" 
                name="fullName" 
                placeholder="Navn"
                onChange={e=>setFullName(e.target.value)}
            />
            <h3>E-post</h3>
            <input 
                type="text" 
                name="email" 
                placeholder="E-post"
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
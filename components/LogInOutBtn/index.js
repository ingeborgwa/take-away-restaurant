import Link from 'next/link';
import React from 'react';
import firebase from '../../config/firebase';
import { useAuth } from '../../auth';
import { useRouter } from 'next/router';



import StyledBtn from '../StyledBtn';


const LogInOutBtn = () => {
  const router = useRouter();
  const {user} = useAuth();

  const handleSignout = async () => {
    await firebase.auth().signOut();
    router.push("/meny");
  };

  return (
    <>
      {user ? (
        <StyledBtn onClick={handleSignout}>Logg ut</StyledBtn>
      ) : (
        <>
          <Link href="/login"><StyledBtn>Logg inn</StyledBtn></Link>
        </>
      )}
    </>
  );
};

export default LogInOutBtn;


import Link from 'next/link';
import React from 'react';
import firebase from '../../config/firebase';
import { useAuth } from '../../auth';
import { useRouter } from 'next/router';

const LogInOutBtn = () => {
  const router = useRouter();
  const user = useAuth();

  const handleSignout = async () => {
    await firebase.auth().signOut();
    router.push("/meny");
  };

  return (
    <>
      {user ? (
        <button onClick={handleSignout}>Logg ut</button>
      ) : (
        <>
          <Link href="/login"><button>Logg inn</button></Link>
        </>
      )}
    </>
  );
};

export default LogInOutBtn;
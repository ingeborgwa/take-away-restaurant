import Nav from './nav';
import Link from 'next/link';


export default function Home (){
  return(
    <>
      <Nav />
      <h1>Børres Burger</h1>
      <Link href="/login">
        <h2>Logg inn for å bestille</h2>
      </Link>
      <Link href="/burgers">
        <h2>Burgere</h2>
      </Link>
      <Link href="/sides">
        <h2>Tilbehør</h2>
      </Link>
      <Link href="/drinks">
        <h2>Drikke</h2>
      </Link>
    </>
  )
}
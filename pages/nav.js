import Link from 'next/link';

export default function Nav () {
    return(
        <header>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/meny">
                        <a>Meny</a>
                    </Link>
                </li>
                <li>
                    <Link href="/handlekurv">
                        <a>Handlekurv</a> 
                    </Link>
                </li>
            </ul>
        </header>
    )
}
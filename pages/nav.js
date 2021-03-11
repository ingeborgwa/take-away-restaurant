import Link from 'next/link';

import { useBasket } from '../contexts/BasketContext';
import { useAuth } from '../auth';

export default function Nav () {
    const basket = useBasket ();
    const user = useAuth();

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
                {user ? (
                    <li>
                        <Link href="/cart"><a>Handlekurv <span>{basket.total} NOK</span></a></Link>
                    </li> 
                    ) : (
                    ""
                )}
            </ul>
        </header>
    )
}




{/* <li>
    <Link href="/cart">
        <a>Handlekurv <span>{basket.total} NOK</span></a> 
    </Link>
</li> */}


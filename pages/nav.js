import Link from 'next/link';
import styled from 'styled-components';

import { useBasket } from '../contexts/BasketContext';
import { useAuth } from '../auth';


export const StyledNav = styled.nav `
    nav{
        max-width:960px;
        margin: 0 auto;
    }
    


`;





export default function Nav () {
    const basket = useBasket ();
    const {user} = useAuth();

    return(
        <header>
            <StyledNav>
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
            </StyledNav>
        </header>
    )
}





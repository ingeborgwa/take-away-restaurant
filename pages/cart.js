import styled from 'styled-components';
import { useRouter } from 'next/router';

import { useBasket } from '../contexts/BasketContext';

import Nav from './nav';



const Box = styled.div`
    width: 100px;
    height: 100px;
    background: #000;
    margin: ${(props) => props.theme.space[3]};
    position: relative;
   
`;


export default function Cart() {
    const basket = useBasket();
    const router = useRouter();


<<<<<<< HEAD
    const handleRemoveProduct = (id) => {
        basket.removeProductLine(id);
    };


=======
>>>>>>> d482c03e7a9eefce7f65e98d54460105a199fe54
    return(
        <>
            <Nav />
            <h1>Handlekurv</h1>
<<<<<<< HEAD
=======
            <Box></Box>
>>>>>>> d482c03e7a9eefce7f65e98d54460105a199fe54
            <button onClick={() => router.back()}>Tilbake</button>
            <div>
                {basket.productLines.map((item) => {
                    return (
                        <div>
                            <p key={item.id}>
                                {item.navn} {item.pris} kr.
                            </p>
                            <button onClick = {() => {
                                handleRemoveProduct(item.id)
                            }}>
                                Fjern
                            </button>
                        </div>
                    );
                })}
            </div>
            <p>Total {basket.total} NOK</p>
            <button>Bestill</button>
        </>
    );
}
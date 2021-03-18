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


    const handleRemoveProduct = (id) => {
        basket.removeProductLine(id);
    };


    return(
        <>
            <Nav />
            <h1>Handlekurv</h1>
            <button onClick={() => router.back()}>Tilbake</button>
            <div>
                {basket.productLines.map((item) => {
                    return (
                        <div>
                            <p key={item.id}>
                                {item.navn} {item.pris} kr.
                            </p>
                            <input type="number"/>
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
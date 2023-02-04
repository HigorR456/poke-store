import React from 'react';
import Link from 'next/link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

const Cart = ({ props }: any) => {
    return (
        <div className='cartWrapper'>
            <Link href="./MyCart">
                <button className='cartButton'>
                    <FontAwesomeIcon icon={faCartShopping}/>
                    <p className='itemQty'>{props}</p>
                </button>
            </Link>
                
            
        </div>
    );
};

export default Cart;
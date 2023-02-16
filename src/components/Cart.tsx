import React from 'react';
import { useState, useEffect } from 'react'
import Link from 'next/link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

import { useSelector, useDispatch } from 'react-redux';
import { assignArr, increment, decrement, reset } from '../features/cartSlice';


const Cart = () => {

    const count = useSelector((state: any) => state.cart);
    const [countTotal, setCountTotal]: any = useState(0);


    useEffect(() => {
        let quantity = 0;
        count.map((e:any) => {
            quantity = quantity + e.quantity;
        });
        setCountTotal(quantity)
    }, [count])

    return (
        <div className='cartWrapper'>
            <Link href="./MyCart" className='cartLink'>
                    <FontAwesomeIcon icon={faCartShopping}/>
                    <div className={countTotal > 0 ? 'circleQty' : 'hide'}>
                        <p className='itemQty'>{countTotal}</p>
                    </div>
            </Link>
        </div>
    );
};


export default Cart;
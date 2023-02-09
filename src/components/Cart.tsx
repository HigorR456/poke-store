import React from 'react';
import { useState } from 'react'
import Link from 'next/link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

import { useSelector, useDispatch } from 'react-redux';
import { increment, reset } from '../features/cartSlice';


const Cart = () => {

    const count = useSelector((state: any) => state.counter);

    //let count: any = {};
    //['a', 'a', 'b', 'c','c','c'].forEach((x: any) => { count[x] = (count[x] || 0) + 1; });



    return (
        <div className='cartWrapper'>
            <Link href="./MyCart" className='cartLink'>
                    <FontAwesomeIcon icon={faCartShopping}/>
                    <div className={count.length > 0 ? 'circleQty' : 'hide'}>
                        <p className='itemQty'>{count.length}</p>
                    </div>
            </Link>
        </div>
    );
};


export default Cart;
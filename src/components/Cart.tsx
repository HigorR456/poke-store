import React from 'react';
import { useState } from 'react'
import Link from 'next/link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

let propsArray: any = [];

const Cart = ({ props, mycartProps }: any) => {
    //const [propsArray, setPropsArray]: any = useState([]);
    
        propsArray = props;
        console.log({propsArray})

        //const count: any = {};
        //['a', 'a', 'b', 'c','c','c'].forEach((x: any) => { count[x] = (count[x] || 0) + 1; });
        //console.log({count})

        const handleMyCart = () => {
            mycartProps(propsArray);
        }
    

    return (
        <div className='cartWrapper'>
            <Link href="./MyCart" onClick={handleMyCart}>
                <button className='cartButton'>
                    <FontAwesomeIcon icon={faCartShopping}/>
                    <p className='itemQty'>{props.length}</p>
                </button>
            </Link>
                
            
        </div>
    );
};

export default Cart;
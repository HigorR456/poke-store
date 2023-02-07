import React from 'react';
import { useState } from 'react'
import Link from 'next/link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

let propsArray: any = [];
let hey = [];

const Cart = ({ props }: any) => {
    //const [propsArray, setPropsArray]: any = useState([]);
        //setPropsArray(props);
        //propsArray = props;
        console.log(propsArray)
        hey = props;
        //const count: any = {};
        //['a', 'a', 'b', 'c','c','c'].forEach((x: any) => { count[x] = (count[x] || 0) + 1; });
        //console.log({count})

        const handleMyCart = () => {
            props(propsArray);
        }

    return (
        <div className='cartWrapper'>
            <Link href="./Asda" >
                <button className='cartButton' onClick={handleMyCart}>
                    <FontAwesomeIcon icon={faCartShopping}/>
                    <p className='itemQty'>{props.length}</p>
                </button>
            </Link>
                
            
        </div>
    );
};


export default Cart;
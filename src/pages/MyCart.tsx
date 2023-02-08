import React from 'react';
import { useState } from 'react';
import Title from '../components/Title';
import NavBar from '../components/NavBar';
import Cart from '../components/Cart';

import { useSelector, useDispatch } from 'react-redux';
import { increment, reset } from '../features/cartSlice';


const MyCart = () => {

    const cartInfo = useSelector((state: any) => state.counter);

    return (
        <>
            <header><Title /></header>

            <nav><NavBar /></nav>

            <main>
                <Cart />

                <h2>My Cart Page</h2>

                <tr className='listItemWrap'>
                        <div className='listContent' id='cartListHeader'>
                            <div className='cartContentImg'>
                                <p>Sprite</p>
                            </div>

                            <div className='cartContentText'>
                                <p>Item</p>
                            </div>

                            <div className='cartContentPrice'>
                                <p>Price</p>
                            </div>

                            <div className='cartContentQty'>
                                <p>Qty</p>
                            </div>

                            <div className='cartContentFullPrice'>
                                <p>Total Price</p>
                            </div>
                        </div>
                    </tr>

                {cartInfo.map((item: any) => {
                    const result = 
                    <tr className='listItemWrap'>
                        <div className='listContent'>
                            <div className='cartContentImg'>
                                <img src={item.sprites.front_default}></img>
                            </div>

                            <div className='cartContentText'>
                                <p style={{fontWeight: 'bold'}}>{item.name}</p>
                                <p>EXP {item.base_experience}</p>
                                <p>{item.types[0].type.name}</p>
                                <p>{((item.types.length) >= 2 ? (item.types[1].type.name) : null)}</p>
                            </div>

                            <div className='cartContentPrice'>
                                <p>${(item.base_experience / 20)+ 20}</p>
                            </div>

                            <div className='cartContentQty'>
                                <p>Qty</p>
                            </div>

                            <div className='cartContentFullPrice'>
                                <p>total qty x price</p>
                            </div>
                        </div>
                    </tr>


                    return result;
                })}

            </main>
        
        </>
    );
};

export default MyCart;
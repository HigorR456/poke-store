import React from 'react';
import { useState, useEffect } from 'react';
import Title from '../components/Title';
import NavBar from '../components/NavBar';
import Cart from '../components/Cart';

import { useSelector, useDispatch } from 'react-redux';
import { assignArr, increment, decrement, reset } from '../features/cartSlice';

const MyCart = () => {

    const cartInfo = useSelector((state: any) => state.counter);
    const [total, setTotal]: any = useState(0);
    
    const dispatch = useDispatch();


    const handleSub = (e: any) => {
        const name = (e.target.parentElement.parentElement.parentElement.querySelector('.cartContentProduct').querySelector('div').querySelector('div').textContent);

        dispatch(decrement(name));
    }

    const handleAdd = (e: any) => {
        const name = (e.target.parentElement.parentElement.parentElement.querySelector('.cartContentProduct').querySelector('div').querySelector('div').textContent);

        dispatch(increment(name));
    }

    useEffect(() => {
    }, [])

    

    return (
        <>
            <header><Title /></header>

            <nav><NavBar /></nav>

            <main>

                <Cart />

                <h2>My Cart</h2>

                <table className='cartTableWrap'>
                    <thead className='cartHeadWrap'>
                        <tr className='cartHeadItems'>
                            <th>Product</th>        
                            <th>Price</th>        
                            <th>Quantity</th>        
                            <th>Subtotal</th>        
                        </tr>
                    </thead>

                    <tbody className='cartBodyWrap'>
                    {cartInfo.map((item: any) => {
                        const result = 
                        <tr className='cartContentRow'>
                                <td className='cartContentProduct'>
                                    <img src={item.sprites.front_default}></img>
                                    <div>
                                        <div style={{fontWeight: 'bold'}}>{item.name}</div>
                                        <div>EXP {item.base_experience}</div>
                                        <div>{item.types[0].type.name}</div>
                                        <div>{((item.types.length) >= 2 ? (item.types[1].type.name) : null)}</div>
                                    </div>
                                </td>

                                <td className='cartContentPrice'>
                                    ${((item.base_experience / 20)+ 20).toFixed(2)}
                                </td>

                                <td className='cartContentQty'>
                                    <div className='changeQty'>
                                        <button className='qtyButton' disabled={item.quantity === 1} onClick={handleSub}>-</button>
                                        <span>{item.quantity}</span>
                                        <button className='qtyButton' onClick={handleAdd}>+</button>
                                    </div>
                                </td>

                                <td className='cartContentSubtotal'>
                                    ${((item.quantity) * ((item.base_experience / 20)+ 20)).toFixed(2)}
                                </td>

                                <td className='cartDeleteItem'>
                                    <button className='deleteItem'>X</button>
                                </td>
                        </tr>


                        return result;
                    })}
                    </tbody>

                    <tfoot>
                        <tr>
                            <div className='listContent' id='cartListHeader'>
                                <div className='cartContentTotal'>
                                    <p>Total: {total.toFixed(2)}</p>
                                </div>
                            </div>
                        </tr>
                    </tfoot>
                </table>
                

            </main>
        
        </>
    );
};

export default MyCart;
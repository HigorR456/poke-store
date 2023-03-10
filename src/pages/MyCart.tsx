import React from 'react';
import { useState, useEffect } from 'react';
import Title from '../components/Title';
import NavBar from '../components/NavBar';

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, removeArr } from '../features/cartSlice';

const MyCart = () => {

    const cartInfo = useSelector((state: any) => state.cart);
    const [total, setTotal]: any = useState(0);
    const dispatch = useDispatch();

    //subtract item quantity
    const handleSub = (e: any) => {
        const name = (e.target.parentElement.parentElement.parentElement.querySelector('.cartContentProduct').querySelector('div').querySelector('div').textContent);

        dispatch(decrement(name));
    }

    //add item quantity
    const handleAdd = (e: any) => {
        const name = (e.target.parentElement.parentElement.parentElement.querySelector('.cartContentProduct').querySelector('div').querySelector('div').textContent);

        dispatch(increment(name));
    }

    //remove the item
    const handleDel = (e: any) => {
        const name = (e.target.parentElement.parentElement.querySelector('.cartContentProduct').querySelector('div').querySelector('div').textContent);

        dispatch(removeArr(name));
    }

    //total sum
    useEffect(() => {
        let sum = 0;
        cartInfo.map((e:any) => {
            sum += (e.quantity * ((e.base_experience/20) + 20));
        });
        setTotal(sum);
    }, [cartInfo])

    

    return (
        <>
            <header><Title /></header>

            <nav><NavBar /></nav>

            <main>

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
                        <tr key={item.name} className='cartContentRow'>
                                <td className='cartContentProduct'>
                                    <img src={item.sprites.front_default} alt='pokemon sprite'></img>
                                    <div>
                                        <div style={{fontWeight: 'bold'}}>{item.name}</div>
                                        <div>EXP&nbsp;{item.base_experience}</div>
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
                                    <button className='deleteItem' onClick={handleDel} key={item.name}>X</button>
                                </td>
                        </tr>

                        return result;
                    })}
                    </tbody>

                    <tfoot>
                        <tr>
                            <td>
                                <div className='listContent' id='cartListHeader'>
                                    <div className='cartContentTotal'>
                                        <p>Total: {total.toFixed(2)}</p>
                                    </div>
                                </div>
                            </td>
                            
                        </tr>
                    </tfoot>
                </table>
                

            </main>
        
        </>
    );
};

export default MyCart;
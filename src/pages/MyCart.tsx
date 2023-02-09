import React from 'react';
import { useState, useEffect } from 'react';
import Title from '../components/Title';
import NavBar from '../components/NavBar';
import Cart from '../components/Cart';

import { useSelector, useDispatch } from 'react-redux';
import { increment, reset } from '../features/cartSlice';


const MyCart = () => {

    const cartInfo = useSelector((state: any) => state.counter);
    const [cartDisplay, setCartDisplay]: any = useState({
        filteredInfo: [],
        quantity: []
    })

    
    

    useEffect(() => {
        let count: any = {};

        //filteredInfo
        const ids = cartInfo.map((o: any) => o.id);
        const filtered = cartInfo.filter(({id}: any, index: any) => !ids.includes(id, index + 1));
        console.log(filtered);

        //quantity
        cartInfo.forEach((x: any) => { 
            count[x.name] = (count[x.name] || 0) + 1;
        });
        console.log(count);


        setCartDisplay({
            filteredInfo: [...filtered],
            quantity: count
        });
        console.log(cartDisplay);
    }, [])

    const handleTest = () => {
        console.log(cartDisplay);
    }

    

    return (
        <>
            <header><Title /></header>

            <nav><NavBar /></nav>

            <main>
                <button onClick={handleTest}>Click here</button>

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

                {cartDisplay.filteredInfo.map((item: any) => {
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
                                <p>${((item.base_experience / 20)+ 20).toFixed(2)}</p>
                            </div>

                            <div className='cartContentQty'>
                                <p>{cartDisplay.quantity[item.name]}</p>
                            </div>

                            <div className='cartContentFullPrice'>
                                <p>${((cartDisplay.quantity[item.name]) * ((item.base_experience / 20)+ 20)).toFixed(2)}</p>
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
import React from 'react';
import Title from '../components/Title';
import NavBar from '../components/NavBar';
import Cart from '../components/Cart';

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchedItem } from '../features/itemSlice';
import { assignArr } from '../features/cartSlice';

const Item = () => {

    const dispatch = useDispatch();
    const searchedOne =  useSelector((state: any) => state.item[0]);

    const [qty, setQty]: any = useState(1);
    let searchedItem: any = [{...searchedOne}];

    const handleAddToCart = () => {
        if (searchedItem.quantity != undefined) {
          dispatch(assignArr(searchedItem[0]));
        } else {
          (Object.assign(searchedItem[0], {quantity: qty}));
          dispatch(assignArr(searchedItem[0]));
        }
      }

      const handleAdd = () => {
        setQty(qty + 1);
        searchedItem.quantity = qty;
      }

      const handleSub = () => {
        setQty(qty - 1);
        searchedItem.quantity = qty;
      }

    return (
        <>
            <header><Title /></header>

            <nav><NavBar /></nav>
            
            <div className='itemWrapper'>

                <section className='firstSection'>
                    <div className='itemImage'>
                        <img src={searchedOne.sprites.other['official-artwork'].front_default}></img>
                    </div>

                    <div className='itemBuy'>
                        <div>
                            <div className='itemBuyText'>
                                <p className='itemBuyName'>{searchedOne.name}</p>
                                <p className='itemBuyPrice'>${((searchedOne.base_experience / 20) + 20).toFixed(2)}</p>
                            </div>

                            <div className='itemQtyWrap'>
                                Quantity:&nbsp;
                                <div className='itemQty'>
                                    <button disabled={qty === 1} className='itemQtyBtn' onClick={handleSub}>-</button>
                                    <span>{qty}</span>
                                    <button className='itemQtyBtn' onClick={handleAdd}>+</button>
                                </div>
                            </div>
                            

                            <div className='itemBuyButtons'>
                                <button onClick={handleAddToCart}>Add to cart</button>
                                <button>Buy now</button>
                            </div>
                        </div>
                        
                    </div>
                </section>

                <div className='itemDescription'>
                    
                    <p className='itemDescName'>{searchedOne.name}</p>

                    <div className='itemDescType' >
                        <p>type:&nbsp;</p>
                        <p id={searchedOne.types[0].type.name}>{searchedOne.types[0].type.name}</p>
                        <p id={((searchedOne.types.length) >= 2 ? (searchedOne.types[1].type.name) : null)}>{((searchedOne.types.length) >= 2 ? (searchedOne.types[1].type.name) : null)}</p>
                    </div>

                    <div className='itemDescAbilities'>
                        <p>abilities:&nbsp;</p>
                        <p className=''>{searchedOne.abilities[0].ability.name}</p>
                        <p className=''>{((searchedOne.abilities.length) >= 2 ? (searchedOne.abilities[1].ability.name) : null)}</p>
                        <p className=''>{((searchedOne.abilities.length) >= 3 ? (searchedOne.abilities[2].ability.name) : null)}</p>
                    </div>

                    <div className='itemDescStats'>
                        <p>stats:&nbsp;</p>
                        <table className='itemDescStatsTable'>

                            <thead>
                                <tr className='itemDescStatsHead'>
                                    <th>{searchedOne.stats[0].stat.name}</th>
                                    <th>{searchedOne.stats[1].stat.name}</th>
                                    <th>{searchedOne.stats[2].stat.name}</th>
                                    <th>{searchedOne.stats[3].stat.name}</th>
                                    <th>{searchedOne.stats[4].stat.name}</th>
                                    <th>{searchedOne.stats[5].stat.name}</th>
                                </tr>
                            </thead>
                            
                            <tbody>
                                <tr className='itemDescStatsBody'>
                                    <td>{searchedOne.stats[0].base_stat}</td>
                                    <td>{searchedOne.stats[1].base_stat}</td>
                                    <td>{searchedOne.stats[2].base_stat}</td>
                                    <td>{searchedOne.stats[3].base_stat}</td>
                                    <td>{searchedOne.stats[4].base_stat}</td>
                                    <td>{searchedOne.stats[5].base_stat}</td>
                                </tr>
                            </tbody>
                            
                        </table>
                        
                    </div>
                </div>

            </div>
        
        </>
    );
};

export default Item;
import React from 'react';
import Title from '../components/Title';
import NavBar from '../components/NavBar';
import Cart from '../components/Cart';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Router from 'next/router';
import { searchedItem } from '../features/itemSlice';
import { assignArr } from '../features/cartSlice';

const Item = () => {

    const dispatch = useDispatch();
    const searchedOne =  useSelector((state: any) => state.item[0]);

    const [image, setImage]: any = useState(searchedOne.sprites.other['official-artwork'].front_default)

    const [qty, setQty]: any = useState(1);
    let searched: any = [{...searchedOne}];

    const handleImageLeft = () => {
        console.log('left-btn')
    }

    const handleImageRight = () => {
        console.log('right btn')
    }

    const handleAddToCart = () => {
        if (searched[0].quantity != undefined) {
          dispatch(assignArr(searched[0]));
        } else {
          (Object.assign(searched[0], {quantity: qty}));
          dispatch(assignArr(searched[0]));
        }
      }

      const handleBuyNow = () => {
        if (searched[0].quantity != undefined) {
            dispatch(assignArr(searched[0]));
          } else {
            (Object.assign(searched[0], {quantity: qty}));
            dispatch(assignArr(searched[0]));
          };
          Router.push('/MyCart');
      }

      const handleAdd = () => {
        setQty(qty + 1);
      }

      const handleSub = () => {
        setQty(qty - 1);
      }

    return (
        <>
            <header><Title /></header>

            <nav><NavBar /></nav>
            
            <div className='itemWrapper'>
            
                <section className='firstSection'>
                    <div className='itemImage'>
                        <button className='itemImgBtn' onClick={handleImageLeft}>
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>
                        <img src={image}></img>
                        <button className='itemImgBtn' onClick={handleImageRight}>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </div>

                    <div className='itemBuy'>
                        <div className='itemBuyWrap'>
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
                                <button onClick={handleBuyNow}>Buy now</button>
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
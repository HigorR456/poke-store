import React from 'react';
import Title from '../components/Title'
import NavBar from '../components/NavBar'

import { useSelector, useDispatch } from 'react-redux';
import { searchedItem } from '../features/itemSlice';

const Item = () => {

    const searchedOne =  useSelector((state: any) => state.item[0]);

    console.log(searchedOne);

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
                                    <button className='itemQtyBtn' >-</button>
                                    <span>1</span>
                                    <button className='itemQtyBtn' >+</button>
                                </div>
                            </div>
                            

                            <div className='itemBuyButtons'>
                                <button>Add to cart</button>
                                <button>Buy now</button>
                            </div>
                        </div>
                        
                    </div>
                </section>

                <div className='itemDescription'>
                    
                    <p>{searchedOne.name}</p>

                    <div className='' >
                        <p>type:&nbsp;</p>
                        <p className={searchedOne.types[0].type.name}>{searchedOne.types[0].type.name}</p>
                        <p className={((searchedOne.types.length) >= 2 ? (searchedOne.types[1].type.name) : null)}>{((searchedOne.types.length) >= 2 ? (searchedOne.types[1].type.name) : null)}</p>
                    </div>

                    <div className=''>
                        <p>abilities:&nbsp;</p>
                        <p className=''>{searchedOne.abilities[0].ability.name}</p>
                        <p className=''>{((searchedOne.abilities.length) >= 2 ? (searchedOne.abilities[1].ability.name) : null)}</p>
                        <p className=''>{((searchedOne.abilities.length) >= 3 ? (searchedOne.abilities[2].ability.name) : null)}</p>
                    </div>

                    <div className=''>
                        <p>stats:&nbsp;</p>
                        <p className=''>{searchedOne.stats[0].stat.name}: {searchedOne.stats[0].base_stat}</p>
                        <p className=''>{searchedOne.stats[1].stat.name}: {searchedOne.stats[1].base_stat}</p>
                        <p className=''>{searchedOne.stats[2].stat.name}: {searchedOne.stats[2].base_stat}</p>
                        <p className=''>{searchedOne.stats[3].stat.name}: {searchedOne.stats[3].base_stat}</p>
                        <p className=''>{searchedOne.stats[4].stat.name}: {searchedOne.stats[4].base_stat}</p>
                        <p className=''>{searchedOne.stats[5].stat.name}: {searchedOne.stats[5].base_stat}</p>
                    </div>
                </div>

            </div>
        
        </>
    );
};

export default Item;
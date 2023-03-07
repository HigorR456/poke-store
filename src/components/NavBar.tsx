import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Cart from '../components/Cart';

import { useDispatch } from 'react-redux';
import { searchedItem } from '../features/itemSlice';

const NavBar = () => {

    const dispatch = useDispatch();

    const [searchInput, setSearchInput]: any = useState(null);
    const [searchResult, setSearchResult]: any = useState(null);

    useEffect(() => {
        const getData = setTimeout(() => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${searchInput}`)
            .then((res) => res.json())
            .then((data) => {
                console.log({data})
                setSearchResult(data)
            })
            .catch((error) => {
                console.log({error})
                setSearchResult(null)
            })
        }, 600)

        return () => clearTimeout(getData)
    }, [searchInput])

    const handleDispatch = () => {
        dispatch(searchedItem(searchResult));
        setSearchResult(null);
        setSearchInput(null);
    }

    return (
        <>
            <div className='navWrapper'>

                <div className='buttonWrapper'>
                    <Link href='/' className='navLink' ><button>Home</button></Link>
                    <Link href='/Navigation' className='navLink' ><button>Pokemon List</button></Link>
                    <Link href='/About' className='navLink' ><button>About</button></Link>
                    <Link href='/Contact' className='navLink' ><button>Contact</button></Link>
                    <Cart />
                </div>

                <div className='searchBar'>
                    <input className='inputBar' type='text' placeholder='Search pokemon' spellCheck='false' value={searchInput === null ? '' : searchInput} onChange={(e) => e.target.value.length !== 0 ? setSearchInput(e.target.value) : setSearchInput(null)} />
                </div>

                {searchResult === null ? 
                    <></> : 
                
                    <Link href='/Item' onClick={handleDispatch}>
                        <div className='searchResult'>
                            <div className='searchBox'>
                                <img src={searchResult.sprites.front_default} alt='pokemon sprite'></img>
                                <p>{searchResult.name}</p>
                            </div>
                        </div>
                    </Link>
                }

            </div>
                    

                
            
        </>
    );
};

export default NavBar;
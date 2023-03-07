import { useState, useEffect } from 'react';
import Link from "next/link";

import { useDispatch } from 'react-redux';

import { searchedItem } from '../features/itemSlice'

const PokemonBox = ({ obj }: any) => {
    
    obj = obj.name;
  
    const [info, setInfo]: any = useState(null);

  
    useEffect(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${obj}`)
      .then((res) => res.json())
      .then((data) => {
        Object.assign({data, quantity: 1});
        setInfo(data);
      })}, []);
  
      const dispatch = useDispatch();

      const handleItemDetails = () => {
        dispatch(searchedItem(info))
      }
  
  
    if (info === null) {
      return <div className='divWrapper'>-</div>
    } 
      return (
        //pokemon Box
        <>
          <Link href='/Item'>
              <div className='pokeBoxWrapper' onClick={handleItemDetails}>
              <div className='pokeBoxColor' id={info.types[0].type.name}></div>
              <img src={info.sprites.other['official-artwork'].front_default} alt='pokemon sprite'></img>
              <p className='pokeBoxName'>{info.name}</p>
              <p className='pokeBoxPrice'>${((info.base_experience / 20) + 20).toFixed(2)}</p>
                
            </div>
          </Link>
        </>
        )
      
  }

export default PokemonBox;
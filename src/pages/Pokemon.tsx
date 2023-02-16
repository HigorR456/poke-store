import { useState, useEffect } from 'react';
import Link from "next/link";

import { useSelector, useDispatch } from 'react-redux';
import { assignArr, increment, decrement, reset } from '../features/cartSlice';

const Pokemon = ({ obj }: any) => {
    
    obj = obj.name;
  
    const [info, setInfo]: any = useState(null);
    const [details, setDetails]: any = useState(null);
    const [spriteView, setSpriteView]: any = useState('front_default');
    const [seeArtwork, setSeeArtwork]: any = useState(null);
    const [infoWrapper, setInfoWrapper]: any = useState({opacity: '0.2'});
    const [goBackToInfo, setGoBackToInfo]: any = useState(true);

  
    useEffect(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${obj}`)
      .then((res) => res.json())
      .then((data) => {
        Object.assign({data, quantity: 1});
        setInfo(data);
      })}, []);
  
      const handlePokeName = (e: any) => {
        console.log(e.target.textContent)
        setDetails(e.target.textContent)
      }
  
      const handleReturn = () => {
        setDetails(null);
      }
  
      const handleView = () => {
        if (spriteView === 'back_default') {
          setSpriteView('front_default')
        } else {
        setSpriteView('back_default')
        }
      }
  
      const handleArtwork = () => {
          setSeeArtwork({display: 'none'})
          setInfoWrapper({opacity: '1'})
          setGoBackToInfo(false)
      }
  
      const handleGoBackToInfo = () => {
          setSeeArtwork(null)
          setInfoWrapper({opacity: '0.2'})
          setGoBackToInfo(true)
      }
      
      const dispatch = useDispatch();

      const handleAddToCart = () => {
        if (info.quantity != undefined) {
          dispatch(assignArr(info));
        } else {
          (Object.assign(info, {quantity: 1}));
          dispatch(assignArr(info));
        }

        console.log({info})
      }
  
  
    if (info === null) {
      return <div className='divWrapper'>-</div>
    } else if (details !== null) {
      return (
        //details
        <div className='detailsWrapper'>
          
          <img className='artwork' style={infoWrapper} src={info.sprites.other['official-artwork'].front_default}></img>
          <button className='backToInfoBtn' hidden={goBackToInfo} onClick={handleGoBackToInfo}>Return</button>
  
          <div className='infoWrapper' style={seeArtwork}>
  
            <button className='returnButton' onClick={handleReturn}>Return</button>
  
            <div><p>name: {details}</p></div>
            <div><p>exp: {info.base_experience}</p></div>
            <div><p>height: {info.height/10}m</p></div>
            <div><p>weight: {info.weight/10}kg</p></div>
  
            <div className='typeList' >
              <p>type:&nbsp;</p>
              <p className={info.types[0].type.name}>{info.types[0].type.name}</p>
              <p className={((info.types.length) >= 2 ? (info.types[1].type.name) : null)}>{((info.types.length) >= 2 ? (info.types[1].type.name) : null)}</p>
            </div>
  
            <div className='typeList'>
              <p>abilities:&nbsp;</p>
              <p className='types'>{info.abilities[0].ability.name}</p>
              <p className='types'>{((info.abilities.length) >= 2 ? (info.abilities[1].ability.name) : null)}</p>
              <p className='types'>{((info.abilities.length) >= 3 ? (info.abilities[2].ability.name) : null)}</p>
            </div>

            <div className='typeList'>
              <p>stats:&nbsp;</p>
              <p className='types'>{info.stats[0].stat.name}: {info.stats[0].base_stat}</p>
              <p className='types'>{info.stats[1].stat.name}: {info.stats[1].base_stat}</p>
              <p className='types'>{info.stats[2].stat.name}: {info.stats[2].base_stat}</p>
              <p className='types'>{info.stats[3].stat.name}: {info.stats[3].base_stat}</p>
              <p className='types'>{info.stats[4].stat.name}: {info.stats[4].base_stat}</p>
              <p className='types'>{info.stats[5].stat.name}: {info.stats[5].base_stat}</p>
            </div>
  
            <img className='sprite' src={info.sprites[spriteView]}></img>
            
            <button className='viewBtn' onClick={handleView}>Change view</button>
            <button className='artBtn' onClick={handleArtwork} >See artwork</button>
            
            <button className='addToCart' onClick={handleAddToCart} >Add to cart</button>
            <p className='detailsPrice'>${((info.base_experience / 20) + 20).toFixed(2)}</p>
  
          </div>

        </div>
      )
    } else {
      return (
        //list
          <div className='listWrapper'>
            <div className='divWrapper'>
              <p className='index'>{info.id}</p>
              <span><img className='image' src={info.sprites.front_default}></img></span>
              <p className='name' onClick={handlePokeName} >{info.name}</p>
              <p className='experience'>{info.base_experience}&nbsp;</p>
              <span className='type'>
                <p className={info.types[0].type.name}>{info.types[0].type.name}</p>
                <p className={((info.types.length) >= 2 ? (info.types[1].type.name) : null)}>{((info.types.length) >= 2 ? (info.types[1].type.name) : null)}</p>
                <p className={((info.types.length) >= 3 ? (info.types[2].type.name) : null)}>{((info.types.length) >= 3 ? (info.types[2].type.name) : null)}</p>
              </span>
              <p className='price'>${((info.base_experience / 20) + 20).toFixed(2)}</p>
              
            </div>
            
          </div>
        )
      }
  }

export default Pokemon;
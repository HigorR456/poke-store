import React from 'react';
import { useState, useEffect } from 'react';

const SlideHome = ({ slideProp }: any) => {
    slideProp = slideProp;

    const [slideInfo, setSlideInfo]: any = useState([]);

    useEffect(() => {

        //random pokemon of specified type generator
        let randomPokeSlide: number = (Math.floor(Math.random() * (slideProp.pokemon.length)) + 1);

        console.log(slideProp.pokemon.length)
        
        //fetch info about random pokemon of specified type
        fetch(`https://pokeapi.co/api/v2/pokemon/${slideProp.pokemon[randomPokeSlide].pokemon.name}`)
        .then((res) => res.json())
        .then((data) => {
          setSlideInfo(data);
        })
        .catch((error) => console.log('slide Info', error));
      }, []);

    
    if (slideInfo.length === 0) {
        return (
            <>
                <div className='slideBox'>
                    <p>Loading...</p>
                </div>
            </>
        )
    } else {
        return (
        <>
            <div className='slideBox' id={slideProp.name}>
                <img src={slideInfo.sprites.other["official-artwork"].front_default} alt='pokemon artwork'></img>
                <div className='slideBoxText'>
                    <p>Pokemon Type:</p>
                    <p className='slideBoxPokeType'>{slideProp.name}</p>
                </div>
            </div>
        </>
    );
    }
};

export default SlideHome;
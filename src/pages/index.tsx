import Head from 'next/head';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Title from '../components/Title';
import NavBar from '../components/NavBar';
import SlideHome from '../components/SlideHome';


export default function Home() {

  const [boxSprite, setBoxSprite]: any = useState(null);
  const [slide, setSlide]: any = useState([]);
  
  useEffect(() => {

    let random: number = (Math.floor(Math.random() * 151) + 1);
    let slideStorage: Array<object> = [];
    let randomSlide: Array<number> = [];

    //random pokemon type generator
    while (randomSlide.length < 3) {
      let randomNumber: number = (Math.floor(Math.random() * 18) + 1);
    
      if (randomSlide.length === 0) {
        randomSlide.push(randomNumber);
      } else {
        let i = 0;
        randomSlide.map((e: number) => { if (e === randomNumber) {i++} });
        i === 0 ? randomSlide.push(randomNumber) : console.log('a random number already exists, generating another one');
      }
    };


    //see all pokemon
    fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)
    .then((res) => res.json())
    .then((data) => {
      setBoxSprite(data);
    })
    .catch((error) => console.log('random', error));


    //slides
    fetch(`https://pokeapi.co/api/v2/type/${randomSlide[0]}`)
    .then((res) => res.json())
    .then((data) => {
      slideStorage.push(data);
    })
    .catch((error) => console.log('randomSlide0', error));

    fetch(`https://pokeapi.co/api/v2/type/${randomSlide[1]}`)
    .then((res) => res.json())
    .then((data) => {
      slideStorage.push(data);
    })
    .catch((error) => console.log('randomSlide1', error));

    fetch(`https://pokeapi.co/api/v2/type/${randomSlide[2]}`)
    .then((res) => res.json())
    .then((data) => {
      slideStorage.push(data);
      setSlide(slideStorage);
    })
    .catch((error) => console.log('randomSlide2', error));
  }, []);

  //placeholder
  if (boxSprite === null || slide.length === 0) {
    return (
    <>
    <Head>
          <title>Pokemon Store</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <header>
          <Title />
        </header>

        <nav>
          <NavBar />
        </nav>

        <main className='homeMain'>

          <div className='slideBoxWrap'>Loading</div>

          <div className='boxWrapper'>

            <Link href='/Navigation' className='boxLink'><div className='box' id='boxOne'>
              <p>See All Pokemon</p>
              <p>Loading image</p>
            </div></Link>
            <div className='box'>-</div>
            <div className='box'>-</div>
            <div className='box'>-</div>
            <div className='box'>-</div>
            <div className='box'>-</div>
            <div className='box'>-</div>
            <div className='box'>-</div>

          </div>

        </main>
    </>
    )
  } else {
    //right return
    return (
      <>
        <Head>
          <title>Pokemon Store</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <header>
          <Title />
        </header>

        <nav>
          <NavBar />
        </nav>

        <main className='homeMain'>

        <div className='slideBoxWrap'>
          {slide.map((item: any) => {
            const result = <SlideHome key={'slide' + item.name} slideProp={item} />;
            return result;
          })}
        </div>

          <div className='boxWrapper'>

            <Link href='/AllPokemon' className='boxLink'><div className='box' id='boxOne'>
              <p>See All Pokemon</p>
              <img src={boxSprite.sprites.other['official-artwork'].front_default} alt='pokemon artwork'></img>
            </div></Link>

            <div className='box'>-</div>
            <div className='box'>-</div>
            <div className='box'>-</div>
            <div className='box'>-</div>
            <div className='box'>-</div>
            <div className='box'>-</div>
            <div className='box'>-</div>

          </div>

        </main>
      </>
    )
  }
}

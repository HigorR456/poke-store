import React from 'react';
import Link from 'next/link';

const Title = () => {
    return (
        <>
            <div className='title'>
                <Link href='/' style={{textDecoration: 'none', color: 'white'}} >
                    <h1>Poke <div className='pokeball'><div className='pokeballLine'></div></div> Store</h1>
                </Link>
            </div>
        </>
    );
};

export default Title;
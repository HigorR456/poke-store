import React from 'react';
import Link from 'next/link'

const NavBar = () => {
    return (
        <>
            <div className='navWrapper'>

                <Link href='/' className='navLink' ><button>Home</button></Link>
                <Link href='/Navigation' className='navLink' ><button>Pokemon List</button></Link>
                <Link href='/' className='navLink' ><button>About</button></Link>
                <Link href='/' className='navLink' ><button>Contact</button></Link>

                <span className='searchBar'>
                    <input type='text' placeholder='Search pokemon' />
                </span>
            </div>
        </>
    );
};

export default NavBar;
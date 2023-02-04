import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Title from '../components/Title'
import NavBar from '../components/NavBar'


export default function Home() {
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

      <main className={styles.main}>
        
        <p>This is the main</p>
      
      </main>
    </>
  )
}

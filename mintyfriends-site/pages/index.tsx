
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MintyFriends</title>
        <meta name="description" content="Mint your NFT friends" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to MintyFriends</h1>
        <p className={styles.description}>Mint your own NFT friend today!</p>
        <button className={styles.mintButton}>Mint Now</button>
      </main>
    </div>
  )
}

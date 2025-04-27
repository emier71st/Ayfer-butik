import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ayfer Butik</title>
        <meta name="description" content="Ayfer Butik - Hoşgeldiniz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hoşgeldiniz! Ayfer Butik'e Göz Atın
        </h1>
        <p className={styles.description}>
          Ayfer Butik, şıklığı ve zarafeti bir araya getiriyor. En güzel tasarımlar ve en kaliteli ürünlerle karşınızdayız. Şimdi keşfedin!
        </p>
      </main>
    </div>
  )
}
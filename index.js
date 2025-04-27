
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

        <div className={styles.grid}>
          {/* Example Product Section */}
          <div className={styles.card}>
            <h2>Elbise &rarr;</h2>
            <p>Şık ve rahat elbiseler</p>
          </div>
          <div className={styles.card}>
            <h2>Crop &rarr;</h2>
            <p>Farklı renk ve tasarımlar</p>
          </div>
          <div className={styles.card}>
            <h2>Tayt &rarr;</h2>
            <p>Konforlu ve şık taytlar</p>
          </div>
          <div className={styles.card}>
            <h2>T-Shirt &rarr;</h2>
            <p>Modern ve rahat t-shirtler</p>
          </div>
          <div className={styles.card}>
            <h2>Sweatshirt &rarr;</h2>
            <p>Soğuk günler için ideal</p>
          </div>
          <div className={styles.card}>
            <h2>Bebek Takımları &rarr;</h2>
            <p>Şirin ve rahat bebek kıyafetleri</p>
          </div>
        </div>
      </main>
    </div>
  )
}

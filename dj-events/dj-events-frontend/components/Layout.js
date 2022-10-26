import Head from 'next/head'
import Header from './Header'
import styles from '@/styles/Layout.module.css'
import Footer from './Footer'

export default function Layout({title,keywords,description,children}) {
  return (
    <div>
        <Head>
            <title>{title}</title>
            <meta name='desctiption' content={description} />
            <meta name='keywords' content={keywords} />
        </Head>
        <Header />
        <div className={styles.Container}>
            {children}
        </div>
        <Footer />
    </div>
  )
}

Layout.defaultProps = {
    title: 'DJ Events | Find the hottest parties',
    description: 'Find the latest DJ and other musical events',
    keywords: 'music, dj, edm, events',
}
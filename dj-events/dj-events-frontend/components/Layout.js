import Head from 'next/head'
import styles from '../styles/Layout.module.css'

export default function Layout({title,keywords,description,children}) {
  return (
    <div>
        <Head>
            <title>{title}</title>
            <meta name='desctiption' content={description} />
            <meta name='keywords' content={keywords} />
        </Head>
        <div className={styles.Container}>
            {children}
        </div>
    </div>
  )
}

Layout.defaultProps = {
    title: 'DJ Events | Find the hottest parties',
    description: 'Find the latest DJ and other musical events',
    keywords: 'music, dj, edm, events',
}
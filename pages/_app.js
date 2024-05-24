import Layout from '../components/Layout';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <><Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap"
        rel="stylesheet" />
    </Head><Layout>
        <Component {...pageProps} />
      </Layout></>
  );
}

export default MyApp;

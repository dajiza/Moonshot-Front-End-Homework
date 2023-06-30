import Head from 'next/head';
import Carousel from '../components/carousel';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Trending Now</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Carousel></Carousel>
        </div>
    );
}

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import nextImg from '../public/images/next.png';
import vercelImg from '../public/images/vercel.svg';
import {Layout} from '../components/Layout/Layout';
import s from './index.module.scss';

const MainPage = () => {
    return (
        <Layout>
            <div className={s.wrapper}>
                <Image
                    width={100}
                    height={100}
                    src={vercelImg}git a
                    alt="image"
                />
                <Image
                    width={400}
                    height={200}
                    src={nextImg}
                    alt="image"
                    style={{objectFit: "cover"}}
                />
                <Link href="/">Main page</Link>
                <Link href="/first-page">First page</Link>
                <Link href="/second-page">Second page</Link>
            </div>
        </Layout>
    );
};

export default MainPage;

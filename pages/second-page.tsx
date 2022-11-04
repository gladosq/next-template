import React, {FC} from 'react';
import {Layout} from '../components/Layout/Layout';
import Link from 'next/link';
import s from './index.module.scss';

interface SecondPageProps {

}

const SecondPage: FC<SecondPageProps> = () => {
    return (
        <Layout>
            <div className={s.wrapper}>
                <h2>Second page</h2>
                <Link className={s.link} href="/">back</Link>
            </div>
        </Layout>
    );
};

export default SecondPage;

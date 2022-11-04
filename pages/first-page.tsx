import React, {FC} from 'react';
import {Layout} from '../components/Layout/Layout';
import Link from 'next/link';
import s from './index.module.scss';

interface FirstPageProps {

}

const FirstPage: FC<FirstPageProps> = () => {
    return (
        <Layout>
            <div className={s.wrapper}>
                <h2>First page</h2>
                <Link className={s.link} href="/">back</Link>
            </div>
        </Layout>
    );
};

export default FirstPage;

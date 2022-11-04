import React, {FC, ReactNode} from 'react';
import s from './Layout.module.scss';

interface LayoutProps {
    children: ReactNode;
}

export const Layout:FC<LayoutProps> = ({children}) => {
    return (
        <div className={s.layout}>
            {children}
        </div>
    );
};

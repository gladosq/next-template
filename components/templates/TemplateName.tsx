import React, { FC } from 'react';
import s from './TemplateName.module.scss';

interface TemplateNameProps {

}

const TemplateName:FC<TemplateNameProps> = (props) => {
    return (
        <div className={s.templateName}>

        </div>
    );
};

export default TemplateName;

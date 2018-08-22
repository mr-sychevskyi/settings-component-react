import React from 'react';

const Icon = ({title, className}) => (
    <svg className={`icon btn__icon ${className ? className : ''}`}>
        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref={`#svg-icon-${title}`}/>
    </svg>
);

export default Icon;

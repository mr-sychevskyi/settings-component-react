import React from 'react';

const Button = props => {
    const {text, className, children, action} = props;

    return (
        <button className={`btn ${className}`} onClick={action}>
            {children}
            {text && <span className="btn__text">{text}</span>}
        </button>
    );
};

export default Button;

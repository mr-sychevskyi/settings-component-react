import React from 'react';
import './styles.scss';

const Tab = props => {
    const {label, onClick, tabIndex, isActive} = props;

    return (
        <li className={`tab ${isActive ? 'tab_active' : ''}`} onClick={() => onClick(tabIndex)}>
            <a className="tab__link">
                {label}
            </a>
        </li>
    );
};

export default Tab;

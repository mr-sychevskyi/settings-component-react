import React from 'react';
import './styles.scss';

const CheckBox = props => {
    const {isChecked, handleChange} = props;

    return (
        <label className="checkbox">
            <input className="checkbox__input" type="checkbox" checked={isChecked} onChange={handleChange}/>
            <span className="checkbox__toggler"/>
        </label>
    );
};

export default CheckBox;

import React, {Component} from 'react';
import './styles.scss';

import Icon from '../icon';

class ColorInput extends Component {
    state = {color: ''};

    handleChange = event => {
        this.setState({color: event.target.value});
    };

    render() {
        const {color} = this.state;

        return (
            <label className="color-picker">
                <input className="color-picker__input" type="color" value={color} onChange={this.handleChange}/>
                <Icon title="color-picker" className="btn__icon color-picker__icon"/>
            </label>
        );
    }
}

export default ColorInput;

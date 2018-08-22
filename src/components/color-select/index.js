import React, {Component} from 'react';
import './styles.scss';

import {COLORS_LIST} from './constants';
import ColorInput from '../color-input';

class ColorSelect extends Component {
    state = {
        isSelected: ''
    };

    selectColor = e => {
        const currColor = e.target.dataset.color;

        this.setState({isSelected: currColor === this.state.isSelected ? '' : currColor});
    };

    renderColorVariants = () => {
        const {label} = this.props;
        const {isSelected} = this.state;

        return COLORS_LIST[label].map((item, index) => {
            const {bgColor, borderColor} = item;

            return (
                <li key={index} className="colors-list__item" onClick={this.selectColor}>
                    <span className={`colors-list__pattern ${isSelected === bgColor && 'is-selected'}`}
                        style={{background: bgColor, borderColor}} data-color={`${bgColor}`}
                    />
                </li>
            );
        });
    };

    render() {
        const {title} = this.props;

        return (
            <div className="colors-select">
                <h4 className="title-tertiary">{title}</h4>
                <ul className="colors-select__list colors-list">
                    {this.renderColorVariants()}

                    <li className="colors-list__item">
                        <span className="colors-list__pattern">
                            <ColorInput/>
                        </span>
                    </li>
                </ul>
            </div>
        );
    }
}

export default ColorSelect;

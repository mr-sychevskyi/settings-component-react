import React, {Component} from 'react';
import './styles.scss';

import {FILTERS_LIST} from './constants';

class Filters extends Component {
    state = {isSelected: ''};

    selectFilter = e => {
        const currFilter = e.target.title;

        this.setState({isSelected: currFilter === this.state.isSelected ? '' : currFilter});
    };

    renderFilterVariants = () => {
        const {isSelected} = this.state;

        return FILTERS_LIST.map((item, index) => {
            const {name, image} = item;

            return (
                <li key={index} className="filters-list__item" onClick={this.selectFilter}>
                    <figure className={`filter ${isSelected === name && 'filter_selected'}`}>
                        <img className="filter__img img-responsive" src={image} title={name} alt={name}/>
                        <figcaption className="filter__caption">{name}</figcaption>
                    </figure>
                </li>
            );
        });
    };

    render() {
        const {className} = this.props;

        return (
            <ul className={`filters-list ${className ? className : ''}`}>
                {this.renderFilterVariants()}
            </ul>
        );
    }
}

export default Filters;

import React, {Component} from 'react';
import './styles.scss';

import CheckBox from '../checkbox';

class Accordion extends Component {
    state = {isExpanded: true};

    handleChange = () => {
        this.setState({
            isExpanded: !this.state.isExpanded
        });
    };

    render() {
        const {children, title, className} = this.props;
        const {isExpanded} = this.state;

        return (
            <section className={`${className ? className : ''} accordion`}>
                <div className="accordion__summary">
                    <CheckBox isChecked={isExpanded} handleChange={this.handleChange}/>
                    <h3 className="accordion__title title-secondary">{title}</h3>
                </div>
                <div className={`accordion__details ${isExpanded ? 'accordion__details_expanded' : ''}`}>
                    {children}
                </div>
            </section>
        );
    }
}

export default Accordion;

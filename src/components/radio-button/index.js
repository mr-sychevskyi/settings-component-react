import React, {Component} from 'react';
import './styles.scss';

class RadioButton extends Component {
    state = {selectedOption: 'parallax'};

    handleOptionChange = e => {
        this.setState({
            selectedOption: e.target.value
        });
    };

    render() {
        const {selectedOption} = this.state;

        return (
            <div className="radio-button-group">
                <label className="radio-button">
                    <input className="radio-button__input" type="radio" value="fixed"
                        checked={selectedOption === 'fixed'}
                        onChange={this.handleOptionChange}
                    />
                    <span className="radio-button__checkmark"/>
                    <span className="radio-button__option">Fixed</span>
                </label>
                <label className="radio-button">
                    <input className="radio-button__input" type="radio" value="parallax"
                        checked={selectedOption === 'parallax'}
                        onChange={this.handleOptionChange}
                    />
                    <span className="radio-button__checkmark"/>
                    <span className="radio-button__option">Parallax</span>
                </label>
            </div>
        );
    }
}

export default RadioButton;

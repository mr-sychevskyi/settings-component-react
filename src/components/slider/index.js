import React, {Component} from 'react';
import './styles.scss';

class Slider extends Component {
    state = {value: 50};

    componentDidMount() {
        const slider = document.querySelector('input.slider-range');

        this.handleProgress(slider);
    }

    handleProgress = slider => {
        const progress = Math.round(((slider.value - slider.min) / (slider.max - slider.min)) * 100);

        slider.style.background = `-webkit-linear-gradient(left, #165bfb ${progress}%, #f2f4f7 ${progress}%)`;
    };

    handleChange = e => {
        const slider = e.target;

        this.handleProgress(slider);

        this.setState({
            value: slider.value
        });
    };

    render() {
        const {value} = this.state;
        const {className} = this.props;

        return (
            <div className={`slider ${className ? className : ''}`}>
                <h4 className="slider__title title-tertiary">Filter strength</h4>
                <input className="slider__range slider-range" type="range" min={0} max={100} value={value}
                    onChange={this.handleChange}
                />
                <span className="slider-value">{`${value}%`}</span>
            </div>
        );
    }
}

export default Slider;

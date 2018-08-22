import React, {Component} from 'react';
import './styles.scss';

import Tab from './tab';

class Tabs extends Component {
    state = {
        activeTabIndex: this.props.activeTab
    };

    onClickTabItem = tab => {
        this.setState({
            activeTabIndex: tab
        });
    };

    renderTabs = () => {
        const {children} = this.props;
        const {activeTabIndex} = this.state;

        return (
            children.map((child, index) => (
                <Tab
                    key={index}
                    label={child.props.label}
                    onClick={this.onClickTabItem}
                    tabIndex={index}
                    isActive={index === activeTabIndex}
                />
            ))
        );
    };

    renderActiveTabContent = () => {
        const {children} = this.props;
        const {activeTabIndex} = this.state;

        return children[activeTabIndex] ? children[activeTabIndex].props.children : 'No active content';
    };

    render() {
        const {className} = this.props;

        return (
            <div className={`tabs ${className}`}>
                <ul className="tabs__navbar">
                    {this.renderTabs()}
                </ul>
                <div className="tabs__content">
                    {this.renderActiveTabContent()}
                </div>
            </div>
        );
    }
}

export default Tabs;

import React from 'react';
import './styles.scss';

import Tabs from '../tabs';
import Icon from '../icon/';
import Tab from '../tabs/tab';
import Button from '../button';
import Slider from '../slider';
import Filters from '../filters';
import Accordion from '../accordion';
import RadioButton from '../radio-button';
import ColorSelect from '../color-select';
import SvgLibrary from '../icon/SvgLibrary';

const Modal = () => (
    <div className="modal">
        <header className="modal-header">
            <h2 className="title-primary">Block settings</h2>
            <Button className="btn-close" action={() => console.log('modal close')}>
                <Icon title="close"/>
            </Button>
        </header>

        <main className="modal-content">
            <Tabs className="tabs-outer" activeTab={1}>
                <Tab label="Layout">
                    <p className="dummy-content">Layout Settings Tab</p>
                </Tab>
                <Tab label="Background">
                    <Tabs className="tabs-inner" activeTab={1}>
                        <Tab label="Color">
                            <p className="dummy-content">Color Settings Tab</p>
                        </Tab>
                        <Tab label="Image">
                            <section className="modal-content__upload upload-section">
                                <Button className="btn-icon btn-upload" text="Upload"
                                    action={() => console.log('upload')}>
                                    <Icon title="upload"/>
                                </Button>
                                <Button className="btn-icon btn-upload" text="Gallery"
                                    action={() => console.log('gallery')}>
                                    <Icon title="gallery"/>
                                </Button>
                            </section>
                            <Accordion title="Scroll Effects" className="modal-content__accordion">
                                <RadioButton/>
                            </Accordion>
                            <Accordion title="Color Overlay" className="modal-content__accordion">
                                <ColorSelect title="Solid" label="solid"/>
                                <ColorSelect title="Gradient" label="gradient"/>
                            </Accordion>
                            <Accordion title="Filters" className="modal-content__accordion filters">
                                <Filters/>
                                <Slider className="filters__slider"/>
                            </Accordion>
                            <Accordion title="Color behind image" className="modal-content__accordion">
                                <ColorSelect title="Solid" label="solid"/>
                                <ColorSelect title="Gradient" label="gradient"/>
                            </Accordion>
                            <SvgLibrary/>
                        </Tab>
                        <Tab label="Video">
                            <p className="dummy-content">Video Settings Tab</p>
                        </Tab>
                    </Tabs>
                </Tab>
            </Tabs>
        </main>

        <footer className="modal-footer">
            <Button className="btn-position btn-icon btn-w-100" text="Positioning settings"
                action={() => console.log('positioning-settings')}>
                <Icon title="fix"/>
            </Button>
        </footer>
    </div>
);

export default Modal;

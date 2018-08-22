import React from 'react';
import '../styles/animation.scss';
import '../styles/buttons.scss';
import '../styles/fonts.scss';
import './style.scss';

import Modal from '../components/modal';

const App = () => (
    <div className="app">
        <div className="modal-wrapper">
            <Modal/>
        </div>
    </div>
);

export default App;

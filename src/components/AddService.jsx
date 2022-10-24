import React from 'react';
import { useState } from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import './AddService.css'


function AddService() {
    const [state, setState] = useState({
        isPaneOpen: false,
        isPaneOpenLeft: false,
      });

    return (
        <div className='blockadd'>
            <div onClick={() => setState({ isPaneOpen: true })}>
              <div className='plus'></div>
            </div>
            Добавить сервис
            <SlidingPane
                closeIcon=">"
                className="some-custom-class"
                overlayClassName="some-custom-overlay-class"
                isOpen={state.isPaneOpen}
                title="Инструкция по добавлению модуля к облачному сервису"
                onRequestClose={() => {
                    setState({ isPaneOpen: false });
                }}
            >
            </SlidingPane>
        </div>
    );
};

export default AddService;
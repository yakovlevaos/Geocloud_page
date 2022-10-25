import React from 'react';
import { useState } from 'react';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import './AddService.css';

function AddService() {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="blockadd" onClick={handleOpen}>
      <div>
        <div className="plus" />
      </div>
      Добавить сервис
      <SlidingPane
        closeIcon=">"
        className="some-custom-class"
        overlayClassName="some-custom-overlay-class"
        isOpen={isOpen}
        title="Инструкция по добавлению модуля к облачному сервису"
        onRequestClose={handleOpen}
      ></SlidingPane>
    </div>
  );
}

export default AddService;

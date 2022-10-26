import { React, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SlidingPane from 'react-sliding-pane';
import ReactMarkdown from 'react-markdown';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import './AddService.css';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import content from './addModule';

function AddService() {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!isOpen);
  };

  const hadleKeyDown = (event) => {
    setOpen(event.keyCode === 13);
  };

  const closeIcon = <FontAwesomeIcon icon={faChevronRight} />;

  return (
    <>
      <div
        className="blockadd"
        onClick={handleOpen}
        onKeyDown={hadleKeyDown}
        role="button"
        tabIndex={0}
      >
        <div>
          <div className="plus" />
        </div>
        Добавить сервис
      </div>
      <SlidingPane
        closeIcon={closeIcon}
        isOpen={isOpen}
        title="Инструкция по добавлению модуля к облачному сервису"
        onRequestClose={handleOpen}
        shouldCloseOnEsc
      >
        <ReactMarkdown>{content}</ReactMarkdown>
      </SlidingPane>
    </>
  );
}

export default AddService;

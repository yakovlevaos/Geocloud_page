import { React, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SlidingPane from 'react-sliding-pane';
import ReactMarkdown from 'react-markdown';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import './AddService.css';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const element = <FontAwesomeIcon icon={faChevronRight} />;

function AddService() {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <div
        className="blockadd"
        onClick={handleOpen}
        onKeyDown={handleOpen}
        role="button"
        tabIndex={0}
      >
        <div
          onClick={handleOpen}
          onKeyDown={handleOpen}
          role="button"
          tabIndex={0}
        >
          <div className="plus" />
        </div>
        Добавить сервис
      </div>
      <SlidingPane
        closeIcon={element}
        isOpen={isOpen}
        title="Инструкция по добавлению модуля к облачному сервису"
        onRequestClose={handleOpen}
        shouldCloseOnEsc
      >
        <ReactMarkdown>
          # Требования к добавляемому облачному сервису
        </ReactMarkdown>
      </SlidingPane>
    </>
  );
}

export default AddService;

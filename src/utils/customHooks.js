import React from 'react';
const KEY_NAME_ESC = 'Escape';
const KEY_EVENT_TYPE = 'keyup';
const MOUSE_UP = 'mouseup';
const MODAL = 'popup';

export function useEscapeKey(handleClose) {
  const handleEscKey = React.useCallback((event) => {
    if (event.key === KEY_NAME_ESC) {
      handleClose();
    }
  }, [handleClose]);

  React.useEffect(() => {
    document.addEventListener(KEY_EVENT_TYPE, handleEscKey);
    return () => {
      document.removeEventListener(KEY_EVENT_TYPE, handleEscKey);
    };
  });
}

export function useOutsideClick(handleClose) {
  const handleClick = React.useCallback((event) => {
    if (event.target.classList.contains(MODAL)) {
      handleClose();
    }
  }, [handleClose]);

  React.useEffect(() => {
    document.addEventListener(MOUSE_UP, handleClick);
    return () => {
      document.removeEventListener(MOUSE_UP, handleClick);
    };
  });
}

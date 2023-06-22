// export const sectionCardsOfPlacesSelector = '.elements';
// export const templateCardOfPlaceSelector = '#template-element';
// export const popupCardOfPlaceSelector = '#card-image';
// export const popupNewPlaceFormSelector = '#card-place';
// export const popupEditUserFormSelector = '#card-user';
// export const popupUserAvatarFormSelector = '#card-user-avatar';
// export const popupDeleteFormSelector = '#card-delete';
// export const currentUserDataSelectors = {
//   selectorAvatar: '#profile-avatar',
//   selectorName: '#profile-text-author',
//   selectorAbout: '#profile-text-job',
// };
// export const inputsUserFormFields = {
//   name: 'input-user-name',
//   about: 'input-user-job',
// };
// export const inputsPlaceFormFields = {
//   title: 'input-place-name',
//   src: 'input-img-link',
// };
// export const inputsUserAvatarFormFields = {
//   src: 'input-avatar-link',
// };

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

export const apiData = {
  server: 'https://mesto.nomoreparties.co/v1/',
  cohortId: 'cohort-66',
  token: 'd592279c-c8eb-4743-a6ef-300ef527bbe3',
  user: '/users/me',
  avatar: '/avatar',
  cards: '/cards',
  like: '/likes',
}

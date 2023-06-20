import React from 'react';
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    // Передать значение поля во внешний обработчик
    onUpdateAvatar(avatarRef.current.value);
  }

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="avatar"
      btnCaption="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
      <input
        id="input-avatar-link"
        name="input-avatar-link"
        type="url"
        ref={avatarRef}
        placeholder="Ссылка на картинку"
        autoComplete="off"
        className="popup__input-text"
        required />
      <span className="input-avatar-link-error popup__input-error"></span>
    </PopupWithForm>
  );
}
export default EditAvatarPopup;

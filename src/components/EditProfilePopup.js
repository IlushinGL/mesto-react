import React from 'react';
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Передать значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name: name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="profile"
      btnCaption="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
      <input
        id="input-user-name"
        name="input-user-name"
        type="text"
        value={name}
        onChange={handleChangeName}
        placeholder="Имя"
        minLength="2"
        maxLength="40"
        autoComplete="off"
        className="popup__input-text"
        required />
      <span className="input-user-name-error popup__input-error"></span>
      <input
        id="input-user-job"
        name="input-user-job"
        type="text"
        value={description}
        onChange={handleChangeDescription}
        placeholder="О себе"
        minLength="2"
        maxLength="200"
        autoComplete="off"
        className="popup__input-text"
        required />
      <span className="input-user-job-error popup__input-error"></span>
    </PopupWithForm>
  );
}
export default EditProfilePopup;

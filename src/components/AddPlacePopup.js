import React from 'react';
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({isOpen, onClose, onAddPlace}) {
  const [link, setLink] = React.useState('');
  const [name, setName] = React.useState('');

  React.useEffect(() => {
    if (!isOpen) {
      setLink('');
      setName('');
    }
  }, [isOpen]);

  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Передать значения управляемых компонентов во внешний обработчик
    onAddPlace({
      link: link,
      name: name,
    });
  }

  return (
    <PopupWithForm
      title="Новое место"
      name="place"
      btnCaption="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
      <input
        id="input-place-name"
        name="input-place-name"
        type="text"
        value={name}
        onChange={handleChangeName}
        placeholder="Название"
        minLength="2"
        maxLength="30"
        autoComplete="off"
        className="popup__input-text"
        required />
      <span className="input-place-name-error popup__input-error"></span>
      <input
        id="input-img-link"
        name="input-img-link"
        type="url"
        value={link}
        onChange={handleChangeLink}
        placeholder="Ссылка на картинку"
        autoComplete="off"
        className="popup__input-text"
        required />
      <span className="input-img-link-error popup__input-error"></span>
    </PopupWithForm>
  );
}
export default AddPlacePopup;

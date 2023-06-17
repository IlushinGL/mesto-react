import React from 'react';
import {apInterface} from '../utils/Api';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';


function App() {
  const [currentUser, setCurrentUser] = React.useState(null);

  const [isEditProfilePopupOpen, setProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setCard] = React.useState(null);

  React.useEffect(() => {
    apInterface.getUserInfo()
    .then((info) => {setCurrentUser(info)})
    .catch((err)=>{console.log(err)});
  }, []);

  function handleEditAvatarClick() {
    setAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setPlacePopupOpen(true);
  }
  function handleCardClick(card) {
    // debugger;
    setCard(card);
  }
  function closeAllPopups() {
    setProfilePopupOpen(false);
    setPlacePopupOpen(false);
    setAvatarPopupOpen(false);
    setCard(null);
  }

  return (
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick} />
      <Footer />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />

      <PopupWithForm
        title="Новое место"
        name="place"
        butnCaption="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}>
        <input
          id="input-place-name"
          name="input-place-name"
          type="text"
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
          placeholder="Ссылка на картинку"
          autoComplete="off"
          className="popup__input-text"
          required />
        <span className="input-img-link-error popup__input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        title="Обновить аватар"
        name="avatar"
        butnCaption="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>
        <input
          id="input-avatar-link"
          name="input-avatar-link"
          type="url"
          placeholder="Ссылка на картинку"
          autoComplete="off"
          className="popup__input-text"
          required />
        <span className="input-avatar-link-error popup__input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        title="Редактировать профиль"
        name="profile"
        butnCaption="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>
        <input
          id="input-user-name"
          name="input-user-name"
          type="text"
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
          placeholder="О себе"
          minLength="2"
          maxLength="200"
          autoComplete="off"
          className="popup__input-text"
          required />
        <span className="input-user-job-error popup__input-error"></span>
      </PopupWithForm>

      {/* <div id="card-delete" className="popup">
        <div className="popup__conteiner">
          <button type="button" className="popup__close"></button>
          <h2 className="popup__title">Вы уверены?</h2>
          <form className="popup-form" id="form-delete" name="form-delete" noValidate>
            <button
                  type="submit"
                  className="popup__submit-btn">
              Да
            </button>
          </form>
        </div>
      </div>  */}

    </div>
  );
}

export default App;

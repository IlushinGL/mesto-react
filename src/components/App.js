import React from 'react';
// import tmplPath from '../images/template.png';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';


function App() {
  const [isEditProfilePopupOpen, setProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setAvatarPopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setPlacePopupOpen(true);
  }
  function closeAllPopups() {
    isEditProfilePopupOpen && setProfilePopupOpen(false);
    isAddPlacePopupOpen && setPlacePopupOpen(false);
    isEditAvatarPopupOpen && setAvatarPopupOpen(false);
  }

  return (
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick} />
      <Footer />
      <ImagePopup />
      <PopupWithForm
        title="Новое место"
        name="place"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        children={() => {
          return (
          <>
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
            <button
              type="submit"
              className="popup__submit-btn">
              Создать
            </button>
          </>
        )}} />
      <PopupWithForm
        title="Обновить аватар"
        name="avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        children={() => {
          return (
          <>
            <input
                  id="input-avatar-link"
                  name="input-avatar-link"
                  type="url"
                  placeholder="Ссылка на картинку"
                  autoComplete="off"
                  className="popup__input-text"
                  required />
            <span className="input-avatar-link-error popup__input-error"></span>
            <button
                  type="submit"
                  className="popup__submit-btn">
              Сохранить
            </button>
          </>
        )}} />
     <PopupWithForm
        title="Редактировать профиль"
        name="profile"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        children={() => {
          return (
          <>
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
            <button
                  type="submit"
                  className="popup__submit-btn">
              Сохранить
            </button>
          </>
        )}} />

      <div id="card-delete" className="popup">
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
      </div>

      <template id="template-element">
        <div className="elements__element">
          <img className="elements__element-img"
                src="./images/template.png" alt="шаблон элемента" />
          <div className="elements__element-caption">
            <h2 className="elements__element-text">шаблон элемента</h2>
            <button type="button" className="elements__element-favour">
              <img className="icon" src="..." alt="no" />
              <div className="likes">0</div>
            </button>
          </div>
          <button type="button" className="elements__element-trash"></button>
        </div>
      </template>

    </div>
  );
}

export default App;

import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { apInterface } from '../utils/Api';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditProfilePopup from './EditProfilePopup';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import avatarNulllPath from '../images/template.png';


function App() {
  const [currentUser, setCurrentUser] = React.useState({
    _id: '-1',
    name: 'имя',
    about: 'занятие',
    avatar: avatarNulllPath,
  });
  const [cards, setCards] = React.useState([]);
  const [isEditProfilePopupOpen, setProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setCard] = React.useState(null);

  React.useEffect(() => {
    // Помещаем МЕНЯ в КОНТЕКСТ.
    apInterface.getUserInfo()
    .then((info) => {setCurrentUser(info)})
    .catch((err)=>{console.log(err)});
  }, []);

  React.useEffect(() => {
    // Задаём начальный массив карточек.
    apInterface.getInitialCards()
    .then((initialCards) => {
      setCards(Array.from(initialCards));
    })
    .catch((err)=>{
      console.log(err);
    });
  }, []);

  function handleCardLike(card) {
    // Есть ли МОЙ лайк на карточке?
    const isLiked = card.likes.some(like => like._id === currentUser._id);
    // Отправить запрос в API на изменение лайка карточки, получить и отрисовать обновлённые данные
    apInterface.likeCard(card._id, !isLiked)
    .then((newCard) => {
      setCards((state) => state.map((item) => item._id === card._id ? newCard : item));
    })
    .catch((err)=>{
      console.log(err);
    });
  }

  function handleCardDelete(card) {
    // Отправить запрос в API на удаление карточки и отрисовать данные без неё
    apInterface.deleteCard(card._id)
    .then(() => {
      setCards((state) => state.filter((item) => item._id !== card._id));
    })
    .catch((err)=>{
      console.log(err);
    });
  }

  function handleUpdateUser(new_info) {
    // Отправить запрос в API на именение и отрисовать новый КОНТЕКСТ.
    apInterface.setUserInfo(new_info)
    .then((saved_info) => {
      setCurrentUser(saved_info);
      closeAllPopups();
    })
    .catch((err)=>{console.log(err)});
  }

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
    setCard(card);
  }
  function closeAllPopups() {
    setProfilePopupOpen(false);
    setPlacePopupOpen(false);
    setAvatarPopupOpen(false);
    setCard(null);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main cards={cards}
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
              onCardClick={handleCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
        />
        <Footer />

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <PopupWithForm
          title="Новое место"
          name="place"
          btnCaption="Создать"
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
          btnCaption="Сохранить"
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
    </CurrentUserContext.Provider>
  );
}

export default App;

import React from 'react';
import plusPath from '../images/plus.png';
import Header from './Header';


function App() {
  return (
    <body class="page">
      <Header />

      <main class="content">

        <section class="profile">
          <div class="profile__avatar">
            <img id="profile-avatar" class="profile__avatar-img" src={plusPath} alt="аватар" />
          </div>

          <div class="profile__info">
            <h1 id="profile-text-author" class="profile__title">...</h1>
            <button type="button" class="profile__edit-button"></button>
            <p id="profile-text-job" class="profile__subtitle">...</p>
          </div>
          <button type="button" class="profile__add-button"></button>
        </section>

        <section class="elements">

        </section>

      </main>

      <footer class="footer">
        <p class="footer__copyright">Григорий Илюшин 2023</p>
      </footer>

      <div id="card-image" class="popup popup_img">
        <div class="popup__conteiner popup__conteiner_img">
          <button type="button" class="popup__close"></button>
          <img class="popup__image" src={plusPath} alt="новый" />
          <h2 class="popup__title popup__title_img">Подпись изображения</h2>
        </div>
      </div>


      <div id="card-place" class="popup">
        <div class="popup__conteiner">
          <button type="button" class="popup__close"></button>
          <h2 class="popup__title">Новое место</h2>
          <form class="popup-form" id="form-place" name="form-place" novalidate>
            <input
                  id="input-place-name"
                  name="input-place-name"
                  type="text"
                  placeholder="Название"
                  minlength="2"
                  maxlength="30"
                  autocomplete="off"
                  class="popup__input-text"
                  required />
            <span class="input-place-name-error popup__input-error"></span>
            <input
                  id="input-img-link"
                  name="input-img-link"
                  type="url"
                  placeholder="Ссылка на картинку"
                  autocomplete="off"
                  class="popup__input-text"
                  required />
            <span class="input-img-link-error popup__input-error"></span>
            <button
                  type="submit"
                  class="popup__submit-btn">
              Создать
            </button>
          </form>
        </div>
      </div>

      <div id="card-user-avatar" class="popup">
        <div class="popup__conteiner">
          <button type="button" class="popup__close"></button>
          <h2 class="popup__title">Обновить аватар</h2>
          <form class="popup-form" id="form-user-avatar" name="form-user-avatar" novalidate>
            <input
                  id="input-avatar-link"
                  name="input-avatar-link"
                  type="url"
                  placeholder="Ссылка на картинку"
                  autocomplete="off"
                  class="popup__input-text"
                  required />
            <span class="input-avatar-link-error popup__input-error"></span>
            <button
                  type="submit"
                  class="popup__submit-btn">
              Сохранить
            </button>
          </form>
        </div>
      </div>

      <div id="card-user" class="popup">
        <div class="popup__conteiner">
          <button type="button" class="popup__close"></button>
          <h2 class="popup__title">Редактировать профиль</h2>
          <form class="popup-form" id="form-user" name="form-user" novalidate>
            <input
                  id="input-user-name"
                  name="input-user-name"
                  type="text"
                  placeholder="Имя"
                  minlength="2"
                  maxlength="40"
                  autocomplete="off"
                  class="popup__input-text"
                  required />
            <span class="input-user-name-error popup__input-error"></span>
            <input
                  id="input-user-job"
                  name="input-user-job"
                  type="text"
                  placeholder="О себе"
                  minlength="2"
                  maxlength="200"
                  autocomplete="off"
                  class="popup__input-text"
                  required />
            <span class="input-user-job-error popup__input-error"></span>
            <button
                  type="submit"
                  class="popup__submit-btn">
              Сохранить
            </button>
          </form>
        </div>
      </div>

      <div id="card-delete" class="popup">
        <div class="popup__conteiner">
          <button type="button" class="popup__close"></button>
          <h2 class="popup__title">Вы уверены?</h2>
          <form class="popup-form" id="form-delete" name="form-delete" novalidate>
            <button
                  type="submit"
                  class="popup__submit-btn">
              Да
            </button>
          </form>
        </div>
      </div>

      <template id="template-element">
        <div class="elements__element">
          <img class="elements__element-img"
                src="./images/template.png" alt="шаблон элемента" />
          <div class="elements__element-caption">
            <h2 class="elements__element-text">шаблон элемента</h2>
            <button type="button" class="elements__element-favour">
              <img class="icon" src="..." alt="no" />
              <div class="likes">0</div>
            </button>
          </div>
          <button type="button" class="elements__element-trash"></button>
        </div>
      </template>

    </body>
  );
}

export default App;

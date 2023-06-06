// import React from 'react';
import tmplPath from '../images/template.png';

function Main() {
    function handleEditAvatarClick() {
      const popUp = document.querySelector('#card-user-avatar');
      popUp.classList.add('popup_opened');
    }
    function handleEditProfileClick() {
      const popUp = document.querySelector('#card-user');
      popUp.classList.add('popup_opened');
    }
    function handleAddPlaceClick() {
      const popUp = document.querySelector('#card-place');
      popUp.classList.add('popup_opened');
    }
    return (
        <main class="content">

        <section class="profile">
          <div onClick={handleEditAvatarClick} class="profile__avatar">
            <img id="profile-avatar" class="profile__avatar-img" src={tmplPath} alt="аватар" />
          </div>

          <div class="profile__info">
            <h1 id="profile-text-author" class="profile__title">имя</h1>
            <button onClick={handleEditProfileClick} type="button" class="profile__edit-button"></button>
            <p id="profile-text-job" class="profile__subtitle">занятие</p>
          </div>
          <button onClick={handleAddPlaceClick} type="button" class="profile__add-button"></button>
        </section>

        <section class="elements">

        </section>

      </main>
    );
  }
  
  export default Main;
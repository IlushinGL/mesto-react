// import React from 'react';
import tmplPath from '../images/template.png';

function Main(props) {

    return (
        <main className="content">

        <section className="profile">
          <div onClick={props.onEditAvatar} className="profile__avatar">
            <img id="profile-avatar" className="profile__avatar-img" src={tmplPath} alt="аватар" />
          </div>

          <div className="profile__info">
            <h1 id="profile-text-author" className="profile__title">имя</h1>
            <button onClick={props.onEditProfile} type="button" className="profile__edit-button"></button>
            <p id="profile-text-job" className="profile__subtitle">занятие</p>
          </div>
          <button onClick={props.onAddPlace} type="button" className="profile__add-button"></button>
        </section>

        <section className="elements">

        </section>

      </main>
    );
  }

export default Main;

import React from 'react';
import {apInterface} from '../utils/Api';
import tmplPath from '../images/template.png';
import Card from './Card';

function Main(props) {
  const [userName, setUserName] = React.useState('имя');
  const [userDescription, setUserDescription] = React.useState('занятие');
  const [userAvatar, setUserAvatar] = React.useState(tmplPath);
  const [cards, setCards] = React.useState([]);


  React.useEffect(() => {
    apInterface.getUserInfo()
    .then((info) => {
      setUserName(info.name);
      setUserDescription(info.about);
      setUserAvatar(info.avatar);
    })
    .catch((err)=>{
      console.log(err);
    });
  }, []);

  React.useEffect(() => {
    apInterface.getInitialCards()
    .then((initialCards) => {
      setCards(Array.from(initialCards));
    })
    .catch((err)=>{
      console.log(err);
    });
  }, []);

  return (
    <main className="content">

      <section className="profile">
        <div onClick={props.onEditAvatar} className="profile__avatar">
          <img id="profile-avatar" className="profile__avatar-img" src={userAvatar} alt="аватар" />
        </div>

        <div className="profile__info">
          <h1 id="profile-text-author" className="profile__title">{userName}</h1>
          <button onClick={props.onEditProfile} type="button" className="profile__edit-button"></button>
          <p id="profile-text-job" className="profile__subtitle">{userDescription}</p>
        </div>
        <button onClick={props.onAddPlace} type="button" className="profile__add-button"></button>
      </section>

      <section className="elements">
        {cards.map((card) => (
          <Card key={'' + card._id} card={card} onCardClick={props.onCardClick} />
        ))}
      </section>

    </main>
  );
}

export default Main;

function ImagePopup({card, onClose}) {

  return (
    <div className={'popup popup_img' + (card ? ' popup_opened' : '')}>
      <div className="popup__conteiner popup__conteiner_img">
        <button onClick={onClose} type="button" className="popup__close"></button>
        <img className="popup__image" src={card ? card.link : ''} alt={card ? card.name : '-null-'} />
        <h2 className="popup__title popup__title_img">{card ? card.name : '-null-'}</h2>
      </div>
    </div>
  );
}

export default ImagePopup;

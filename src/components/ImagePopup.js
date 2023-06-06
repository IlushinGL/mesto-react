import tmplPath from '../images/template.png';

function ImagePopup() {
  return (
    <div className="popup popup_img">
      <div className="popup__conteiner popup__conteiner_img">
        <button type="button" className="popup__close"></button>
        <img className="popup__image" src={tmplPath} alt="изображение" />
        <h2 className="popup__title popup__title_img">Подпись изображения</h2>
      </div>
    </div>
  );
}

export default ImagePopup;

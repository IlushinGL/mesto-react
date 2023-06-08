function PopupWithForm(props) {
  return (

    <div className={`popup popup_type_${props.name}` + (props.isOpen ? ' popup_opened' : '')}>
      <div className="popup__conteiner">
        <button onClick={props.onClose} type="button" className="popup__close"></button>
        <h2 className="popup__title">{props.title}</h2>
        <form className="popup-form" name={props.name} noValidate>
          {props.children}
          <button
            type="submit"
            className="popup__submit-btn">
            {props.butnCaption}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;

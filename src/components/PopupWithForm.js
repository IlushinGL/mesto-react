function PopupWithForm({name, title, btnCaption, isOpen, onClose, onSubmit, children}) {
  return (

    <div className={`popup popup_type_${name}` + (isOpen ? ' popup_opened' : '')}>
      <div className="popup__conteiner">
        <button onClick={onClose} type="button" className="popup__close"></button>
        <h2 className="popup__title">{title}</h2>
        <form onSubmit={onSubmit} className="popup-form" name={name}>
          {children}
          <button
            type="submit"
            className="popup__submit-btn">
            {btnCaption}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;

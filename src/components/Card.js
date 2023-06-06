import likeNoPath from '../images/heart_no.svg';

function Card({card, onCardClick}) {

  function handleClick() {
    onCardClick(card);
  }

  return (
    <div key={card._id} className="elements__element">
      <img onClick={handleClick} className="elements__element-img"
            src={card.link} alt={card.link} />
      <div className="elements__element-caption">
        <h2 className="elements__element-text">{card.name}</h2>
        <button type="button" className="elements__element-favour">
          <img className="icon" src={likeNoPath} alt="no" />
          <div className="likes">{card.likes.length}</div>
        </button>
      </div>
      <button type="button" className="elements__element-trash"></button>
    </div>
  );
}

export default Card;

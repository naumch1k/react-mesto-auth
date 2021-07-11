import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({ card, onClick, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwned = card.owner._id === currentUser._id;
  const isLiked = card.likes.some(item => item._id === currentUser._id);

  const cardDeleteButtonClassName = (
    `element__delete-btn ${isOwned ? '' : 'element__delete-btn_hidden'}`
  );

  const cardLikeButtonClassName = (
    `element__like-btn ${isLiked ? 'element__like-btn_active' : ''}`
  ); 

  const handleClick = () => {
    onClick(card);
  }

  const handleLikeClick = () => {
    onCardLike(card);
  };

  const handleDeleteClick = () => {
    onCardDelete(card);
  };

  return(
    <li className="element">
      <img onClick={handleClick} className="element__image" src={card.link} alt={`Изображение ${card.name}`} />
      <div className="element__desc">
        <h3 className="element__title">{card.name}</h3>
        <div className="element__like-container">
          <button onClick={handleLikeClick} className={cardLikeButtonClassName} type="button" aria-label="Поставить лайк"></button>
          <span className="element__like-count">{card.likes.length}</span>
        </div>
      </div>
      <button onClick={handleDeleteClick} className={cardDeleteButtonClassName} type="button" aria-label="Удалить фотографию"></button>
    </li>
  );

}

export default Card; 
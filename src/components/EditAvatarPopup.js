import React, { useRef } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
  const avatarRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  
    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  } 

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      buttonText={props.buttonText}
      isOpen={props.isOpen}
      onSubmit={handleSubmit}
      onClose={props.onClose}
    >
      <input 
        className="form__item"
        id="avatar-url"
        type="url"
        name="avatar"
        ref={avatarRef}
        placeholder="Ссылка на картинку"
        required 
      />
      <p className="form__error" id="avatar-url-error"></p>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;

import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
  return(
    <form className="form form_theme_dark" name="signup-form" noValidate>
      <h2 className="form__heading">Регистрация</h2>
      <fieldset className="form__items form__items_theme_dark">
        <input 
          className="form__item form__item_theme_dark form__item_el_email"
          id="email" 
          type="email" 
          name="email" 
          placeholder="Email"
          //value={email}
          required 
        />
        <p className="form__error" id="email-error"></p>
        <input 
          className="form__item form__item_theme_dark form__item_el_password"
          id="password" 
          type="password" 
          name="password" 
          placeholder="Пароль" 
          //value={password}
          required 
        />
        <p className="form__error" id="password-error"></p>
      </fieldset>
      <button className="form__submit-btn form__submit-btn_theme_dark" type="submit">Зарегистрироваться</button>
      <p className="form__text">
        Уже зарегистрированы?
        <Link to="/sign-in" className="form__link"> Войти</Link>
      </p>
    </form>
  );
}

export default Register;

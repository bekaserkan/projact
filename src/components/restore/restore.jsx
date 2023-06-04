import React, { useState } from "react";
import "./restore.css"
import { Link } from "react-router-dom";
import { errorContact, successContact } from "../UI/sweetalert/sweetalert";

const Restore = () => {
  const [restoreValue, setRestoreValue] = useState('')

  const handleRestoreChange = (event) => {
    setRestoreValue(event.target.value);
  };

    return (    
        <div className="restore">
            <div className="container">
            <h1>Восстановление пароля</h1>
            <div className="email1_block">
            <input value={restoreValue} onChange={handleRestoreChange} className="email1" type="email" placeholder="Введите номер телефона или эл.почту" />
            <div className="mail_block">
            <span className="mail">На  данный номер телефона или почту будет <a href="">отправлена ссылка  для  восстановления </a>
             пароля с дальнейшей инструкцией</span>
            </div>
            <button onClick={restoreValue === '' ? errorContact : successContact} className="btn_r1">Восстановить пароль</button>
            <div className="restore_footer">
            <span className="href">У вас есть профиль?<Link className="link1" to='Authorization' >Войти</Link></span> 
            <span className="href">Хотите на назад?<Link className="link1" to='/'>На главную</Link></span>
              </div>
            </div>
            </div>
    </div>
    )
};

export default Restore;
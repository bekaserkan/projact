import React, { useState } from "react";
import "./registration.css"

function Registration () {

    return (
        <div className="registration">
            <div className="container">
                <h1>Регистрация</h1>
                <div className="r-block">
                <div className="registration1">
                    <input type="text" placeholder="Введите номер" />
                    <input type="email" placeholder="Введите эл.почту" />
                    <input type="text" placeholder="Введите игровой ник" />
                </div>
                <div className="registration2">
                    <input type="password" placeholder="Пароль" id="code4" />
                    <input type="password" placeholder="Повторите пароль" />
                </div>
                </div>
                <button id="add_r">Регистрация</button>
                <div className="r_footer">
                <span className="href">У вас есть профиль?<a href="#">Войти</a></span> 
                <span className="href">Забыли пароль?<a href="#">Восстановить</a></span>
                </div>
            </div>
        </div>
    )
}

export default Registration;
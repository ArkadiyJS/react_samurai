import React from "react";
import s from './login.module.css'


function LoginPage(){
  return (
    <div className={s.loginBlock}>Кто ты?

      <div className={s.item}>логин<input></input></div>
      <div className={s.item}>пароль<input></input></div>
      <div className={s.item}> <button>продолжить</button></div>
    </div>
    
  )
}



export default LoginPage;
import React from "react";
import {Field, reduxForm} from 'redux-form'



function LoginForm (props){
  return(
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>логин

          <Field placeholder={'login'} name={'login'} component={'input' }></Field>
        </div>

        <div >пароль
        
          <Field placeholder={'password'} name={'password'}  component={'input'} ></Field>
          </div>

        <div >
          <input type={'checkbox'}>remember me</input>
        </div>

        <div >
           <button>продолжить</button>
        </div>
      </form>
    </div>
  )
}
export const ReduxLoginForm = reduxForm({ form: 'login'})(LoginForm)
export default LoginForm;
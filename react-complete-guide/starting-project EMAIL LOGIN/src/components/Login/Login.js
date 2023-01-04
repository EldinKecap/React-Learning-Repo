import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-contex';
import Input from '../UI/input/input';

const emailReducer = (state, action) => {
  // console.log(action);
  if (action.type == "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes('@') }
  }
  if (action.type == "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") }
  }
  // return { value:'', isValid:false }
}

const passwordReducer = (state, action) => {
  console.log(action);
  if (action.type == "PASSWORD_INPUT") {
    return {
      value: action.val,
      isValid: action.val.length > 6
    }
  }
  if (action.type == "PASSWORD_BLUR") {
    return {
      value: state.value,
      isValid: action.val
    }
  }
  return {
    value: '',
    isValid: null
  }
}


const Login = (props) => {

  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer,
    { value: '', isValid: null })


  const [passwordState, dispatchPassword] = useReducer(passwordReducer,
    {
      value: '',
      isValid: undefined
    })


  // useEffect(() => {
  //   console.log('yo2');
  //   return () => {
  //     console.log('cleanup');
  //   }
  // }, [enteredPassword])




  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  const ctx = useContext(AuthContext);
  const emailRef = useRef()
  const passwordRef = useRef()




  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking Form");
      console.log(passwordIsValid);
      setFormIsValid(
        emailIsValid && passwordIsValid
      );
    }, 500);

    return () => {
      clearTimeout(identifier)
    };
  }, [emailIsValid, passwordIsValid])


  const emailChangeHandler = (event) => {
    dispatchEmail(
      {
        type: 'USER_INPUT',
        val: event.target.value
      });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({
      type: "PASSWORD_INPUT",
      val: event.target.value
    })
  };

  const validateEmailHandler = () => {
    dispatchEmail(
      {
        type: 'INPUT_BLUR',
        val: emailState.isValid
      });
  };

  const validatePasswordHandler = () => {
    dispatchPassword(
      {
        type: 'PASSWORD_BLUR',
        val: passwordState.isValid
      }
    )
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      ctx.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
        emailRef.current.focus();
    } else {
        passwordRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input id='email'
          label="E-Mail"
          type='email'
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          ref={emailRef} />

        <Input id='password'
          label="Password"
          type='password'
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          ref={passwordRef} />

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;

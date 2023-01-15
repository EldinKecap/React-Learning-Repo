import useInput from "../use-input/use-input";


const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    hasError: firstNameHasError,
    isValid: firstNameIsValid,
    reset: resetFirstName,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler
  } = useInput((value => value.trim() !== ''))

  const {
    value: enteredLastName,
    hasError: lastNameHasError,
    isValid: lastNameIsValid,
    reset: resetLastName,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler
  } = useInput((value => value.trim() !== ''))

  const {
    value: enteredEmail,
    hasError: emailHasError,
    isValid: emailIsValid,
    reset: resetEmail,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler
  } = useInput((value => value.includes('@')))

  const firstNameClasses = firstNameHasError
    ? 'form-control invalid'
    : 'form-control'

  const lastNameClasses = lastNameHasError
    ? 'form-control invalid'
    : 'form-control'

  const emailClasses = emailHasError
    ? 'form-control invalid'
    : 'form-control'

  const formIsValid = firstNameIsValid && lastNameIsValid && emailIsValid;

  console.log(formIsValid);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }
    
    resetFirstName();
    resetLastName();
    resetEmail()
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name'
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={enteredFirstName} />
          {firstNameHasError && <p className="error-text">First name can't be empty</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name'
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName} />
          {lastNameHasError && <p className="error-text">Last name can't be empty</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail} />
        {emailHasError && <p className="error-text">Email must include @</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

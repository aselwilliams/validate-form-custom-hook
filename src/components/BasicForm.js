import useInput from "../hooks/use-input";

const isNotEmpty = value=>value.trim() !== '';
const isEmail = value=>value.includes('@')

const BasicForm = (props) => {

  const {
    value:enteredName, 
    isValid:nameIsValid,
    hasError:nameInputHasError, 
    valueChangeHandler:nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset:resetNameInput
  } = useInput(isNotEmpty)
  const {
    value:lastName,
    isValid:lastNameIsValid,
    hasError:lastNameHasError,
    valueChangeHandler:lastNameChangeHandler,
    inputBlurHandler:lastNameBlurHandler,
    reset:resetLastNameInput
  }= useInput(isNotEmpty)

    const {
      value:enteredEmail,
      isValid:enteredEmailIsValid,
      hasError:emailInputHasError,
      valueChangeHandler: emailChangeHandler,
      inputBlurHandler:emailBlurHandler,
      reset:resetEmailInput
    } = useInput(isEmail)

  let formIsValid = false;
  if(nameIsValid && enteredEmailIsValid && lastNameIsValid){
   formIsValid = true
  } 

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if(!formIsValid){
      return;
    }
    console.log(enteredName,lastName,enteredEmail)
    resetNameInput()
    resetLastNameInput()
    resetEmailInput()
  }
  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
  const lastNameInputClasses = lastNameHasError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';
  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={nameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={enteredName} onBlur={nameBlurHandler} onChange={nameChangeHandler}/>
          {nameInputHasError && (<p className='error-text'>Name must not be empty.</p>)}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' value={lastName} onBlur={lastNameBlurHandler} onChange={lastNameChangeHandler} />
          {lastNameHasError && (<p className="error-text">Last name must not be empty.</p>)}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' value={enteredEmail} onBlur={emailBlurHandler} onChange={emailChangeHandler} />
        {emailInputHasError && (<p className='error-text'>Please enter a valid email.</p>)}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

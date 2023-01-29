import {useState} from 'react';
import '../index.css'
import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const {
    value:enteredName, 
    isValid:nameIsValid,
    hasError:nameInputHasError, 
    valueChangeHandler:nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset:resetNameInput
  } = useInput(value=>value.trim()!=='')

    const {
      value:enteredEmail,
      isValid:enteredEmailIsValid,
      hasError:emailInputHasError,
      valueChangeHandler: emailChangeHandler,
      inputBlurHandler:emailBlurHandler,
      reset:resetEmailInput
    } = useInput((value)=>value.includes('@'))

  let formIsValid = false;
  if(nameIsValid && enteredEmailIsValid){
   formIsValid = true
  } 

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if(!nameIsValid){
      return;
    }

    resetNameInput()
    resetEmailInput()
  }
  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' value={enteredName} onBlur={nameBlurHandler} onChange={nameChangeHandler} />
        {nameInputHasError && (<p className='error-text'>Name must not be empty.</p>)}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input type='text' id='email' value={enteredEmail} onBlur={emailBlurHandler} onChange={emailChangeHandler} />
        {emailInputHasError && (<p className='error-text'>Please enter a valid email.</p>)}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
// const SimpleInput = (props) => {
//   const [enteredName, setEnteredName] = useState('')
//   const [nameIsTouched, setNameIsTouched] = useState(false);
//   const [enteredEmail, setEnteredEmail] = useState('')
//   const [emailTouched, setEmailTouched] = useState(false)

//   const nameIsValid = enteredName.trim()!=='';
//   const nameIsInvalid = !nameIsValid && nameIsTouched;
//   const emailIsValid = enteredEmail.trim() !=='' && enteredEmail.includes('@')
//   const emailIsInvalid = !emailIsValid && emailTouched;

//   let formIsValid = false;
//   if(nameIsValid && emailIsValid){
//    formIsValid = true
//   } 

//   const nameChangeHandler = (e) => {
//     setEnteredName(e.target.value)
//   }
//   const emailChangeHandler = (e) => {
//     setEnteredEmail(e.target.name)
//   }

//   const formSubmitHandler = (e) => {
//     e.preventDefault();
//     setNameIsTouched(true)
//     setEmailTouched(true)
//     if(!nameIsValid || !emailIsValid){
//       return;
//     }

//     // const nameRef = useRef()
//     // const enteredValue=nameRef.current.value;
//     //nameRef.current.value='' =>Not Ideal, don't manipulate the DOM
//     setEnteredName('')
//     setNameIsTouched(false)
//     setEnteredEmail('')
//     setEmailTouched(false)
//   }

//   const inputBlurHandler = () => {
//     setNameIsTouched(true)
//   }
//   const emailBlurHandler = ()=> {
//     setEmailTouched(true)
//   }
//   const nameInputClasses = nameIsInvalid ? 'form-control invalid' : 'form-control';
//   const emailInputClasses = emailIsInvalid ? 'form-control invalid' : 'form-control';

//   return (
//     <form onSubmit={formSubmitHandler}>
//       <div className={nameInputClasses}>
//         <label htmlFor='name'>Your Name</label>
//         <input type='text' id='name' value={enteredName} onBlur={inputBlurHandler} onChange={nameChangeHandler} />
//         {nameIsInvalid && (<p className='error-text'>Name must not be empty.</p>)}
//       </div>
//       <div className={emailInputClasses}>
//         <label htmlFor='email'>Your Email</label>
//         <input type='text' id='email' value={enteredEmail} onBlur={emailBlurHandler} onChange={emailChangeHandler} />
//         {emailIsInvalid && (<p className='error-text'>Please enter a valid email.</p>)}
//       </div>
//       <div className="form-actions">
//         <button disabled={!formIsValid}>Submit</button>
//       </div>
//     </form>
//   );
// };
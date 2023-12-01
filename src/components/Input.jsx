import React, { useState } from 'react'
import { validate } from '../utils/validators'

const INPUT_STATES = {
  UNTOUCHED: 'UNTOUCHED',
  VALID: 'VALID',
  INVALID: 'INVALID',
}

const Input = ({ label, id, type, validators, errorText }) => {
  const [state,setState]= useState(INPUT_STATES.UNTOUCHED);
  const handleStateChange = (e)=>{
    e.preventDefault();
    if (validate(e.target.value,validators)){
      setState(INPUT_STATES.VALID)
    }else{
      setState(INPUT_STATES.INVALID)
    }   
  }
  const handleError = (e) => {
    e.preventDefault();
    if(state != INPUT_STATES.UNTOUCHED){
      setState(validate(e.target.value,validators)? INPUT_STATES.VALID : INPUT_STATES.INVALID)
    }
  }
  return (
    <div className={state===INPUT_STATES.INVALID? "form-input form-input--invalid":"form-input"} data-testid="form-input" onBlur={handleStateChange} onChange={handleError} dir='rtl'>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} />
      <p>{state===INPUT_STATES.INVALID? errorText:""}</p>
    </div>
  )
}

export default Input

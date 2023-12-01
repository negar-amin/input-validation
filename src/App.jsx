import React from 'react'
import Input from './components/Input'
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_MAXLENGTH,
  VALIDATOR_MIN,
  VALIDATOR_MAX,
  VALIDATOR_EMAIL,
} from './utils/validators'

function App() {
  return (
    <div className="app">
      <Input
        type="text"
        label="نام"
        id="name"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="نام نباید خالی باشد."
      />
      <Input
        type="text"
        label="نام کاربری"
        id="username"
        validators={[VALIDATOR_MINLENGTH(4), VALIDATOR_MAXLENGTH(12)]}
        errorText="نام کاربری باید بین 4 تا 12 کاراکتر داشته باشد."
      />
      <Input
        type="text"
        label="ایمیل"
        id="email"
        validators={[VALIDATOR_EMAIL()]}
        errorText="فرمت ایمیل باید درست باشد."
      />
      <Input
        type="text"
        label="سن"
        id="age"
        validators={[VALIDATOR_MIN(18), VALIDATOR_MAX(40)]}
        errorText="سن باید بین 18 تا 40 سال باشد."
      />
    </div>
  )
}

export default App

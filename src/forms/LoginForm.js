import React from 'react'
import { Field, reduxForm } from 'redux-form'
import RaisedButton from 'material-ui/RaisedButton'
import { TextField } from 'redux-form-material-ui'

let LoginForm = ({
  handleSubmit,
  onSubmit,
  pristine,
  submitting,
  error
}) => (
  <form onSubmit={handleSubmit(onSubmit)}>
    <Field
      name='email'
      component={TextField}
      fullWidth={true}
      floatingLabelText='Email'
    />
    <Field
      name='password'
      component={TextField}
      fullWidth={true}
      floatingLabelText='Password'
      type='password'
    />
    <h4>{error}</h4>
    <RaisedButton
      disabled={pristine || submitting}
      type='submit'
    >
      Submit
    </RaisedButton>
  </form>
)

const validate = (values) => {
  let error = {}
  if(!values.email) error.email = 'Email required'
  if(!values.password) error.password = 'Password required'
  return error
}

LoginForm = reduxForm({
  form: 'loginForm',
  validate
})(LoginForm)

export default LoginForm

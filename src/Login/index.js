import React, { useState } from 'react';
import axios from 'axios';
import { 
  StyledForm,
  StyledField,
  StyledErrorMessage,
  FieldWrapper,
  Button,
  FormButtons,
  SwitchWrapper,
} from './style';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { MainSection } from '../globalStyle';

const errorReducer = (err, cb) => {
  switch (err) {
    case 'SequelizeUniqueConstraintError':
      cb('Username has already been used.');
      break;
    default:
      throw new Error(`Add a new error handling for ${err}`);
  }
}

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);

  const header = isLogin ? 'Login' : 'Sign up';

  const handleLoginSubmit = values => {
    console.log('login');
    console.log(values);
  }

  const handleSignupSubmit = values => {
    const url = 'https://segware-book-api.segware.io/api/sign-up';
    axios.post(url, values).then(() => {
      setIsLogin(true);
      setSuccessMessage('Successfully registred');
    })
    .catch(err => errorReducer(err.response.data.name, setErrorMessage));
  };

  return (
    <MainSection>
      <h1>{header}</h1>
      <Formik
        initialValues={{ username: '', password: ''}}
        validationSchema={Yup.object({
          username: Yup.string().required('Required'),
          password: Yup.string().required('Required'),
        })}
        onSubmit={values => {
          isLogin 
            ? handleLoginSubmit(values) 
            : handleSignupSubmit(values)
        }}
      >
        <StyledForm aria-label="form">
          {errorMessage}
          {successMessage}
          
          <FieldWrapper>
            <label htmlFor="username">Username</label>
            <StyledField 
              id="username"
              name="username" 
              type="text" 
            />
            <StyledErrorMessage component="p" name="username" />
          </FieldWrapper>

          <FieldWrapper>
            <label htmlFor="password">Password</label>
            <StyledField 
              id="password"
              name="password"
              type="password"
            />
            <StyledErrorMessage component="p" name="password" />
          </FieldWrapper>

          <FormButtons>
            <Button type="submit" data-testid="submit-form">
              {isLogin ? 'Login' : 'Sign up'}
            </Button>
            <SwitchWrapper>
              {isLogin
                ? <p>Don't have an account?</p>
                : <p>Already have an account?</p>}
              <Button type="button" onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? 'Sign up' : 'Login' }
              </Button>
            </SwitchWrapper>
          </FormButtons>
        </StyledForm>
      </Formik>
    </MainSection>
  );
};

export default Login;

import React, { useState } from 'react';
import axios from 'axios';
import { 
  Form,
  InputWrapper,
  Input,
  Button,
  ButtonsWrapper,
} from './style';
import { MainSection } from '../globalStyle';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const handleSignUpSubmit = e => {
    e.preventDefault();
    
    const url = 'https://segware-book-api.segware.io/api/sign-up';
    axios.post(url, { username, password }).then(() => {
      setIsLogin(true);
      setSignUpSuccess(true);
    })
    .catch(err => {
      console.log(err);
    });
  };

  const loginForm = (
    <MainSection>
      <h1>Login</h1>
      {signUpSuccess && <p>Successfully registred</p>}
      
      <Form aria-label="form">
        <InputWrapper>
          <label htmlFor="username">Username</label>
          <Input
            type="text"
            name="username"
            id="username"
          />
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            name="password"
            id="password"
          />
          <ButtonsWrapper>
            <Button data-testid="submit-form">Login</Button>
            <p>Don't have an account?</p>
            <Button 
              type="button" 
              onClick={() => setIsLogin(!isLogin)}
            >
              Sing up
            </Button>
          </ButtonsWrapper>
        </InputWrapper>
      </Form>
    </MainSection>
  );

  const singUpForm = (
    <MainSection>
      <h1>Sing up</h1>
      <Form aria-label="form" onSubmit={e => handleSignUpSubmit(e)}>
        <InputWrapper>
          <label htmlFor="username">Username</label>
          <Input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <ButtonsWrapper>
            <Button data-testid="submit-form">Sing up</Button>
            <p>Already have an account?</p>
            <Button
              type="button" 
              onClick={() => setIsLogin(!isLogin)}
            >
              Login
            </Button>
          </ButtonsWrapper>
        </InputWrapper>
      </Form>
    </MainSection>
  );

  return isLogin ? loginForm : singUpForm;
};

export default Login;

import React, { useState } from 'react';
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

  const loginForm = (
    <MainSection>
      <h1>Login</h1>
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
            <Button>Login</Button>
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
            <Button>Sing up</Button>
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

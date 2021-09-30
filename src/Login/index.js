import React from 'react';
import { 
  Form,
  InputWrapper,
  Input,
  Button,
} from './style';
import { MainSection } from '../globalStyle';

const Login = () => {
  return (
    <MainSection>
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
          <Button>Login</Button>
        </InputWrapper>
      </Form>
    </MainSection>
  );
};

export default Login;

import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { fireEvent, render, screen, act} from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from '.';

// const signUpSuccess = rest.post(
//   'https://segware-book-api.segware.io/api/sign-up',
//   (req, res, ctx) => res(ctx.status(200))
// );
// const handlers = [signUpSuccess];

const server = setupServer(
  rest.post(
    'https://segware-book-api.segware.io/api/sign-up',
    (req, res, ctx) => res(ctx.status(200))
  )
);

describe('Login component', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('renders a Login text heading', () => {
    render(<Login />);
    expect(screen.getByText('Login', { selector: 'h1' }))
      .toBeInTheDocument();
  });

  it('renders a form', () => {
    render(<Login />);
    expect(screen.getByRole('form'))
      .toBeInTheDocument();
  });

  it('has a username input element', () => {
    render(<Login />);
    expect(screen.getByLabelText('Username'))
      .toBeInTheDocument();
  });

  it('has a password input element', () => {
    render(<Login />);
    expect(screen.getByLabelText('Password'))
      .toBeInTheDocument();
  });

  it('has a login button', () => {
    render(<Login />);
    expect(screen.getByText('Login', { selector: 'button'}))
      .toBeInTheDocument();
  });

  it('has a sign-up button', () => {
    render(<Login />);
    expect(screen.getByText('Sign up', { selector: 'button' }))
      .toBeInTheDocument();
  })

  it('clicks in sign-up button and switch to sign-up form', () => {
    render(<Login />);
    const singUpBtn = screen.getByText('Sign up', { selector: 'button' });
    fireEvent.click(singUpBtn);
    
    expect(screen.getByText('Sign up', { selector: 'h1' }));
  });

  it('back to login form and show success message when success sign up', 
  async () => {
    render(<Login />);
    const singUpBtn = screen.getByText('Sign up', { selector: 'button' });
    fireEvent.click(singUpBtn);

    const usernameInput = screen.getByLabelText('Username');
    const passwordInput = screen.getByLabelText('Password');
    const submitBtn = screen.getByTestId('submit-form');
    
    fireEvent.change(usernameInput, { target: {value: 'nicolai'}});
    fireEvent.change(passwordInput, { target: { value: '123'}})
    fireEvent.click(submitBtn);
    
    const successMsg = await screen.findByText('Successfully registred');

    expect(screen.getByText('Login', { selector: 'h1'}))
      .toBeInTheDocument();
    expect(successMsg).toBeInTheDocument();
  });
});

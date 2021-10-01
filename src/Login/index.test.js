import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { fireEvent, render, screen, act} from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from '.';

const bodyHaveRightKeys = obj => {
  const keys = Object.keys(obj);
  if (keys.includes('username') && keys.includes('password')) {
    return true;
  }
  return false;
}

const server = setupServer(
  rest.post(
    'https://segware-book-api.segware.io/api/sign-up',
    (req, res, ctx) => {
      return bodyHaveRightKeys(req.body)
        ? res(ctx.status(200))
        : res(ctx.status(400))
    }
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

    const submitBtn = screen.getByTestId('submit-form');
    fireEvent.click(submitBtn);
    
    const successMsg = await screen.findByText('Successfully registred');

    expect(screen.getByText('Login', { selector: 'h1'}))
      .toBeInTheDocument();
    expect(successMsg).toBeInTheDocument();
  });

  it('show an error message when username has already been used',
  async () => {
    server.use(
      rest.post(
        'https://segware-book-api.segware.io/api/sign-up',
        (req, res, ctx) => res(
          ctx.status(500),
          ctx.json({
            name: 'SequelizeUniqueConstraintError'
          })
        )
      ));

    render(<Login />);
    const singUpBtn = screen.getByText('Sign up', { selector: 'button' });
    fireEvent.click(singUpBtn);

    const submitBtn = screen.getByTestId('submit-form');
    fireEvent.click(submitBtn);
    
    const errorMsg = await screen.findByText('Username has already been used.');

    expect(errorMsg).toBeInTheDocument();
  })
});

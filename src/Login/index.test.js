import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { server, rest, signUpURL } from '../serverTest'; 
import { getFieldsFillAndSubmit } from '../testHelpers';
import Login from '.';

const usernameAlreadyUsed = rest.post(signUpURL, (req, res, ctx) => res(
  ctx.status(500),
  ctx.json({
    name: 'SequelizeUniqueConstraintError'
  }),
));

describe('Login component', () => {
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

  it('has a button that switch between Login and Sign up', () => {
    render(<Login />);
    const switchButton = screen.getByTestId('switch-button');
    
    fireEvent.click(switchButton);
    expect(screen.getByText('Sign up', { selector: 'h1' }));
    
    fireEvent.click(switchButton);
    expect(screen.getByText('Login', { selector: 'h1' }));
  });
  describe('Sign up submit', () => {
    const goToSubmitForm = () => {
      const switchButton = screen.getByTestId('switch-button');
      fireEvent.click(switchButton);
    }
    
    it('back to login form and show success message on success', 
    async () => {
      render(<Login />);
      
      goToSubmitForm();
      getFieldsFillAndSubmit();
      
      const successMsg = await screen
        .findByText('Successfully registred');
  
      expect(screen.getByText('Login', { selector: 'h1'}))
        .toBeInTheDocument();
      expect(successMsg).toBeInTheDocument();
    });
  
    it('show an error message when username has already been used',
    async () => {
      server.use(usernameAlreadyUsed);
  
      render(<Login />);
      
      goToSubmitForm()
      getFieldsFillAndSubmit();
      
      const errorMsg = await screen
        .findByText('Username has already been used.');
  
      expect(errorMsg).toBeInTheDocument();
    })
  })
});

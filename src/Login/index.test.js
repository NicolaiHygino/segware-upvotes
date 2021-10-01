import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from '.';

describe('Login component', () => {
  beforeEach(() => {
    render(<Login />);
  })

  it('renders a Login text heading', () => {
    expect(screen.getByText('Login', { selector: 'h1' }))
      .toBeInTheDocument();
  });

  it('renders a form', () => {
    expect(screen.getByRole('form'))
      .toBeInTheDocument();
  });

  it('has a username input element', () => {
    expect(screen.getByLabelText('Username'))
      .toBeInTheDocument();
  });

  it('has a password input element', () => {
    expect(screen.getByLabelText('Password'))
      .toBeInTheDocument();
  });

  it('has a login button', () => {
    expect(screen.getByText('Login', { selector: 'button'}))
      .toBeInTheDocument();
  });

  it('has a sing-up button', () => {
    expect(screen.getByText('Sing up', { selector: 'button' }))
      .toBeInTheDocument();
  })

  it('clicks in sing-up button and switch to sing-up form', async () => {
    const singUpBtn = screen.getByText('Sing up', { selector: 'button' });
    
    await fireEvent.click(singUpBtn);
    
    expect(screen.getByText('Sing up', { selector: 'h1' }));
  });

  it('login the user when he create an account')
});

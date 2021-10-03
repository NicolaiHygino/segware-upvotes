import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import {
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

const signInURL = 'https://segware-book-api.segware.io/api/sign-in';
const signUpURL = 'https://segware-book-api.segware.io/api/sign-up';

const signIn = rest.post(signInURL, (req, res, ctx) => res(
    ctx.status(200),
    ctx.json({ token: '123' }),
));

const signUp = rest.post(signUpURL, (req, res, ctx) => res(
  ctx.status(200),
));

const handlers = [signUp, signIn];

const server = setupServer(...handlers);

describe('App component', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  
  it('redirect to feed page when signs in successfully', async () => {
    render(<App />);

    const username = screen.getByLabelText('Username');
    const password = screen.getByLabelText('Password');
    const submitBtn = screen.getByTestId('submit-form');
    
    fireEvent.change(username, { target: {value: 'nicolai'}})
    fireEvent.change(password, { target: {value: '123'}})
    fireEvent.click(submitBtn);

    const feedText = await screen.findByText('Feed');
    expect(feedText).toBeInTheDocument();
  });
});
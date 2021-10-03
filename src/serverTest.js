import { rest } from 'msw';
import { setupServer } from 'msw/node';

export const signInURL = 'https://segware-book-api.segware.io/api/sign-in';
export const signUpURL = 'https://segware-book-api.segware.io/api/sign-up';

const signIn = rest.post(signInURL, (req, res, ctx) => res(
    ctx.status(200),
    ctx.json({ token: '123' }),
));

const signUp = rest.post(signUpURL, (req, res, ctx) => res(
  ctx.status(200),
));

const server = setupServer(signIn, signUp);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

export { server, rest };

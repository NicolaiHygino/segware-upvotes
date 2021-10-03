import { fireEvent, screen } from '@testing-library/react';

export const getFieldsFillAndSubmit = () => {
  const username = screen.getByLabelText('Username');
  const password = screen.getByLabelText('Password');
  const submitBtn = screen.getByTestId('submit-form');
  
  fireEvent.change(username, { target: {value: 'nicolai'}})
  fireEvent.change(password, { target: {value: '123'}})
  fireEvent.click(submitBtn);
};

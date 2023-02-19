import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';


test('renders learn react link', () => {
  render(<App />);
  const titleText = screen.getByText(/Create product/i);
  expect(titleText).toBeInTheDocument();
});


test('should find value in text field when click button', () => {
  const { getByText, getByLabelText } = render(<App />)
  const button = getByText('Submit')
  const inputName = screen.getByLabelText('Name')
  const inputPrice = screen.getByLabelText('Price')
  const inputAmount = screen.getByLabelText('Amount')
  const inputDescription = screen.getByLabelText('Description')

  fireEvent.click(button)
  expect(inputName).toBeInTheDocument()


});



// test('renders learn react link', () => {
//   render(<App />);
//   const titleText = screen.getByText(i);
//   expect(titleText).toBeInTheDocument();
// });
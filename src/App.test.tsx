import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';


test('renders Create product', () => {
  render(<App />);
  const titleText = screen.getByText(/Create product/i);
  expect(titleText).toBeInTheDocument();
});

test('should find all text fields in browser', () => {
  render(<App />);
  //มี nameInput ?
  const nameInput = screen.getByLabelText('Name');
  expect(nameInput).toBeInTheDocument();
  //มี priceInput ?
  const priceInput = screen.getByLabelText('Price');
  expect(priceInput).toBeInTheDocument();
  //มี AmountInput ?
  const AmountInput = screen.getByLabelText('Amount');
  expect(AmountInput).toBeInTheDocument();
  //มี selectInput ?
  const selectInput = screen.getByLabelText('Select');
  expect(selectInput).toBeInTheDocument();

});


test('should find value in text field when click button', () => {
  const { getByText, getByLabelText } = render(<App />)
  const button = getByText('Submit')
  const inputName = screen.getByLabelText('Name')
  fireEvent.click(button)
  expect(inputName).toBeChecked()
});



// test('renders learn react link', () => {
//   render(<App />);
//   const titleText = screen.getByText(i);
//   expect(titleText).toBeInTheDocument();
// });

test('dropdown',() =>{
  
})
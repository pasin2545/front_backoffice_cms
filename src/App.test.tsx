import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { MuiTextField } from './components/MuiTextField';


test('renders Create product', () => {
  render(<App />);
  const titleText = screen.getByText(/Create product/i);
  expect(titleText).toBeInTheDocument();
});

test('should have text in textfields', () => {
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

test('should have choose file button', () => {
  render(<App />);
  const ChooseFileButton = screen.getByLabelText('Choose File');
  expect(ChooseFileButton).toBeInTheDocument();
});

describe('should find value in text field when click button', () => {
  const { getByText, getByPlaceholderText } = render(<App />)
  const button = getByText('Submit')
  test('in NameInput', () => { 
    const inputName = screen.getByText('Name')
    fireEvent.click(button)
    expect(inputName).toHaveValue()
  })

  test('in PriceInput', () => { 
    const inputPrice = screen.getByText('Price')
    fireEvent.click(button)
    expect(inputPrice).toHaveValue()
  })
  
  test('in PriceInput', () => { 
    const inputPrice = screen.getByText('Price')
    fireEvent.click(button)
    expect(inputPrice).toHaveValue()
  })

  
  
  const inputAmount = screen.getByText('Amount')
  const inputDescription = screen.getByText('Description')
  
  
  expect(inputAmount).toHaveValue()
  expect(inputDescription).toHaveValue()
});

test('should update catagory product on selecting a value from drop down', () => {
  const { getAllByText } = render(<App />);
  const Selectbar = getAllByText('Select')
});

test('should return bad respond when empty in text field', () => {
  const { getByText, queryAllByText } = render(<App />);
  const button = getByText('Submit')
  fireEvent.click(button)
  const errorN = screen.getByText(/Require/i);
  expect(errorN).toBeInTheDocument();
  
});

test('should return bad respond when number in NameInput', () => {
  const { getByText, queryAllByText } = render(<App />);
  const button = getByText('Submit')
  fireEvent.click(button)
  const errorN = screen.getByText(/Error/i);
  expect(errorN).toBeInTheDocument();

});


// test('should update catagory product on selecting a value from drop down', () => {
//   const { getAllByText } = render(<MuiTextField />);
//   const Selectbar = getAllByText('Select')

// });

// test('renders learn react link', () => {
//   render(<App />);
//   const titleText = screen.getByText(i);
//   expect(titleText).toBeInTheDocument();
// });

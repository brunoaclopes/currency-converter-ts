import React from 'react'
import { screen } from '@testing-library/react'
import App from './app'
import { renderWrapper } from './test'

test('renders Header, CurrencyConverter, and Footer components', () => {
  renderWrapper(<App />)

  // Check if Header is rendered
  const headerElement = screen.getByRole('banner')
  expect(headerElement).toBeInTheDocument()

  // Check if CurrencyConverter is rendered
  const currencyConverterElement = screen.getByRole('main')
  expect(currencyConverterElement).toBeInTheDocument()

  // Check if Footer is rendered
  const footerElement = screen.getByRole('contentinfo')
  expect(footerElement).toBeInTheDocument()
})

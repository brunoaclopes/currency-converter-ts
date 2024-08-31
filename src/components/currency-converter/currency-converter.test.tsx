import React from 'react'
import { screen, fireEvent } from '@testing-library/react'
import CurrencyConverter from './currency-converter'
import { renderWrapper } from '../../test'

const renderCurrencyConverter = () => renderWrapper(<CurrencyConverter />)

test('renders CurrencyConverter component with title and subtitle', () => {
  renderCurrencyConverter()
  const title = screen.getByText(/Currency Converter/i)
  const subtitle = screen.getByText(
    /Receive competitive and transparent pricing with no hidden spreads. See how we compare./i,
  )
  expect(title).toBeInTheDocument()
  expect(subtitle).toBeInTheDocument()
})

test('displays placeholder text when no amount is entered', () => {
  renderCurrencyConverter()
  const placeholderText = screen.getByPlaceholderText(/0.00/i)
  expect(placeholderText).toBeInTheDocument()
})

test('updates amount input field correctly', () => {
  renderCurrencyConverter()
  const inputField = screen.getByTestId('amount-input')
  fireEvent.change(inputField, { target: { value: '100' } })
  expect(inputField).toHaveValue('100')
})

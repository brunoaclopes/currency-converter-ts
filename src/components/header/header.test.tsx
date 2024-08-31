import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Header from './header'

test('renders Header component with navigation links', () => {
  render(<Header />)
  const navLinks = screen.getAllByRole('link')
  expect(navLinks).toHaveLength(3)
  expect(navLinks[0]).toHaveTextContent('Personal')
  expect(navLinks[1]).toHaveTextContent('Business')
  expect(navLinks[2]).toHaveTextContent('Partners')
})

test('renders logo with correct alt text', () => {
  render(<Header />)
  const logo = screen.getByAltText('Uphold Logo')
  expect(logo).toBeInTheDocument()
})

test('renders and clicks Log In button', () => {
  render(<Header />)
  const loginButton = screen.getByRole('button', { name: /log in/i })
  expect(loginButton).toBeInTheDocument()
  userEvent.click(loginButton)
})

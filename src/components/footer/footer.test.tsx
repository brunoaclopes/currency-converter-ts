import React from 'react'
import { render, screen } from '@testing-library/react'
import Footer from './footer'

test('renders Footer component with footer links', () => {
  render(<Footer />)
  const footerLinks = screen.getAllByRole('listitem')
  expect(footerLinks).toHaveLength(16)
})

test('renders copyright text', () => {
  render(<Footer />)
  const copyrightText = screen.getByText(/© Uphold, Inc. 2018./i)
  expect(copyrightText).toBeInTheDocument()
})

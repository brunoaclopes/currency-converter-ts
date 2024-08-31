import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import { render } from '@testing-library/react'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      retry: false,
    },
  },
})

// eslint-disable-next-line import/prefer-default-export
export const renderWrapper = (component: React.ReactNode) =>
  render(
    <QueryClientProvider client={queryClient}>{component}</QueryClientProvider>,
  )

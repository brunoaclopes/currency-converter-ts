/* eslint-disable import/prefer-default-export */
import SDK, { Ticker } from '@uphold/uphold-sdk-javascript'
import { useQuery } from '@tanstack/react-query'
import { Currencies } from '../constants'

/* eslint-disable node/no-process-env, @typescript-eslint/naming-convention */
const sdk = new SDK({
  baseUrl: `https://corsproxy.io/?${process.env.REACT_APP_BASE_URL || ''}`, // corsproxy.io is used to bypass CORS restrictions
  clientId: process.env.REACT_APP_CLIENT_ID || '',
  clientSecret: process.env.REACT_APP_CLIENT_SECRET || '',
})
/* eslint-enable node/no-process-env, @typescript-eslint/naming-convention */

const getTicker = async (currency: string): Promise<Ticker[]> =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ((await sdk.getTicker(currency)) as any).filter(
    (ticker: Ticker) =>
      ticker.currency !== currency &&
      Currencies.some((c) => c === ticker.currency),
  )

export const useTicker = (currency: string) => {
  const queryKey = ['ticker', currency]

  return {
    queryKey,
    ...useQuery({ queryKey, queryFn: () => getTicker(currency) }),
  }
}

import { useCallback } from 'react'
import { CurrencyIcon } from '../currency-icon'
import styles from './currency-line.module.css'

export interface CurrencyLineProps {
  currency: string
  value: number
}

export const CurrencyLine = ({ currency, value }: CurrencyLineProps) => {
  const formatCurrency = useCallback((number: number) => {
    if (Number.isNaN(number)) return ''
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 6,
    })
      .format(number)
      .replace('$', '')
  }, [])

  return (
    <div className={styles.container}>
      <span>{formatCurrency(value)}</span>
      <CurrencyIcon currency={currency} />
    </div>
  )
}

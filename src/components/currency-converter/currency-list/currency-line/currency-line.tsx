import { useCallback } from 'react'
import { CurrencyIcon } from '../../currency-icon'
import styles from './currency-line.module.css'

export interface CurrencyLineProps {
  currency: string
  value: number
}

export const CurrencyLine = ({ currency, value }: CurrencyLineProps) => {
  const formatCurrency = useCallback((number: number) => {
    if (Number.isNaN(number)) return ''
    const numberFixed = parseFloat(
      number < 1 ? number.toFixed(6) : number.toFixed(2),
    )
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 6,
    })
      .format(numberFixed)
      .replace('$', '')
  }, [])

  return (
    <div className={styles.container}>
      <span className={styles.value}>{formatCurrency(value)}</span>
      <div className={styles.containerRight}>
        <CurrencyIcon currency={currency} className={styles.currencyIcon} />
        <span className={styles.currencyCode}>{currency}</span>
      </div>
    </div>
  )
}

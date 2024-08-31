import React, { useMemo, useState } from 'react'
import styles from './currency-converter.module.css'
import { CurrencyInput, CurrencyInputProps } from './currency-input'
import { useTicker } from '../../api'
import { CurrencyList, CurrencyListProps } from './currency-list'

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('')
  const [currency, setCurrency] = useState('USD')
  const { data, isLoading, isError } = useTicker(currency)

  const amountNumber = useMemo(() => parseFloat(amount), [amount])

  const values: CurrencyListProps['values'] = useMemo(
    () =>
      data?.map((ticker) => ({
        currency: ticker.currency,
        value: parseFloat(ticker.ask) * amountNumber,
      })) || [],
    [data, amountNumber],
  )

  const handleAmountChange = (value: string) => {
    setAmount(value)
  }

  const handleCurrencyChange = (value: string) => {
    setCurrency(value)
  }

  const currencyInputProps: CurrencyInputProps = {
    amount,
    onAmountChange: handleAmountChange,
    currency,
    onCurrencyChange: handleCurrencyChange,
  }

  const currencyListProps: CurrencyListProps = {
    values,
    isLoading,
  }

  return (
    <div className={styles.converter}>
      <h1 className={styles.title}>Currency Converter</h1>
      <p className={styles.subtitle}>
        Receive competitive and transparent pricing with no hidden spreads. See
        how we compare.
      </p>
      <CurrencyInput {...currencyInputProps} />
      {!amount || amountNumber === 0 || isError ? (
        <p className={styles.placeholderText}>
          {isError
            ? "We're having trouble with the chosen currency. Please choose a different one."
            : 'Enter an amount to check the rates.'}
        </p>
      ) : (
        <CurrencyList {...currencyListProps} />
      )}
    </div>
  )
}

export default CurrencyConverter

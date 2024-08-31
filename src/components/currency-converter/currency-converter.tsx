import React, { useMemo, useState } from 'react'
import styles from './currency-converter.module.css'
import { CurrencyInput, CurrencyInputProps } from './currency-input'
import { useTicker } from '../../api/uphold'
import { CurrencyLine, CurrencyLineProps } from './currency-line'

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('1000')
  const [currency, setCurrency] = useState('USD')
  const { data } = useTicker(currency)

  const values: CurrencyLineProps[] = useMemo(
    () =>
      data?.map((ticker) => ({
        currency: ticker.currency,
        value: parseFloat(ticker.ask) * parseFloat(amount),
      })) || [],
    [data, amount],
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

  return (
    <div className={styles.converter}>
      <h1 className={styles.title}>Currency Converter</h1>
      <p className={styles.subtitle}>
        Receive competitive and transparent pricing with no hidden spreads. See
        how we compare.
      </p>
      <CurrencyInput {...currencyInputProps} />
      {!amount || parseFloat(amount) === 0 ? (
        <p className={styles.placeholderText}>
          Enter an amount to check the rates.
        </p>
      ) : (
        values?.map((value) => <CurrencyLine key={value.currency} {...value} />)
      )}
    </div>
  )
}

export default CurrencyConverter

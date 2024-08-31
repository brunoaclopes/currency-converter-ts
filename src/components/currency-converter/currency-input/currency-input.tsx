import React, { useState } from 'react'
import classNames from 'classnames'
import styles from './currency-input.module.css'
import { dropdownIcon } from '../../../assets'
import { Currencies } from '../../../constants'
import { CurrencyIcon } from '../currency-icon'

export interface CurrencyInputProps {
  amount: string
  onAmountChange: (amount: string) => void
  currency: string
  onCurrencyChange: (currency: string) => void
}

export const CurrencyInput = ({
  amount,
  onAmountChange,
  currency,
  onCurrencyChange,
}: CurrencyInputProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleCurrencyChange = (value: string) => {
    onCurrencyChange(value)
    setIsDropdownOpen(false)
  }

  // function formatCurrency(value: string) {
  //   const number = parseFloat(value.replace(/,/g, ''))
  //   if (Number.isNaN(number)) return ''
  //   return new Intl.NumberFormat('en-US', {
  //     style: 'currency',
  //     currency: 'USD',
  //     minimumFractionDigits: 2,
  //   })
  //     .format(number)
  //     .replace('$', '')
  // }

  const handleAmountChange = (value: string) => {
    // eslint-disable-next-line no-console
    // console.log(formatCurrency(value))
    // onAmountChange(formatCurrency(value))
    onAmountChange(value)
  }

  return (
    <div className={styles.inputContainer}>
      <input
        type='text'
        data-type='currency'
        value={amount}
        onChange={(e) => handleAmountChange(e.target.value)}
        placeholder='0.00'
        className={styles.amountInput}
      />
      <div
        className={styles.currencySelector}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <CurrencyIcon currency={currency} className={styles.currencyIcon} />
        <span className={styles.currencyCode}>{currency}</span>
        <img
          src={dropdownIcon}
          alt='Dropdown CurrencyIcon'
          className={classNames(styles.dropdownIcon, {
            [styles.dropdownIconOpen]: isDropdownOpen,
          })}
        />
        {isDropdownOpen && (
          <div
            className={styles.dropdownMenu}
            onBlur={() => setIsDropdownOpen(false)}
          >
            {Currencies.map((item) => (
              <div
                key={item}
                className={styles.dropdownItem}
                onClick={() => handleCurrencyChange(item)}
              >
                <CurrencyIcon currency={item} className={styles.currencyIcon} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

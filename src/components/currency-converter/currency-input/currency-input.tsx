import React, { useState, useCallback } from 'react'
import classNames from 'classnames'
import { debounce } from 'lodash'
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
  const [amountState, setAmountState] = useState(amount)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleCurrencyChange = (value: string) => {
    onCurrencyChange(value)
    setIsDropdownOpen(false)
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedAmountChange = useCallback(
    debounce((value: string) => {
      onAmountChange(value)
    }, 300),
    [],
  )

  const handleAmountChange = (value: string) => {
    setAmountState(value)
    debouncedAmountChange(value)
  }

  return (
    <div className={styles.inputContainer}>
      <input
        type='text'
        data-type='currency'
        value={amountState}
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

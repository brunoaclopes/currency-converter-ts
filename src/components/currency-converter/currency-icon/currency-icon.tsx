import classNames from 'classnames'
import { currencyImages } from '../../../assets'

export interface CurrencyIconProps {
  currency: string
  className?: string
}

export const CurrencyIcon = ({ currency, className }: CurrencyIconProps) => {
  const images = currencyImages[currency as keyof typeof currencyImages]

  return (
    <img
      src={images.default}
      srcSet={`${images['2x']} 2x, ${images['3x']} 3x`}
      alt={currency}
      className={classNames(className)}
    />
  )
}

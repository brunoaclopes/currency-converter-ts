import { SyncLoader } from 'react-spinners'
import { CurrencyLine, CurrencyLineProps } from './currency-line'
import styles from './currency-list.module.css'

export interface CurrencyListProps {
  values: CurrencyLineProps[]
  isLoading?: boolean
}

export const CurrencyList = ({
  values,
  isLoading = false,
}: CurrencyListProps) =>
  isLoading ? (
    <div className={styles.loading}>
      <SyncLoader color={'#49cc68'} />
      <span>Loading...</span>
    </div>
  ) : (
    <div className={styles.currencyList}>
      {values?.map((value) => <CurrencyLine key={value.currency} {...value} />)}
    </div>
  )

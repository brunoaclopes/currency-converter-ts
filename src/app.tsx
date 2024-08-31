import React from 'react'
import styles from './app.module.css'
import { CurrencyConverter, Footer, Header } from './components'

const App = () => (
  <div className={styles.app}>
    <Header />
    <main className={styles.mainContent}>
      <CurrencyConverter />
    </main>
    <Footer />
  </div>
)

export default App

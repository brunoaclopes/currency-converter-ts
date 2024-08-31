/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styles from './header.module.css'
import { logo } from '../../assets'

const Header = () => (
  <header className={styles.header}>
    <div className={styles.navbar}>
      <nav className={styles.navLinks}>
        <a href='/' className={styles.navLink}>
          Personal
        </a>
        <a href='/' className={styles.navLink}>
          Business
        </a>
        <a href='/' className={styles.navLink}>
          Partners
        </a>
      </nav>
      <img src={logo} alt='Uphold Logo' className={styles.logo} />
      <button className={styles.loginButton}>Log In</button>
    </div>
  </header>
)
/* eslint-enable jsx-a11y/anchor-is-valid */

export default Header

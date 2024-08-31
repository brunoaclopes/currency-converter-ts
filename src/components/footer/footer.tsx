import React from 'react'
import { appstore, playstore, qrCode, smallLogo } from '../../assets'
import styles from './footer.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.topSection}>
      <div className={styles.logo}>
        <img src={smallLogo} alt='Uphold Logo' />
      </div>
      <div className={styles.links}>
        <div>
          <h4>Products</h4>
          <ul>
            <li>Consumers</li>
            <li>Business</li>
            <li>Partners</li>
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h4>Help</h4>
          <ul>
            <li>FAQ & Support</li>
            <li>Platform Status</li>
            <li>Criptionary</li>
            <li>Pricing</li>
            <li>Legal</li>
          </ul>
        </div>
        <div>
          <h4>Social</h4>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>
      <div className={styles.appLinks}>
        <img src={appstore} alt='App Store' />
        <img src={playstore} alt='Play Store' />
      </div>
    </div>
    <div className={styles.bottomSection}>
      <div className={styles.bottomText}>
        <p>
          Uphold Europe Limited, Reg No. 09281410, Registered Office:
          Interchange Triangle, Chalk Farm Road, London, England, NW1 8AB
        </p>
        <p>
          © Uphold, Inc. 2018. All Rights Reserved. Agreements Privacy & Data
          Policy Cookie Policy
        </p>
      </div>
      <img src={qrCode} alt='QR Code' className={styles.qrCode} />
    </div>
  </footer>
)

export default Footer

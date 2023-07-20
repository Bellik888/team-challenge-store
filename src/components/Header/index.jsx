import React from 'react'

import styles from './header.module.css'
import SearchComponent from '../SearchComponent'

const Header = () => {
	return (
		<header className={styles.header}>
			<div className='container'>
				<div className={styles.headerInner}>
					<div className={styles.headerLogo}>
						<div className={styles.headerLogoImg}>
							<img src='./assets/img/logo.svg' alt='logo' />
						</div>
						<div className={styles.headerLogoText}>Magic of Worlds</div>
					</div>
					<div>
						<SearchComponent />
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header

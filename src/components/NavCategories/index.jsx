import React from 'react'
import styles from './navCategories.module.css'

const NavCategories = () => {
	return (
		<nav className={styles.navCategories}>
			<ul className={styles.navCategoriesList}>
				<a href='#' className={styles.navCategoriesItemActive}>
					<li>All</li>
				</a>
				<a href='#' className={styles.navCategoriesItem}>
					<li>Category</li>
				</a>
				<a href='#' className={styles.navCategoriesItem}>
					<li>Fiction</li>
				</a>
				<a href='#' className={styles.navCategoriesItem}>
					<li>Education</li>
				</a>
				<a href='#' className={styles.navCategoriesItem}>
					<li>Nature</li>
				</a>
				<a href='#' className={styles.navCategoriesItem}>
					<li>Myths</li>
				</a>
				<a href='#' className={styles.navCategoriesItem}>
					<li>Activities</li>
				</a>
				<a href='#' className={styles.navCategoriesItem}>
					<li>Comics</li>
				</a>
			</ul>
		</nav>
	)
}

export default NavCategories

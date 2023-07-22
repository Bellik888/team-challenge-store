import React from 'react'
import Sidebar from '../../components/Sidebar'
import styles from './home.module.css'
import { books } from '../../mockData/booksList'
import BooksList from '../../components/BooksList'

const Home = () => {
	return (
		<>
			<div className={styles.mainPage}>
				<Sidebar />
				<BooksList books={books} />
			</div>
		</>
	)
}

export default Home

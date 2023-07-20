import React from 'react'

import styles from './search.module.css'

const SearchComponent = () => {
	return (
		<div>
			<form onSubmit={() => {}}>
				<input type='text' className={styles.searchComponent} placeholder='Enter tittle' required />
			</form>
		</div>
	)
}

export default SearchComponent

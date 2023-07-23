import React from 'react'
import styles from './introslider.module.css'

const IntroSlider = () => {
	return (
		<section className={styles.introSlider}>
			<div className='container'>
				<div className={styles.introSliderInner}>
					<div className='introSliderInnerText'></div>
					<div className='intoSliderInnerImg'></div>
				</div>
			</div>
		</section>
	)
}

export default IntroSlider

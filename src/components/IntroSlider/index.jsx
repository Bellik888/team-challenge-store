import React from 'react'
import styles from './introslider.module.css'

const IntroSlider = () => {
	return (
		<section className={styles.introSlider}>
			<div className='container'>
				<div className={styles.introSliderInner}>
					<div className={styles.introSliderInnerText}>
						<h3 className={styles.introSliderTitle}>Books for family reading </h3>
						<p className={styles.introSliderSubTitle}>Plunge into the world of fantasy with your child</p>
					</div>
					<div className={styles.intoSliderInnerImg}></div>
				</div>
			</div>
		</section>
	)
}

export default IntroSlider

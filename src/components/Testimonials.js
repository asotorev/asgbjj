import React from 'react';
import styles from './styles/Testimonials.module.css';

const testimonials = (props) => (
    <section>
        <h2 className={styles.sectionTitle}>What others are saying</h2>
        <div className={styles.testimonials}>   
            <img src="assets/arrow.svg" alt="Check Circle Icon" className={styles.checkIcon}/> 
            <div className={[styles.testimonial, styles.style1].join(' ')} >
                <p>Becoming a member of ASBJJ has been one of the best things I have done to develop and progressing my training. There is so much knowledge on ASBJJ, and that goes beyond just techniques; I have found the concepts and mindset videos have helped …</p>
                <div className={styles.avatarCont}>
                    <img src="assets/people1.png" alt="Jose Soto" className={styles.avatar}/> 
                    <p>Jose Soto</p>            
                </div>  
            </div>
            <div className={[styles.testimonial, styles.style1].join(' ')}>
                <p>Super awesome website i always highly recommend it to everyone, it’s worth every penny, I’ve seen a lot of other websites out there but none compares to this one its content is super huge and constantly growing, what I think sets it apart from all …	</p>
                <div className={styles.avatarCont}>
                        <img src="assets/people2.png" alt="Jose Soto" className={styles.avatar}/> 
                        <p>ASG</p>            
                    </div>  
                </div>
            <div className={[styles.testimonial, styles.style1].join(' ')}>
                <p>Truly one of the best Online training programs available to Brazilian Jiu Jitsu enthusiasts and grapplers in general. The comprehensive program is easy to use and understand. The amazing instructions and break down of technique is impressive ...</p>
                <div className={styles.avatarCont}>
                        <img src="assets/people3.png" alt="Jose Soto" className={styles.avatar}/> 
                        <p>A. Serrano</p>            
                    </div>  
                </div>
            <img src="assets/arrow.svg" alt="Check Circle Icon" className={[styles.checkIcon, styles.rotate180].join(' ')}/>
        </div>
    </section>
);

export default testimonials;
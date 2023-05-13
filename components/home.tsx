import React from 'react';
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { Chewy } from 'next/font/google'

const chewy = Chewy({ weight:"400", subsets: ['latin'] })

const FirstSection = () => {
    return (
      <div>
        <div className={styles.home_first_section}>
          <div className={styles.first_section_description}>
            <h2 className={chewy.className}>So you think you know dogs?</h2>
            <button className={chewy.className}>Take the Quiz</button>
          </div>
          <Image
            src="/Targle_front.png"
            width="0"
            height="0"
            style={{width:"250px", height:"auto"}}
            alt="photo of a very cute jindo dog with his tongue out"
          />
        </div>
      </div>
    );
};

export default FirstSection;
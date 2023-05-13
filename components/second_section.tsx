import React from 'react';
import Image from 'next/image'
import Styles from '../styles/Home.module.css'
import { Delicious_Handrawn, Poppins } from 'next/font/google'

// font name with a space in between uses snakecase!

const delicious = Delicious_Handrawn({weight:"400", subsets:["latin"]})
const poppins = Poppins({weight:"300", subsets:['latin']})

const Second_section = () => {
    return (
      <div className={Styles.home_second_section}>
        <div className={Styles.second_section_bgwrapper}>
          <div className={Styles.home_second_section_text}>
            <p className={poppins.className}>
              <b>
                &quot;Everybody should have a shelter dog. It&lsquo;s good for the soul.&quot;
              </b>
            </p>
            <p className={poppins.className}>
              <b>
                – Paul Shaffer, Canadian musician, composer, actor, author, and
                comedian
              </b>
            </p>
          </div>
        </div>
        <div className={Styles.home_second_section_content}>
          <div className={Styles.benji_profile}>
            <p className={delicious.className}>Benji, mixed-breed</p>
            <p className={delicious.className}>Found furever family in 2020</p>
            <p className={delicious.className}>Has 2 cat siblings</p>
          </div>
          <Image
            className="benji_photo"
            src="/benji.png"
            width="0"
            height="0"
            style={{width:"500px", height: "auto"}}
            alt="small mixed breed dog with ball in his mouth"
          />
        </div>
      </div>
    );
};

export default Second_section;
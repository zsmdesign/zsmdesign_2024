import React from "react";
import styles from "./AboutMe.module.scss";
import Image from 'next/image'
import DotDivider from "../../common/DotDivider/DotDivider";

export default function AboutMe () {
   return (
      <div id="aboutme" className={styles.aboutMe}>
          <div className={styles.imageContainer}>
            <Image
               src={`/images/aboutme-portre.png`}
               alt="Illustration about the author"
               title="Me and my dog"
               fill
               objectFit="contain"
               objectPosition="right"
               loading="lazy"
            />
         </div>

         <div className={styles.textContainer}>
            <h2 className={styles.header}>About Me</h2>
            <p>I battle and conquer the many dragons that live inside code and servers. I craft online marvels that seamlessly blend art, tech, and experience for a beautiful and functional digital realm.</p>
            <p className={styles.quote}>"The magic that you are looking for is in the work you are avoiding."</p>

            <div className={styles.ctaContainer}>
               <div>
                  <a className={styles.link} href="https://www.linkedin.com/in/miklos-zsamba/" target="_blank"><DotDivider color="#B45893" size={8} marginRight={8}/> LINKEDIN</a>
                  <a className={styles.link} href="/files/Miklos-Zsamba-CV.pdf" target="_blank"><DotDivider color="#B45893" size={8} marginRight={8}/> CV</a>
               </div>

               <div className={styles.signature}>
                  <Image
                     src={`/images/zsm-signature.svg`}
                     alt="Illustration about the author"
                     title="Me and my dog"
                     fill
                     objectFit="contain"
                     objectPosition="right"
                     loading="lazy"
                  />
               </div>
            </div>

         </div>
      </div>
   );
}
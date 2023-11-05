import React from "react";
import styles from "./Banner.module.scss";

export default function Banner () {
   const handleCta = () => {
      document.getElementById('aboutme')?.scrollIntoView({ behavior: 'smooth' });
   }

   return (
      <div className={styles.banner}>
         <div className={styles.bannerContentContainer}>
            <div className={styles.spacing}>
               <img
                  className={styles.mainLogo}
                  loading="lazy"
                  src="/images/zsm-logo.svg"
                  title="zsmdesign logo"
                  alt="ZsMDesign Logo"
               />

               <h1 className={styles.title}>
                  I combine technology, art, and experience to create things for the Internet, making them look nice and work well.
               </h1>
               <button className={styles.cta} onClick={() => handleCta()}>contact me</button>
            </div>
         </div>

         <video className={styles.heroVideo} poster="/images/banner-video-poster.jpg" loop muted autoPlay playsInline>
            <source src={"/videos/zsmdesign-banner.mp4"} type="video/mp4"/>
         </video>
      </div>
   );
}
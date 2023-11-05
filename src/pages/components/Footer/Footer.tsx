import React from "react";
import styles from "./Footer.module.scss";
import Image from 'next/image'

export default function Footer () {
   return (
      <div className={styles.footer}>
         <span>© 2024 ZSMDesign. All Rights Reserved.</span>
         <div className={styles.imageContainer}>
            <Image
               src={`/images/zsm-footer-layer.svg`}
               alt="footer background"
               title="Footer Background"
               fill
               objectFit="cover"
               objectPosition="center"
            />
         </div>
      </div>
   );
}
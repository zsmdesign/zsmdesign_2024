import React from "react";
import styles from "./MenuIcon.module.scss";

export interface MenuIconProps {
   setMenuOpened: any,
   menuOpened: boolean
}

export default function MenuIcon (props: MenuIconProps) {
   const { setMenuOpened, menuOpened } = props;
   
   const handleIconClick = (e: any) => {
      setMenuOpened(e?.checked);
   }

   return (
      <div className={styles.menuIcon}>
         <div className={styles.icon}>
            <input className={styles.checkbox} type="checkbox" checked={menuOpened} readOnly onClick={(e) => handleIconClick(e?.target)}/>
            <div>
               <span></span>
               <span></span>
            </div>
         </div>
      </div>
   );
}
import React, { useEffect, useState } from "react";
import styles from "./Menu.module.scss";
import Image from 'next/image';
import cn from 'classnames';
import MenuIcon from "../../common/MenuIcon/MenuIcon";

export default function Menu () {
   const [menuScrolled, setMenuScrolled] = useState<boolean>(false);
   const [menuOpened, setMenuOpened] = useState<boolean>(false);
   const [activeMenu, setActiveMenu] = useState<string | null>(null);
   const [menuTimeout, setMenuTimeout] = useState<NodeJS.Timeout | null>(null);

   useEffect(() => {
      window.addEventListener('scroll', handleScroll);
   }, []);

   const handleScroll = () => {
      const scrollY = window.scrollY;
      scrollY > 150 ? setMenuScrolled(true) : setMenuScrolled(false);
   }

   const clearMenuTimeout = () => {
      if (menuTimeout !== null) {
         clearTimeout(menuTimeout);
         setMenuTimeout(null);
      }
   };

   const handleMenuClick = (menu: string) => {
      clearMenuTimeout();
      setActiveMenu(menu);
      setMenuOpened(false);

      document.getElementById(menu)?.scrollIntoView({ behavior: 'smooth' });

      const timeoutId = setTimeout(() => {
         setActiveMenu(null);
      }, 4000);

      setMenuTimeout(timeoutId);
   };

   return (
      <>
         <div className={cn(styles.mobileCover, {[styles.opened]: !menuOpened})}>
            <MenuIcon setMenuOpened={setMenuOpened} menuOpened={menuOpened}/>
         </div>

         <div className={styles.menu}>
            <div className={styles.menuOptions}>
               <a className={cn({[styles.active]: activeMenu === "frontend"})} onClick={() => handleMenuClick('frontend')}><h3>Front End</h3></a>
               <a className={cn({[styles.active]: activeMenu === "videos"})} onClick={() => handleMenuClick('videos')}><h3>Videos</h3></a>
               <a className={cn({[styles.active]: activeMenu === "contact"})} onClick={() => handleMenuClick('aboutme')}><h3>Contact</h3></a>
            </div>
         </div>

         <div className={cn(styles.mobileMenuOptions, {[styles.active]: menuOpened})}>
            <a className={cn({[styles.active]: activeMenu === "frontend"})} onClick={() => handleMenuClick('frontend')}><h3>Front End</h3></a>
            <a className={cn({[styles.active]: activeMenu === "videos"})} onClick={() => handleMenuClick('videos')}><h3>Videos</h3></a>
            <a className={cn({[styles.active]: activeMenu === "contact"})} onClick={() => handleMenuClick('aboutme')}><h3>Contact</h3></a>
         </div>
            
         <div className={cn(styles.menuBody, {[styles.scrolled]: menuScrolled})}></div>
      </>
   );
}
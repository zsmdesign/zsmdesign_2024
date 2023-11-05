import React, { useEffect, useRef, useState } from "react";
import styles from "./FrontEnd.module.scss";
import cn from "classnames";
import Image from 'next/image'
import DotDivider from "../../common/DotDivider/DotDivider";
import Legend from "../../common/Legend/Legend";

export default function FrontEnd () {

   const targetRef = useRef<HTMLDivElement | null>(null);
   const [silentCardZoom, setSilentCardZoom] = useState(160);
   const [oracleCardZoom, setOracleCardZoom] = useState(160);
   const [aimotiveCardZoom, setAimotiveCardZoom] = useState(160);
   const [adrisCardZoom, setAdrisCardZoom] = useState(160);
   const [freshCardZoom, setFreshCardZoom] = useState(160);
   const [cardsLoaded, setCardsLoaded] = useState(false);
   const [currentCardId, setCurrentCardId] = useState(3);
   const [textColumnHeight, setTextColumnHeight] = useState(0);

   const contentArray = [
      {id: 1, title: 'Oracle Corporation', link: 'https://www.oracle.com/', pGraphOne: <p>During my tenure at Oracle Applications Labs, I collaborated closely with a globally dispersed, cross-functional team. Our primary focus centered on the maintenance and advancement of cloud-based enterprise applications, leveraging state-of-the-art technologies. I actively engaged in international planning initiatives, an endeavor that, regrettably, saw a shift due to the onset of the COVID-19 pandemic.</p>, pGraphTwo: <p>The diverse and substantial challenges I encountered during this period afforded me the opportunity to acquire a wealth of expertise, particularly in the realm of <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a> and <a href="https://www.oracle.com/webfolder/technetwork/jet/index.html" target="_blank">OracleJET</a>. These experiences have been instrumental in shaping my professional journey.</p>},
      {id: 2, title: 'aimotive', link: 'https://aimotive.com/', pGraphOne: <p>Over the course of my four-year tenure at AIMOTIVE, I have had the privilege of witnessing and contributing to the remarkable growth of the organization, which has expanded from a team of 16 to approximately 300 dedicated professionals. In parallel with the management aspects, our corporate and internal websites has undergone a substantial transformation to effectively align with the demands of this dynamic evolution. My role within this context has been multifaceted and intricately involved.</p>, pGraphTwo: <p>Not only have I been entrusted with the development and design of a substantial portion of our user interfaces, but I have also played a pivotal role in shaping the foundational elements of our brand's comprehensive visual identity.</p>},
      {id: 3, title: 'Silent Push', link: 'https://www.silentpush.com/', pGraphOne: <p>Being part of the U.S.-based startup, SilentPush, has been a genuine privilege, affording me the opportunity to interact with some of the most brilliant and experienced minds in the realms of cybersecurity and threat intelligence. The flagship software, which I have the honor of contributing to, diligently maps the entirety of the internet daily, proactively notifying users of any relevant alterations to their assets as well as any potential rogue threats. </p>, pGraphTwo: <p>By harnessing the combined prowess of <a href="https://react.dev/" target="_blank">React</a>, <a href="https://redux.js.org/" target="_blank">Redux</a>, and cutting-edge <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API" target="_blank">websocket technology</a>, we ensure that ever-evolving data is seamlessly delivered to the user. I take pride in having extensively revamped the user interface on SilentPush's flagship app, aligning it more closely with contemporary standards.</p>},
      {id: 4, title: `Adri's Kitchen`, link: 'https://adriskitchen.hu/', pGraphOne: <p>This project turned out quite a complex one. Meticulous and comprehensive planning emerged as a critical factor in optimizing time efficiency during subsequent development phases. The website boasts an array of features that may not be immediately apparent, including timed content delivery and a sweepstake module integrated with social media platforms.</p>, pGraphTwo: <p>In terms of aesthetics, In my opinion, it turned out exceptionally pleasing. Looking back at it, and by visiting the site I feel like cooking and trying some new recipes.</p>},
      {id: 5, title: 'Freshconstruct', link: 'https://freshconstruct.com/', pGraphOne: <p>This versatile agency boasts a team of seasoned professionals dedicated to a broad spectrum of tasks. We leverage the latest front-end technologies in the industry, including <a href="https://angular.io/" target="_blank">Angular</a>, <a href="https://nextjs.org/" target="_blank">Next.js</a>, and <a href="https://react.dev/" target="_blank">React</a>, making it essential for our team to be comprised of top-tier. This type of work requires the agility to handle rapidly shifting requirements.</p>, pGraphTwo: <p>I actively contributed to the development of a live event spectator aggregation software known as <a href="https://www.thatstheticket.com.au/" target="_blank">ThatsTheTicket</a>, which made its debut in Australia. This innovative tool excels in crowd organization, streamlining ticket distribution, and providing invaluable event statistics. Additionally, I had a chance to work with <a href="https://www.mcarthurglen.com/en/" target="_blank">McArthurGlen</a> on a different project, contributing to their continued success.</p>},
   ];


   useEffect(() => {
      const silentCard = document.getElementById('silentCard');
      const aimotiveCard = document.getElementById('aimotiveCard');
      const oracleCard = document.getElementById('oracleCard');
      const adrisCard = document.getElementById('adrisCard');
      const freshCard = document.getElementById('freshCard');

      silentCard?.addEventListener('mouseenter', () => {setSilentCardZoom(180);});
      silentCard?.addEventListener('mouseleave', () => {setSilentCardZoom(160);});
      aimotiveCard?.addEventListener('mouseenter', () => {setAimotiveCardZoom(180);});
      aimotiveCard?.addEventListener('mouseleave', () => {setAimotiveCardZoom(160);});
      oracleCard?.addEventListener('mouseenter', () => {setOracleCardZoom(180);});
      oracleCard?.addEventListener('mouseleave', () => {setOracleCardZoom(160);});
      adrisCard?.addEventListener('mouseenter', () => {setAdrisCardZoom(180);});
      adrisCard?.addEventListener('mouseleave', () => {setAdrisCardZoom(160);});
      freshCard?.addEventListener('mouseenter', () => {setFreshCardZoom(180);});
      freshCard?.addEventListener('mouseleave', () => {setFreshCardZoom(160);});
      window.addEventListener('resize', handleResize);

      setElementHeight(document.getElementsByClassName('target')?.[0]);

      const options = {
         root: null,
         rootMargin: '0px',
         threshold: 0.7, // Trigger when 70% of the element is visible
       };
       const observer = new IntersectionObserver(handleIntersection, options);
   
      if (targetRef.current) {
         observer.observe(targetRef.current);
      }

      return () => {
         if (targetRef.current) {
            observer.unobserve(targetRef.current);
            window.removeEventListener('resize', handleResize);
         }
      };
   }, []);

   useEffect(() => {
      setTimeout(() => {
         const e = document.getElementsByClassName('target')?.[0];
         setElementHeight(e);
      }, 100);
   }, [currentCardId]);

   const setElementHeight = (e: Element) => {
      if (e instanceof HTMLElement) {
         setTextColumnHeight(e?.offsetHeight);
      }
   };

   const handleResize = () => {
      const e = document.getElementsByClassName('target')?.[0];
      setElementHeight(e);
   };

   const handleIntersection = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
         if (entry.isIntersecting) {
            setCardsLoaded(true);
            observer.unobserve(entry.target);
         }
      });
   };

   const handleCardClick = (target: number) => {
      setCurrentCardId(target);
   };
   const handleArrowClick = (direction: string) => {
      if(direction === 'left') {
         if(currentCardId === 1) {
            setCurrentCardId(5);
         } else {
            setCurrentCardId(currentCardId - 1);
         }
      } else {
         if(currentCardId === 5) {
            setCurrentCardId(1);
         } else {
            setCurrentCardId(currentCardId + 1);
         }
      }
   };

   return (
      <div id="frontend" className={styles.frontEnd}>
         <h2 className={styles.header}>Front-End Development</h2>
         <div className={styles.subHeaderContainer}>
            <h3 className={styles.subHeader}>React</h3>
            <DotDivider marginLeft={8} marginRight={8} size={10}/>
            <h3 className={styles.subHeader}>Next.Js</h3>
            <DotDivider marginLeft={8} marginRight={8} size={10}/>
            <h3 className={styles.subHeader}>Angular</h3>
            <DotDivider marginLeft={8} marginRight={8} size={10}/>
            <h3 className={styles.subHeader}>Typescript/Javascript</h3>
            <DotDivider marginLeft={8} marginRight={8} size={10}/>
            <h3 className={styles.subHeader}>SCSS</h3>
            <DotDivider marginLeft={8} marginRight={8} size={10}/>
            <h3 className={styles.subHeader}>SASS</h3>
            <DotDivider marginLeft={8} marginRight={8} size={10}/>
            <h3 className={styles.subHeader}>Graphic Design</h3>
         </div>

         <div className={styles.sitesContainer} ref={targetRef}>
            <div className={styles.textColumn} style={{height: textColumnHeight > 0 ? textColumnHeight : 'auto'}}>
               <div className={styles.arrow} onClick={() => handleArrowClick('left')}>
                  <Image
                     src={`/images/arrow.svg`}
                     alt="navigation arrow"
                     title="Left Arrow"
                     fill
                     style={{
                        objectFit: 'contain'
                     }}
                  />
               </div>

               {contentArray.map((o) => {
                  return (
                     <div key={o.id} className={cn(styles.content, {[styles.reveal]: currentCardId === o.id}, {["target"]: currentCardId === o.id})}>
                        <div className={styles.imageContainer}>
                           
                           <Image
                              src={`/images/sites/site-${o.id}.png`}
                              alt={`${o.title} illustration`}
                              title={`${o.title} illustration`}
                              loading="lazy"
                              fill
                              style={{
                                 objectFit: 'contain'
                              }}
                           />
                        </div>
                        
                        <a className={styles.titleContainer} href={o.link} target="_blank">
                           <h2 className={styles.siteTitle}>{o.title}</h2>
                        </a>
                        {o.pGraphOne}
                        {o.pGraphTwo}
                     </div>
                  )
               })}

               <div className={cn(styles.arrow, styles.right)} onClick={() => handleArrowClick('right')}>
                  <Image
                     src={`/images/arrow.svg`}
                     alt="navigation arrow"
                     title="Left Arrow"
                     fill
                     style={{
                        objectFit: 'contain'
                     }}
                  />
               </div>
            </div>

            <Legend activeId={currentCardId} handleCardClick={handleCardClick}/>

            <div className={cn(styles.pictureColumn, {[styles.loaded]: cardsLoaded})}>
               <div className={styles.animator}>
                  <div id="oracleCard" className={styles.picture} onClick={() => handleCardClick(1)} style={{background: `url('/images/cards/${(oracleCardZoom === 180 || currentCardId === 1) ? 'oracle-color' : 'oracle-faded'}.jpg') center center / ${currentCardId === 1 ? 170 : oracleCardZoom}% no-repeat`}}></div>
               </div>
               <div className={styles.animator}>
                  <div id="aimotiveCard" className={styles.picture} onClick={() => handleCardClick(2)} style={{background: `url('/images/cards/${(aimotiveCardZoom === 180 || currentCardId === 2) ? 'aimotive-color' : 'aimotive-faded'}.jpg') center center / ${currentCardId === 2 ? 170 : aimotiveCardZoom}% no-repeat`}}></div>
               </div>
               <div className={styles.animator}>
                  <div id="silentCard" className={styles.picture} onClick={() => handleCardClick(3)} style={{background: `url('/images/cards/${(silentCardZoom === 180 || currentCardId === 3) ? 'silent-color' : 'silent-faded'}.jpg') center center / ${currentCardId === 3 ? 170 : silentCardZoom}% no-repeat`}}></div>
               </div>
               <div className={styles.animator}>
                  <div id="adrisCard" className={styles.picture} onClick={() => handleCardClick(4)} style={{background: `url('/images/cards/${(adrisCardZoom === 180 || currentCardId === 4) ? 'adris-color' : 'adris-faded'}.jpg') center center / ${currentCardId === 4 ? 170 : adrisCardZoom}% no-repeat`}}></div>
               </div>
               <div className={styles.animator}>
                  <div id="freshCard" className={styles.picture} onClick={() => handleCardClick(5)} style={{background: `url('/images/cards/${(freshCardZoom === 180 || currentCardId === 5) ? 'fresh-color' : 'fresh-faded'}.jpg') center center / ${currentCardId === 5 ? 170 : freshCardZoom}% no-repeat`}}></div>
               </div>
            </div>
         </div>
      </div>
   );
}
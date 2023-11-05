import React from "react";
import styles from "./Videos.module.scss";
import cn from "classnames";
import DotDivider from "../../common/DotDivider/DotDivider";
import VideoPlayer from "../../common/VideoPlayer/VideoPlayer";


export default function Videos () {
   const videos = [
      {sources: [{src: "/videos/streams/Uncharted-Territories.mp4", type: "video/mp4"}], poster: '/videos/streams/Uncharted-Territories.jpg'},
      {sources: [{src: "/videos/streams/StandUpN-Run.mp4", type: "video/mp4"}], poster: '/videos/streams/StandUpN-Run.jpg'},
      {sources: [{src: "/videos/streams/Zsmdesign-Opening.mp4", type: "video/mp4"}], poster: '/videos/streams/Zsmdesign-Opening.jpg'},
      {sources: [{src: "/videos/streams/Aimotive-Rain.mp4", type: "video/mp4"}], poster: '../videos/streams/Aimotive-Rain.jpg'},
      {sources: [{src: "/videos/streams/Aimotive-Ces.mp4", type: "video/mp4"}], poster: '/videos/streams/Aimotive-Ces.jpg'},
   ];


   return (
      <div id="videos"  className={styles.videos}>
         <div className={styles.separatorContainer}>
            <video className={styles.videoBackground} loop muted autoPlay playsInline>
               <source src={"/videos/zsmdesign-videos-bg.mp4"} type="video/mp4"/>
            </video>
         </div>

         <h2 className={styles.header}>Videos</h2>
         <div className={styles.subHeaderContainer}>
            <h3 className={styles.subHeader}>Brand Design & Promotion</h3>
            <DotDivider marginLeft={8} marginRight={8} size={10} color="#db7fcd"/>
            <h3 className={styles.subHeader}>Visual Effects</h3>
            <DotDivider marginLeft={8} marginRight={8} size={10} color="#db7fcd"/>
            <h3 className={styles.subHeader}>Color Grading</h3>
            <DotDivider marginLeft={8} marginRight={8} size={10} color="#db7fcd"/>
            <h3 className={styles.subHeader}>Film Production</h3>
            <DotDivider marginLeft={8} marginRight={8} size={10} color="#db7fcd"/>
            <h3 className={styles.subHeader}>Cam & Drone Technologies</h3>
         </div>
         <p className={styles.description}>Videos are the heartbeat of every business, igniting action and crafting lasting first impressions. What began as a passion soon emerged as a vital facet of my professional journey. In a rapidly expanding enterprise, curating compelling visuals through video shooting and editing, music selection, and dynamic style takes center stage.</p>

         <div className={styles.videosRow}>
            <div className={styles.videoContainer}>
               <h3 className={styles.lgDown}>Uncharted Territories</h3>
               <div className={styles.player}>
                  <VideoPlayer options={videos[0]} />
               </div>
               <div className={styles.text}>
                  <h3>Uncharted Territories</h3>
                  <p>This marks my most ambitious video to date. My trusty drone has ventured alongside me to countless destinations, and what you're about to see is a mere glimpse of our three-year journey. We encountered numerous challenging scenarios, and the moments shared here only scratch the surface of its incredible captures. Fortunately, it always managed to find its way back to my side.</p>
                  <a href="https://vimeo.com/833103566" target="_blank">Check out in 4K</a>
               </div>
            </div>
            <div className={styles.videoContainer}>
               <h3 className={styles.lgDown}>Gadgets</h3>
               <div className={styles.player}>
                  <VideoPlayer options={videos[1]} />
               </div>
               <div className={styles.text}>
                  <h3>StandUp'N Run</h3>
                  <p>I had the incredible opportunity to capture footage during an overnight agility competition and show event this past summer. With a super focused editing session managed to finish this one in a couple of hours. The canine participants truly stole the show with their incredible performances.</p>
               </div>
            </div>
            <div className={styles.videoContainer}>
               <h3 className={styles.lgDown}>Neon Lights</h3>
               <div className={styles.player}>
                  <VideoPlayer options={videos[2]} />
               </div>
               <div className={styles.text}>
                  <h3>Neon Lights</h3>
                  <p>When I got my hands on the new M1 Max MacBook Pro, I couldn't resist putting it to the test by creating a straightforward video. The addition of two Godox RGB LEDs added an interesting mood to the project. What amazed me even more was the lightning-fast rendering time, as I completed the entire editing process in just one hour.</p>
               </div>
            </div>
            <div className={styles.videoContainer}>
               <h3 className={styles.lgDown}>Improvise</h3>
               <div className={styles.player}>
                  <VideoPlayer options={videos[3]} />
               </div>
               <div className={styles.text}>
                  <h3>Improvise</h3>
                  <p>In certain scenarios, you find yourself needing to produce a video within a mere day, armed with minimal planning and limited gear. It's a "grab your duct tape and raincoat" moment, requiring quick thinking, ingenuity, and a dash of improvisation to bring your vision to life.</p>
               </div>
            </div>
            <div className={styles.videoContainer}>
               <h3 className={styles.lgDown}>Big Projects</h3>
               <div className={styles.player}>
                  <VideoPlayer options={videos[4]} />
               </div>
               <div className={styles.text}>
                  <h3>Big Projects</h3>
                  <p>Crafted in 2017 as a promotional video for our Las Vegas CES demos, this project offered me a unique opportunity. While I wasn't the one operating the camera, actively participating in the planning alongside our dedicated shooting team proved both fascinating and valuable. Exploring and mastering the wide array of gadgets we employed added an extra layer of intrigue to the experience.</p>
               </div>
            </div>
         </div>

         <div className={styles.multiGradient}>
            <div className={styles.gradient}></div>
         </div>

         <div className={cn(styles.bottomSeparator, styles.first)}></div>
         <div className={cn(styles.bottomSeparator, styles.second)}></div>
      </div>
   );
}
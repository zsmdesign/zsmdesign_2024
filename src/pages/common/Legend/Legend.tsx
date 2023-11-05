import React from 'react';
import cn from 'classnames';
import styles from "./Legend.module.scss";

export interface LegendProps {
   activeId: number,
   handleCardClick: any
}

export default function Legend (props: LegendProps) {
   const { activeId, handleCardClick } = props;

   const handleLegendClick = (target: number) => {
      handleCardClick(target);
   };

   return (
      <div className={styles.legend}>
         <div className={cn(styles.legendDot, {[styles.active]: activeId === 1})} onClick={() => handleLegendClick(1)}></div>
         <div className={cn(styles.legendDot, {[styles.active]: activeId === 2})} onClick={() => handleLegendClick(2)}></div>
         <div className={cn(styles.legendDot, {[styles.active]: activeId === 3})} onClick={() => handleLegendClick(3)}></div>
         <div className={cn(styles.legendDot, {[styles.active]: activeId === 4})} onClick={() => handleLegendClick(4)}></div>
         <div className={cn(styles.legendDot, {[styles.active]: activeId === 5})} onClick={() => handleLegendClick(5)}></div>
      </div>
   );
}
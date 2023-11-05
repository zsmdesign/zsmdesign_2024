import React from "react";
import styles from "./DotDivider.module.scss";

export interface DotDividerProps {
   size: number,
   marginLeft?: number,
   marginRight?: number,
   color?: string | undefined
}

export default function DotDivider (props: DotDividerProps) {
   const { size, marginLeft, marginRight, color } = props;

   return (
      <div className={styles.dotDivider} style={{minWidth: size, height: size, marginLeft: marginLeft, marginRight: marginRight, backgroundColor: color}}></div>
   );
}
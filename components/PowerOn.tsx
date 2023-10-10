import React, { MouseEventHandler } from 'react';
import Power from "../assets/power_symbol-1.svg";
import Styles from "../styles/components/power.module.css";
interface PowerOnProps {
    onPowerOn: MouseEventHandler<HTMLDivElement>;
}
export default function PowerOn({ onPowerOn }: PowerOnProps) {
    return (
        <div className={Styles.PowerOn}>
            <div className={Styles.PowerOnWrapper}>
                <img className={Styles.PowerOnImage} onClick={onPowerOn} src={Power.src} height={130} width={130}></img>
            </div>
        </div>
    )
}

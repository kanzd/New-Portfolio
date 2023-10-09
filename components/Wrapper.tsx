import React from 'react';
import Styles from "../styles/components/wrapper.module.css";
interface WrapperProps {
    children: React.ReactElement[],
    customStyles:any;
}
export default function Wrapper({ children,customStyles }: WrapperProps) {
    return (
        <div style={customStyles} className={Styles.root}>
            {children}
        </div>
    )
}

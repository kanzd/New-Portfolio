import React from 'react';
import Styles from "../styles/components/wrapper.module.css";
interface WrapperProps {
    children: React.ReactElement[]
}
export default function Wrapper({ children }: WrapperProps) {
    return (
        <div className={Styles.root}>
            {children}
        </div>
    )
}

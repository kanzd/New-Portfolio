import React from 'react';
import Lottie from "lottie-react";
import Loader from "../assets/lgnOmWTxeU.json";
import User from "../assets/icons8-user-100.png";
import Styles from "../styles/components/loading.module.css";
interface LoadingProps {

}

export default function Loading({ }: LoadingProps) {
    return (
        <div className={Styles.loadingRoot}>
            
            <div>
                <Lottie animationData={Loader}></Lottie>
            </div>
            <div className={Styles.loadingText}>
                Loading...
            </div>
        </div>
    )
}

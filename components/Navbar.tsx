import React from 'react';
import UserIcon from "../assets/icons8-user-100.png";
import Styles from "../styles/components/navbar.module.css"
interface NavbarProps {

}

export default function Navbar({ }: NavbarProps) {
    return (
        <div className={Styles.NavbarRoot}>
            <div className={Styles.NavbarIcon}>
                <img src={"https://assets.website-files.com/5bac0565754dd6b3e278aeb2/5bfcb7456d90ee57ba104076_MPM_Bits-moji.svg"} height={32} width={32}></img>
            </div>
            <div className={Styles.NavbarMenu}>
                <div className={Styles.NavbarMenuWrapper}>
                <div className={Styles.NavbarMenuItem}>
                    Work
                </div>
                <div className={Styles.NavbarMenuDrawer}>
                <a href="#">Read Me</a>
                <a href="#">Logout</a>
                <a href="#">Restart</a>
                <a href="#">Shutdown</a>
                </div>

                </div>
                <div className={Styles.NavbarMenuWrapper}>
                <div className={Styles.NavbarMenuItem}>
                    Social
                </div>
                <div className={Styles.NavbarMenuDrawer}>
                <a href="#">LinkedIn</a>
                <a href="#">GitHub</a>
                </div>
                </div>
            </div>
            <div className={Styles.NavbarTraling}>
                <div className={`${Styles.NavbarTralingItem} ${Styles.Traling1}`}>

                </div>
                <div className={`${Styles.NavbarTralingItem} ${Styles.Traling2}`}>

                </div>
                <div className={`${Styles.NavbarTralingItem} ${Styles.Traling3}`}>

                </div>
            </div>
        </div>
    )
}

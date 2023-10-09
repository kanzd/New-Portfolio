import React from 'react';
import UserIcon from "../assets/icons8-user-100.png";
import Styles from "../styles/components/navbar.module.css"
import HamburgerIcon from "../assets/hamburger.png";
interface NavbarProps {
    traling1onClick:()=>void,
    traling2onClick:()=>void,
    traling3onClick:()=>void
}

export default function Navbar({traling1onClick,traling2onClick,traling3onClick}: NavbarProps) {
    return (
        <div className={Styles.NavbarRoot}>
             <div className={Styles.NavbarHambugerIcon}>
                    <img src={HamburgerIcon.src} height={30} width={30}></img>
                    <div className={Styles.NavbarHamburgerMenu}>
                    <div className={Styles.NavbarMenuItem}>
                        Work
                    </div>
                    <div className={Styles.NavbarMenuItem}>
                        Social
                    </div>
                    </div>
                </div>
            <div className={Styles.NavbarIcon}>
                <img src={"https://assets.website-files.com/5bac0565754dd6b3e278aeb2/5bfcb7456d90ee57ba104076_MPM_Bits-moji.svg"} height={32} width={32}></img>
            </div>
            <div className={Styles.NavbarMenu}>
               
                <div className={Styles.NavbarMenuWrapper}>
                    <div className={Styles.NavbarMenuItem}>
                        Work
                    </div>
                    <div className={Styles.NavbarMenuDrawer}>
                        <div className={`${Styles.NavbarItems} ${Styles.NavbarItemsLines}`}>Read Me</div>
                        <div className={Styles.NavbarItems}>Logout</div>
                        <div className={Styles.NavbarItems}>Restart</div>
                        <div className={Styles.NavbarItems}>Shutdown</div>
                    </div>

                </div>
                <div className={Styles.NavbarMenuWrapper}>
                    <div className={Styles.NavbarMenuItem}>
                        Social
                    </div>
                    <div className={Styles.NavbarMenuDrawer}>
                        <div className={Styles.NavbarItems} onClick={() => {
                            window.location.href = "https://www.linkedin.com/in/kanishk-dixit/";
                        }}>LinkedIn</div>
                        <div className={Styles.NavbarItems} onClick={() => {
                            window.location.href = "https://github.com/kanzd";
                        }}>Github</div>

                    </div>
                </div>
            </div>
            <div className={Styles.NavbarTraling}>
                <div onClick={traling1onClick} className={`${Styles.NavbarTralingItem} ${Styles.Traling1}`}>

                </div>
                <div onClick={traling2onClick} className={`${Styles.NavbarTralingItem} ${Styles.Traling2}`}>

                </div>
                <div onClick={traling3onClick} className={`${Styles.NavbarTralingItem} ${Styles.Traling3}`}>

                </div>
            </div>
        </div>
    )
}

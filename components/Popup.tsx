import React, { DetailedHTMLProps, Dispatch, HTMLAttributes, MouseEventHandler, SetStateAction, useMemo, useState } from 'react';
import Styles from "../styles/components/popup.module.css";
import Folder from './Folder';
import InnerRoot from "./InnerComponent/rootComponent";
import ProjectComponent from './InnerComponent/projectComponent';
import VideoComponent from './InnerComponent/videoComponent';
import ResumeComponent from "./InnerComponent/resumeComponent";
import ProjectDetailsComponents from './InnerComponent/projectDetailsComponents';


interface PopupProps {
    type: "Details" | "Folder";
    onClose: MouseEventHandler<HTMLDivElement>;
    headerTitle: string;
}
interface PopupHeader {
    title: string;
    onClose: MouseEventHandler<HTMLDivElement>;
    onBack: MouseEventHandler<HTMLDivElement>;
    backButton: boolean;
}
interface PopupHeaderLinesProps {
    width: string;
}
interface PopupBodyProps {
    type: "Details" | "Folder";
    currentRoute: string;
    setCurrentRoutes: Dispatch<SetStateAction<string>>;
    setBackButton: Dispatch<SetStateAction<boolean>>;
}
const projectDetails = {
    "Allocation Engine": {
        heading: "Allocation Engine",
        title: "This platform assists Yubi investor entities in securing the most suitable and efficient investment deals.",
        subtitle: "Jul 2023 - Oct 2023",
        skills: "Zustand · Auth 0 · React.js · Redux.js",
        assosiatedWith: "Associated with Yubi",
        logo: "https://www.go-yubi.com/wp-content/themes/yubi-bee/assets/img/yubi-logo-color.svg",
        redirection: "https://www.go-yubi.com/",
    },
    "Phoenix": {
        heading: "Phoenix",
        title: "A cross-platform framework has been developed, allowing users to create both web and mobile applications using a single codebase. This entire framework is built on top of React Native Web, a library that utilizes React Native coding styles for web application development.",
        subtitle: "Oct 2022 - Dec 2022",
        skills: "Storybook · Mono repo · Rollup · Webpack · React Native · React.js",
        assosiatedWith: "Associated with Yubi",
        logo: "https://www.go-yubi.com/wp-content/themes/yubi-bee/assets/img/yubi-logo-color.svg",
        redirection: "https://www.go-yubi.com/",
    },
    "Selfie Module": {
        heading: "Selfie module",
        title: "One component of the Customer Journey Module (CJM) on the Zest Money platform assists users who are joining the platform in verifying their live selfie. This verification step is essential to continue with the onboarding process for Zest Money's Credit Line (CL) and Personal Loan (PL) applications.",
        subtitle: "Feb 2022 - Mar 2022",
        skills: "Mix pannel · React.js",
        assosiatedWith: "Associated with ZestMoney",
        logo: "https://assets.zestmoney.in/assets/customers/icons/Zest_logo_green.png",
        redirection: "https://www.zestmoney.in/"
    },

    "Payout": {
        heading: "Payout",
        title: "A custom payout system was created from the ground up for Sabpaisa, an organization that enables Sabpaisa merchants to efficiently process payouts to their customers.",
        subtitle: "Aug 2020 - Dec 2020",
        skills: "Django REST Framework · Amazon Web Services (AWS) · Redux Thunk · Django · React.js · MySQL · Redux.js · Docker",
        assosiatedWith: "Associated with SabPaisa",
        logo: "https://sabpaisa.in/wp-content/uploads/2023/06/cropped-Untitled-design-1-1.png",
        redirection: "https://sabpaisa.in/"

    }
}
export function PopupHeaderLines({ width }: PopupHeaderLinesProps) {
    return (
        <div className={Styles.PopupHeaderLinesRoot}>
            <div style={{ width: width }} className={Styles.PopupHeaderLines}>

            </div>
            <div style={{ width: width }} className={Styles.PopupHeaderLines}>

            </div>
            <div style={{ width: width }} className={Styles.PopupHeaderLines}>

            </div>
            <div style={{ width: width }} className={Styles.PopupHeaderLines}>

            </div>
            <div style={{ width: width }} className={Styles.PopupHeaderLines}>

            </div>
            <div style={{ width: width }} className={Styles.PopupHeaderLines}>

            </div>

        </div>
    );
}
export function PopupHeader({ title, onClose, onBack, backButton }: PopupHeader) {
    return (
        <div className={Styles.PopupHeaderRoot}>
            <div>
                <PopupHeaderLines width='30px'></PopupHeaderLines>
            </div>
            <div className={Styles.PopupBoxWrapper}>
                <div className={Styles.PopupBox} onClick={backButton ? onBack : onClose}>
                    {backButton ? "<-" : "X"}
                </div>
            </div>
            <div>
                <PopupHeaderLines width='400px'></PopupHeaderLines>
            </div>
            <div className={Styles.PopupHeaderTitle}>
                {title}
            </div>
            <div>
                <PopupHeaderLines width='400px'></PopupHeaderLines>
            </div>
        </div>
    )
}

export function PopupBody({ type, currentRoute, setCurrentRoutes, setBackButton }: PopupBodyProps) {
    const [clickedProject, setClickProject] = useState("Allocation Engine");
    const InnerComponentRoutes = useMemo(() =>
        (heading, subtitle, skills, assosiatedWith, title, logo, redirection) => ({
            "/": <InnerRoot onResumeClicked={() => {
                setCurrentRoutes("/resume");
                setBackButton(true);
            }} onVideoClick={() => {
                setCurrentRoutes("/video");
                setBackButton(true);
            }} onProjectClick={() => {
                setCurrentRoutes("/projects");
                setBackButton(true);
            }} />,
            "/projects": <ProjectComponent setCurrentRoute={setCurrentRoutes} setProject={setClickProject} />,
            "/resume": <ResumeComponent />,
            "/projectdetail": <ProjectDetailsComponents logo={logo} assosiatedWith={assosiatedWith} heading={heading} skills={skills} subtitle={subtitle} title={title} redirection={redirection} />
        }), []);
    if (type === "Details") {
        return (
            <div>
                <div className={Styles.PopupBodyInner}>
                    <img height={130} width={130} src={"https://assets.website-files.com/5bac0565754dd6b3e278aeb2/5bfcb7456d90ee57ba104076_MPM_Bits-moji.svg"}></img>
                    <h1 className={Styles.PopupBodyInnerTitle}>
                        Kanishk Dixit
                    </h1>
                    <div className={`${Styles.PopupBodyInnerTitle} ${Styles.PopupBodyInnerSubTitle}`}>
                        It's all a game avoiding failure
                    </div>
                    <div className={Styles.PopupTitles}>
                        Originally from Meerut City but have lived in the Delhi and am currently in Bangalore. I enjoy traveling and experiencing other cultures. The world and its people are amazing!
                    </div>
                    <h1 className={Styles.PopupBodyInnerTitle}>
                        What I do
                    </h1>
                    <div className={Styles.PopupTitles}>
                        Since 2020, I have been immersed in the world of software development, specializing in both frontend and backend technologies. I have gained valuable experience in a wide range of technologies, including React, React Native, Flutter, Django, Spring Boot, Docker, MySQL, MongoDB, Firebase, and AWS. My journey in this field has allowed me to develop a deep understanding of various tech stacks, enabling me to deliver robust and versatile solutions.
                    </div>
                </div>

            </div>
        );
    }
    else {
        return (
            <>
                {InnerComponentRoutes(projectDetails[clickedProject].heading, projectDetails[clickedProject].subtitle, projectDetails[clickedProject].skills, projectDetails[clickedProject].assosiatedWith, projectDetails[clickedProject].title, projectDetails[clickedProject].logo, projectDetails[clickedProject].redirection)[currentRoute]}
            </>
        );
    }
}
export default function Popup({ type, onClose, headerTitle }: PopupProps) {
    const [backButton, setBackButton] = useState(false);
    const [currentRoutes, setCurrentRoutes] = useState('/');
    return (
        <div className={Styles.PopupRoot}>
            <div>
                <PopupHeader backButton={backButton} onBack={() => {
                    setCurrentRoutes("/");
                    setBackButton(false);
                }} onClose={onClose} title={headerTitle}></PopupHeader>
            </div>
            <div className={Styles.PopupBody}>
                <PopupBody setBackButton={setBackButton} currentRoute={currentRoutes} setCurrentRoutes={setCurrentRoutes} type={type}></PopupBody>
            </div>
        </div>
    )
}

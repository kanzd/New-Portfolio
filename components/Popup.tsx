import React, { DetailedHTMLProps, HTMLAttributes, MouseEventHandler, useMemo, useState } from 'react';
import Styles from "../styles/components/popup.module.css";
import Folder from './Folder';
import InnerRoot from "./InnerComponent/rootComponent";
import ProjectComponent from './InnerComponent/projectComponent';
import VideoComponent from './InnerComponent/videoComponent';

interface PopupProps {
    type: "Details" | "Folder";
    onClose: MouseEventHandler<HTMLDivElement>;
}
interface PopupHeader {
    title: string;
    onClose: MouseEventHandler<HTMLDivElement>;
}
interface PopupHeaderLinesProps {
    width: string;
}
interface PopupBodyProps {
    type: "Details" | "Folder";
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
export function PopupHeader({ title, onClose }: PopupHeader) {
    return (
        <div className={Styles.PopupHeaderRoot}>
            <div>
                <PopupHeaderLines width='30px'></PopupHeaderLines>
            </div>
            <div className={Styles.PopupBoxWrapper}>
                <div className={Styles.PopupBox} onClick={onClose}>
                    X
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

export function PopupBody({ type }: PopupBodyProps) {
    const [currentRoute, setCurrentRoutes] = useState("/");
    const InnerComponentRoutes = useMemo(() => ({
        "/": <InnerRoot onVideoClick={()=>{
            setCurrentRoutes("/video");
        }} onProjectClick={()=>{
            setCurrentRoutes("/project");
        }} />,
        "/projects": <ProjectComponent />,
        "/video": <VideoComponent />
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
                {InnerComponentRoutes[currentRoute]}
            </>
        );
    }
}
export default function Popup({ type, onClose }: PopupProps) {
    return (
        <div className={Styles.PopupRoot}>
            <div>
                <PopupHeader onClose={onClose} title={"Read Me"}></PopupHeader>
            </div>
            <div className={Styles.PopupBody}>
                <PopupBody type={type}></PopupBody>
            </div>
        </div>
    )
}

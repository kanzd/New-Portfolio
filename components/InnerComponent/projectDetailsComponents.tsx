import React from 'react';
import Styles from "../../styles/components/project.module.css";
interface projectDetailsComponentProps {
    heading: string;
    title: string;
    subtitle: string;
    skills: string;
    assosiatedWith: string;
    logo: string;
    redirection: string;

}
export default function ProjectDetailsComponents({ heading, title, subtitle, skills, assosiatedWith, logo, redirection }: projectDetailsComponentProps) {

    return (
        <div className={Styles.projectDetailRoots}>
            <div style={{ margin: "30px 20px", cursor: "pointer" }} onClick={() => {
                window.location.href = redirection;
            }}>
                <img src={logo} height={70} ></img>
            </div>
            <div className={Styles.projectDetailContentWrapper}>
                <div className={Styles.projectDetailsHeadingTitle}>
                    Project Name
                </div>
                <div className={Styles.projectDetailsHeadingContent}>
                    {heading}
                </div>
            </div>
            <div className={Styles.projectDetailContentWrapper}>
                <div className={Styles.projectDetailsHeadingTitle}>
                    Project Duration
                </div>
                <div className={Styles.projectDetailsHeadingContent}>
                    {title}
                </div>
            </div>
            <div className={Styles.projectDetailContentWrapper}>
                <div className={Styles.projectDetailsHeadingTitle}>
                    Details
                </div>
                <div className={Styles.projectDetailsHeadingContent}>
                    {subtitle}
                </div>
            </div>
            <div className={Styles.projectDetailContentWrapper}>
                <div className={Styles.projectDetailsHeadingTitle}>
                    Skills
                </div>
                <div className={Styles.projectDetailsHeadingContent}>
                    {skills}
                </div>
            </div>
            <div className={Styles.projectDetailContentWrapper}>
                <div className={Styles.projectDetailsHeadingTitle}>
                    Assosiated With
                </div>
                <div className={Styles.projectDetailsHeadingContent}>
                    {assosiatedWith}
                </div>
            </div>

        </div>
    )
}

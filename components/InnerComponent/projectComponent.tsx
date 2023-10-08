import React from 'react';
import Folder from '../Folder';
import Styles from "../../styles/components/project.module.css";

interface projectComponent {
    setProject: Function,
    setCurrentRoute: Function,
}
export default function ProjectComponent({ setProject, setCurrentRoute }: projectComponent) {
    return (
        <div className={Styles.projectRoot}>
            <Folder folderType='file' folderName='Allocation Engine' onClick={() => {
                setProject("Allocation Engine");
                setCurrentRoute("/projectdetail");
            }} />
            <Folder folderType='file' folderName='Phoenix' onClick={() => {
                setProject("Phoenix");
                setCurrentRoute("/projectdetail");
            }} />
            <Folder folderType='file' folderName='Selfie Module' onClick={() => {
                setProject("Selfie Module");
                setCurrentRoute("/projectdetail");
            }} />
            <Folder folderType='file' folderName='Payout' onClick={() => {
                setProject("Payout");
                setCurrentRoute("/projectdetail");
            }} />
        </div>
    )
}

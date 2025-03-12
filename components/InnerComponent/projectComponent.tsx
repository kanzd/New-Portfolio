import React from 'react';
import Folder from '../Folder';
import Styles from "../../styles/components/project.module.css";

interface projectComponent {
    setProject: Function,
    setCurrentRoute: Function,
    projectList:Array<string>
}
export default function ProjectComponent({ setProject, setCurrentRoute,projectList }: projectComponent) {
    return (
        <div className={Styles.projectRoot}>
            {projectList.map((value,index)=>( <Folder folderType='file' folderName={value} onClick={() => {
                setProject(value);
                setCurrentRoute("/projectdetail");
            }} />))}
        </div>
    )
}

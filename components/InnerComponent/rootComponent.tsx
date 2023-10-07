import React, { useState } from 'react';
import Styles from "../../styles/components/rootinner.module.css";
import Folder from '../Folder';
import PDFViewer from 'pdf-viewer-reactjs'
interface RootComponentProps {
    onVideoClick: Function,
    onProjectClick: Function,
}

export default function RootComponent({ onVideoClick, onProjectClick }: RootComponentProps) {
    const [showPdf, setPDF] = useState(false);
    if (showPdf) {
        return (
            <>
                <PDFViewer
                    document={{
                        url: '../../assets/Resume (4).pdf',
                    }}
                />
            </>
        )
    }
    return (
        <div>
            <div className={Styles.InnerComponentRoot}>
                <Folder onClick={() => {
                }} folderName="Resume" folderType="file"></Folder>
                <Folder onClick={() => {
                    onProjectClick();
                }} folderName="My Projects" folderType="folder"></Folder>
                <Folder onClick={() => {
                    onVideoClick();
                }} folderName="My Videos" folderType="folder"></Folder>
            </div>

        </div>
    )
}

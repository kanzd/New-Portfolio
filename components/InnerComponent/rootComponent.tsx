import React, { useState } from 'react';
import Styles from "../../styles/components/rootinner.module.css";
import Folder from '../Folder';
import { Document, Page, pdfjs } from 'react-pdf';
import PDFViewer from 'pdf-viewer-reactjs';
interface RootComponentProps {
    onVideoClick: Function,
    onProjectClick: Function,
    onResumeClicked: Function,
}

export default function RootComponent({ onVideoClick, onProjectClick, onResumeClicked }: RootComponentProps) {
    
    return (
        <div>
            <div className={Styles.InnerComponentRoot}>
                <Folder onClick={() => {
                    onResumeClicked();
                }} folderName="Resume" folderType="file"></Folder>
                <Folder onClick={() => {
                    onProjectClick();
                }} folderName="My Projects" folderType="folder"></Folder>
                {/* <Folder onClick={() => {
                    onVideoClick();
                }} folderName="My Videos" folderType="folder"></Folder> */}
            </div>

        </div>
    )
}

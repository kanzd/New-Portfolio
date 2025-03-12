import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Styles from "../../styles/components/rootinner.module.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export default function ResumeComponent() {
    const handleDownload = () => {
        const a = document.createElement('a');
        a.href = "NewResume.pdf";
        a.download = 'downloaded-pdf.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };
    const [scale, setScale] = useState(0.6);
    return (
        <div className={Styles.PdfInner}>
            <style>
                {`
          .react-pdf__Page__textContent {
            display: none !important;
          }
          .react-pdf__Page__annotations{
            display: none !important;
          }
        `}
            </style>
            <Document file={"NewResume.pdf"}>
                <Page scale={scale} pageIndex={0} />
            </Document>
            <div className={Styles.PdfScale}>
                <div className={Styles.PdfScaleButton} onClick={() => {
                    setScale(scale - 0.1);
                }}>
                    -
                </div>
                <div className={Styles.PdfScaleButton} onClick={() => {
                    setScale(scale + 0.1);
                }}>
                    +
                </div>
            </div>
            <button className={Styles.PdfButton} onClick={handleDownload}>Download Resume</button>
            {/* <a href={"Resume.pdf"}></a> */}
        </div>
    );
}

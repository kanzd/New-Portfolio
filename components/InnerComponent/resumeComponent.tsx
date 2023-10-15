import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Styles from "../../styles/components/rootinner.module.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export default function ResumeComponent() {
    const handleDownload = () => {
        const a = document.createElement('a');
        a.href = "Resume.pdf";
        a.download = 'downloaded-pdf.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };
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
            <Document file={"Resume.pdf"} renderMode='canvas'>
                <Page pageIndex={0} />
            </Document>
            <button className={Styles.PdfButton} onClick={handleDownload}>Download Resume</button>
            {/* <a href={"Resume.pdf"}></a> */}
        </div>
    );
}

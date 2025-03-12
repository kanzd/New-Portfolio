import React, { MouseEventHandler } from 'react';
import Styles from "../styles/components/folder.module.css";


interface FolderProps{
    folderName:string;
    folderType:"folder"|"file";
    onClick:MouseEventHandler<HTMLDivElement>;
    noFullWidth?:boolean
}
const imageFolderMap = {
    folder:"https://assets.website-files.com/5bac0565754dd6b3e278aeb2/5c31625c121342820702cc14_folder-graphite.svg",
    file:"https://assets.website-files.com/5bac0565754dd6b3e278aeb2/5c317c167569f5713dfc8712_file-txt-graphite.svg"
};


export default function Folder({folderName,folderType,onClick,noFullWidth=false}:FolderProps) {
  return (
    <div style={{width:!noFullWidth?'100%':'auto'}} className={Styles.FolderRoot} onClick={onClick}>
        <div className={Styles.FolderImage}>
        <img src={folderType==="folder"?imageFolderMap.folder:imageFolderMap.file} height={80} width={80}></img>
        </div>
        <div  className={Styles.FolderTitle}>
            {folderName}
        </div>
    </div>
  )
}

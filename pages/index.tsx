import Wrapper from "../components/Wrapper";
import Navbar from '../components/Navbar';
import Styles from '../styles/pages/root.module.css';
import Folder from "../components/Folder";
import Popup from "../components/Popup";
import { useEffect, useMemo, useRef, useState } from "react";
import Lottie from "lottie-react";
import Animation from "../assets/animation_lng5iy9f.json";
import LoaderComponent from "../components/Loading";
import Power from "../components/PowerOn";
const IndexPage = () => {
  const [type, setType] = useState<"Details" | "Folder">("Details");
  const [showPopup, setShowPopup] = useState(true);
  const [headerTitle, setHeaderTitle] = useState('');
  const ref = useRef(null);
  const [bgColor, setBgColor] = useState("#848482");
  const [loader, setLoader] = useState(true);
  const [shutdown, setShutdown] = useState(false);
  const onOutSideClick = useMemo(() => {
    return () => setShowPopup(false);
  }, [])
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, [])
  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (!(ref.current as any)?.contains(event.target)) {
        onOutSideClick();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);
  if (loader) return <LoaderComponent></LoaderComponent>;
  if (shutdown) return <Power onPowerOn={() => {
    window.location.reload();
  }}></Power>;
  return (
    <div>
      <Wrapper customStyles={{ backgroundColor: bgColor }}>
        {showPopup && <div ref={ref} className={Styles.PopupWrapper}>
          <Popup headerTitle={headerTitle} onClose={() => {
            setShowPopup(false);
          }} type={type}></Popup>
        </div>}

        <Navbar onShutdown={() => {
          setShutdown(true);
        }} onReadMeClick={() => {
          setShowPopup(true);
          setType("Details")
          setHeaderTitle("Read Me");
        }} traling1onClick={() => {
          setBgColor("#f37725");
        }} traling2onClick={function (): void {
          setBgColor("#3685c5");
        }} traling3onClick={function (): void {
          setBgColor("#848482");
        }}></Navbar>
        <div className={Styles.FolderStuctureWrapper}>
          {/* <div className={Styles.AnimationWrapper}>
          <Lottie animationData={Animation} loop={false} />
          </div> */}
          <div className={Styles.FolderStucture}>
            <Folder onClick={() => {
              setShowPopup(true);
              setType("Details")
              setHeaderTitle("Read Me");
            }} folderName="Read Me" folderType="file"></Folder>
            <Folder onClick={() => {
              setShowPopup(true);
              setType("Folder");
              setHeaderTitle("My Files");
            }} folderName="My Files" folderType="folder"></Folder>
          </div>

        </div>
      </Wrapper>
    </div>
  )
}

export default IndexPage

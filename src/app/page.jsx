import StartPageCSS from "./StartPage.module.css";
import BgRadar from "./components/backgroundRadar/BgRadar.js";
import { NearestEnxilados } from "./components/openLinkButtons/ExternalLinkBtns.jsx";
import Link from 'next/link';

export default function StartPage() {
  return (

    <div className={StartPageCSS.mainContainer}>
      
      {/* Background Radar Component */}
      <div className={StartPageCSS.radarContainer}>
        <BgRadar />
      </div>

      {/* Main title container */}
      <div className={StartPageCSS.title}>
        <h1>find</h1>
        <h1>my</h1>
        <h1>enxilados</h1>
      </div>

      <Link href="/searching">
        <NearestEnxilados />
      </Link>

      <Link href="/quienes-somos">
        <button className={StartPageCSS.quienesSomosBtn}>Quienes somos</button>
      </Link>
      
    </div>
  );
}

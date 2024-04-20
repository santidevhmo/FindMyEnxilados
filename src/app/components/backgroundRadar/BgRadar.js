import BgRadarCSS from "./BgRadar.module.css";

export default function BgRadar() {

  const picafresa = "/assets/icons/picafresa.png";
  const charola = "/assets/icons/charola.png";
  const starbust = "/assets/icons/starbust.png";

  return (
    <>
      <div className={BgRadarCSS.startPage}>
        <div className={BgRadarCSS.radarComponent}>
          {/* 1st Solid Circle */}
          <div className={BgRadarCSS.circle}>
            <div className={BgRadarCSS.iconBlock}>
              <img src={charola} />
            </div>
            <div className={BgRadarCSS.iconBlock}>
              <img src={picafresa}/>
            </div>
            <div className={BgRadarCSS.iconBlock}>
              <img src={starbust} />
            </div>
            <div className={BgRadarCSS.iconBlock}>
              <img src={picafresa} />
            </div>
          </div>
          {/* 1st Dashed Circle */}
          <div className={BgRadarCSS.circle}>
            <div className={BgRadarCSS.iconBlock}>
              <img src={picafresa} />
            </div>
            <div className={BgRadarCSS.iconBlock}>
              <img src="" />
            </div>
            <div className={BgRadarCSS.iconBlock}>
              <img src={starbust} />
            </div>
          </div>
          {/* 2nd Solid Circle */}
          <div className={BgRadarCSS.circle}>
            <div className={BgRadarCSS.iconBlock}>
              <img src={picafresa} />
            </div>
            <div className={BgRadarCSS.iconBlock}>
              <img src={starbust} />
            </div>
            <div className={BgRadarCSS.iconBlock}>
              <img src={picafresa} />
            </div>
            <div className={BgRadarCSS.iconBlock}>
              <img src={starbust} />
            </div>
          </div>
          {/* 2nd Dashed Circle */}
          <div className={BgRadarCSS.circle}>
            <div className={BgRadarCSS.iconBlock}>
              <img src={charola} />
            </div>
            <div className={BgRadarCSS.iconBlock}>
              <img src={picafresa} />
            </div>
            <div className={BgRadarCSS.iconBlock}>
              <img src={starbust} />
            </div>
            <div className={BgRadarCSS.iconBlock}>
              <img src={picafresa} />
            </div>
          </div>
          {/* 3d Solid Circle */}
          <div className={BgRadarCSS.circle}>
            <div className={BgRadarCSS.iconBlock}>
              <img src={picafresa} />
            </div>
            <div className={BgRadarCSS.iconBlock}>
              <img src={starbust} />
            </div>
            <div className={BgRadarCSS.iconBlock}>
              <img src={picafresa} />
            </div>
            <div className={BgRadarCSS.iconBlock}>
              <img src={starbust} />
            </div>
          </div>
          {/* 3d Dashed Circle */}
          <div className={BgRadarCSS.circle}>
            <div className={BgRadarCSS.iconBlock}>
              <img src={charola} />
            </div>
            <div className={BgRadarCSS.iconBlock}>
              <img src={picafresa} />
            </div>
            <div className={BgRadarCSS.iconBlock}>
              <img src={starbust} />
            </div>
            <div className={BgRadarCSS.iconBlock}>
              <img src={picafresa} />
            </div>
          </div>
          {/* 4th Solid Circle */}
          <div className={BgRadarCSS.circle}>
            <div className={BgRadarCSS.iconBlock}>
              <img src={picafresa} />
            </div>
            <div className={BgRadarCSS.iconBlock}>
              <img src={starbust} />
            </div>
            <div className={BgRadarCSS.iconBlock}>
              <img src={picafresa} />
            </div>
            <div className={BgRadarCSS.iconBlock}>
              <img src={starbust} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

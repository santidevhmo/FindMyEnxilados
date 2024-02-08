import "./BgRadar.css";

// export default function BgRadar() {
//   return (
//     <>
//       <section class="main-container">
//         <div class="main">
//           <div class="big-circle">
//             <div class="icon-block">
//               <img
//                 src="https://www.yudiz.com/codepen/animated-portfolio/web-dev-icon.png"
//                 alt="web design icon"
//               />
//             </div>
//             <div class="icon-block">
//               <img
//                 src="https://www.yudiz.com/codepen/animated-portfolio/game-design-icon.png"
//                 alt="game design icon"
//               />
//             </div>
//             <div class="icon-block">
//               <img
//                 src="https://www.yudiz.com/codepen/animated-portfolio/game-dev-icon.png"
//                 alt="game dev icon"
//               />
//             </div>
//             <div class="icon-block">
//               <img
//                 src="https://www.yudiz.com/codepen/animated-portfolio/ui-ux-icon.png"
//                 alt="ui-ux icon"
//               />
//             </div>
//           </div>

//           <div class="circle">
//             <div class="icon-block">
//               <img
//                 src="https://www.yudiz.com/codepen/animated-portfolio/app-icon.png"
//                 alt="app icon"
//               />
//             </div>
//             <div class="icon-block">
//               <img
//                 src="https://www.yudiz.com/codepen/animated-portfolio/blockchain-icon.png"
//                 alt="blockchain icon"
//               />
//             </div>
//             <div class="icon-block">
//               <img
//                 src="https://www.yudiz.com/codepen/animated-portfolio/arvr-icon.png"
//                 alt="ar-vr icon"
//               />
//             </div>
//             <div class="icon-block">
//               <img
//                 src="https://www.yudiz.com/codepen/animated-portfolio/artificial-intelligence-icon.png"
//                 alt="artificial intelligence icon"
//               />
//             </div>
//           </div>
//           <div class="center-logo">
//             <img
//               src="https://www.yudiz.com/codepen/animated-portfolio/logo.png"
//               alt="logo"
//             />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

import "./BgRadar.css";

export default function BgRadar() {
  return (
    <>
      <section class="main-container">
        <div class="main">
          {/* Big Circle */}
          <div class="big-circle">
            <div class="icon-block">
              {/* Web Design Icon */}
              <img
                src="https://www.yudiz.com/codepen/animated-portfolio/web-dev-icon.png"
                alt="web design icon"
              />
            </div>
            {/* Other icons... */}
          </div>

          {/* First Additional Circle */}
          <div class="circle circle-1">{/* Icons for circle 1 */}</div>

          {/* Second Additional Circle */}
          <div class="circle circle-2">{/* Icons for circle 2 */}</div>

          {/* Center Logo */}
          <div class="center-logo">
            {/* Center Logo Image */}
            <img
              src="https://www.yudiz.com/codepen/animated-portfolio/logo.png"
              alt="logo"
            />
          </div>
        </div>
      </section>
    </>
  );
}

// import React, { useEffect } from 'react';
// import '../../../App.css';
// import truck2 from "../../../images/truck2.jpg";


// function CardsSwipeslan() {

//   useEffect(() => {
//     const c = document.getElementById("Canvas");
//     const ctx = c.getContext("2d");

//     let cwidth, cheight;
//     const shells = [];
//     const pass = [];

//     const colors = ['#FF5252', '#FF4081', '#E040FB', '#7C4DFF', '#536DFE', '#448AFF', '#40C4FF', '#18FFFF', '#64FFDA', '#69F0AE', '#B2FF59', '#EEFF41', '#FFFF00', '#FFD740', '#FFAB40', '#FF6E40'];

//     function reset() {
//       cwidth = window.innerWidth;
//       cheight = window.innerHeight;
//       c.width = cwidth;
//       c.height = cheight;
//     }

//     function newShell() {
//       const left = (Math.random() > 0.5);
//       const shell = {};
//       shell.x = (1 * left);
//       shell.y = 1;
//       shell.xoff = (0.01 + Math.random() * 0.007) * (left ? 1 : -1);
//       shell.yoff = 0.01 + Math.random() * 0.007;
//       shell.size = Math.random() * 6 + 3;
//       shell.color = colors[Math.floor(Math.random() * colors.length)];

//       shells.push(shell);
//     }

//     function newPass(shell) {
//       const pasCount = Math.ceil(Math.pow(shell.size, 2) * Math.PI);

//       for (let i = 0; i < pasCount; i++) {
//         const pas = {};
//         pas.x = shell.x * cwidth;
//         pas.y = shell.y * cheight;

//         const a = Math.random() * 4;
//         const s = Math.random() * 10;

//         pas.xoff = s * Math.sin((5 - a) * (Math.PI / 2));
//         pas.yoff = s * Math.sin(a * (Math.PI / 2));

//         pas.color = shell.color;
//         pas.size = Math.sqrt(shell.size);

//         if (pass.length < 1000) { pass.push(pas); }
//       }
//     }

//     let lastRun = 0;
//     function run() {
//       let dt = 1;
//       if (lastRun !== 0) { dt = Math.min(50, (performance.now() - lastRun)); }
//       lastRun = performance.now();

//       ctx.fillStyle = "rgba(0,0,0,0.25)";
//       ctx.fillRect(0, 0, cwidth, cheight);

//       if ((shells.length < 10) && (Math.random() > 0.96)) { newShell(); }

//       for (let ix in shells) {
//         const shell = shells[ix];

//         ctx.beginPath();
//         ctx.arc(shell.x * cwidth, shell.y * cheight, shell.size, 0, 2 * Math.PI);
//         ctx.fillStyle = shell.color;
//         ctx.fill();

//         shell.x -= shell.xoff;
//         shell.y -= shell.yoff;
//         shell.xoff -= (shell.xoff * dt * 0.001);
//         shell.yoff -= ((shell.yoff + 0.2) * dt * 0.00005);

//         if (shell.yoff < -0.005) {
//           newPass(shell);
//           shells.splice(ix, 1);
//         }
//       }

//       for (let ix in pass) {
//         const pas = pass[ix];

//         ctx.beginPath();
//         ctx.arc(pas.x, pas.y, pas.size, 0, 2 * Math.PI);
//         ctx.fillStyle = pas.color;
//         ctx.fill();

//         pas.x -= pas.xoff;
//         pas.y -= pas.yoff;
//         pas.xoff -= (pas.xoff * dt * 0.001);
//         pas.yoff -= ((pas.yoff + 5) * dt * 0.0005);
//         pas.size -= (dt * 0.002 * Math.random());

//         if ((pas.y > cheight) || (pas.y < -50) || (pas.size <= 0)) {
//           pass.splice(ix, 1);
//         }
//       }
//       requestAnimationFrame(run);
//     }

//     reset();
//     run();

//     window.addEventListener('resize', reset);

//     return () => {
//       window.removeEventListener('resize', reset);
//     };
//   }, []);

//   return (
//     <>
//       <canvas id="Canvas"></canvas>
//       <div className="msg"><span style={{color:'white'}}>Welcome </span><br /> to  <br /><img src={truck2} alt="" style={{marginTop:'-5%'}} /></div>
//       <div className="year">
        
       
//         <div className="balloon"></div>
//       </div>

      
//       <div className="firework" id="firework1">
//         <div className="cracker"></div>
//         <div className="cracker"></div>
//         <div className="cracker"></div>
//         <div className="cracker"></div>
//         <div className="cracker"></div>
//         <div className="cracker"></div>
//         <div className="cracker"></div>
//         <div className="cracker"></div>
//         <div className="cracker"></div>
//         <div className="cracker"></div>
//         <div className="cracker"></div>
//         <div className="cracker"></div>
//       </div>
//       <div className="firework" id="firework2">
//         <div className="cracker"></div>
//         <div className="cracker"></div>
//         <div className="cracker"></div>
//         <div className="cracker"></div>
//         <div className="cracker"></div>
//         <div className="cracker"></div>
//         <div className="cracker"></div>
//         <div className="cracker"></div>
//         <div className="cracker"></div>
//         <div className="cracker"></div>
//         <div className="cracker"></div>
//         <div className="cracker"></div>
//       </div>
//       <div className="firework" id="firework3">
//         <div className="cracker"></div>
//         <div className="cracker"></div>
//         <div className="cracker"></div>
//         <div className="cracker"></div>
//         <div className="cracker"></div>
//         <div className="cracker"></div>
//         <div className="cracker"></div>
//         <div className="cracker"></div>
//         <div className="cracker"></div>
//         <div className="cracker"></div>
//         <div className="cracker"></div>
//         <div className="cracker"></div>
//       </div>
//     </>
//   );
// }

// export default CardsSwipeslan;



import React, { useEffect } from 'react';
import '../../../App.css';
import truck2 from "../../../images/truck2.jpg";
import '../../../Styles/Bomb.scss'


function CardsSwipeslan() {

 

  return (
    <>
     
     
      {/* <div class="animation-container">
      <div className="msg"><span style={{color:'white'}}>Welcome </span><br /> to  <br /><img src={truck2} alt="" style={{marginTop:'-5%'}} /></div>
        <i class="star"></i>
        <i class="star"></i>
        <i class="star"></i>
        <i class="star"></i>
        <i class="star"></i>
        <i class="star"></i>
        <i class="star"></i>
        <i class="star"></i>
        <i class="star"></i>
        <i class="star"></i>
        <i class="star"></i>
        <i class="star"></i>
        <i class="star"></i>
        <i class="star"></i>
        <i class="circle"></i>
        <i class="circle"></i>
        <i class="circle"></i>
        <i class="circle"></i>
        <i class="circle"></i>
        <i class="circle"></i>
        <i class="circle"></i>
        <i class="circle"></i>
        <i class="circle"></i>
        <i class="circle"></i>
        <i class="circle"></i>
        <i class="circle"></i>
        <i class="circle"></i>
        <i class="circle"></i>
        <i class="circle"></i>
        <i class="circle"></i>
        <i class="circle"></i>
        <i class="circle"></i>
        <i class="circle"></i>
        <i class="circle"></i>
        <i class="circle"></i>
        <i class="balloon"></i>
        <i class="balloon"></i>
        <i class="balloon"></i>
        <i class="balloon"></i>
        <i class="balloon"></i>
        <i class="balloon"></i>
        <i class="balloon"></i>
        <i class="curved"></i>
        <i class="curved"></i>
        <i class="curved"></i>
        <i class="curved"></i>
        <i class="curved"></i>
        <i class="curved"></i>
        <i class="curved"></i>
      </div> */}

<div className="pyro" style={{backgroundImage: `url(${truck2})`}}>
<div className="msg"><span style={{color:'black'}}>Welcome </span><br /> to  <br /><img src={truck2} alt="" style={{marginTop:'-5%'}} /></div>
  <div class="before"></div>
  <div class="after"></div>
</div>
      


     
    </>
  );
}
  
export default CardsSwipeslan;
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <Outlet />
        </div>
        <Footer />
      </main>
    </>
  );
}

// import { useState, useEffect } from "react";
// import { Outlet, useLocation } from "react-router-dom";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

// export default function DefaultLayout() {
//   const location = useLocation(); //  Per sapere in che pagina siamo

//   //note  Stati per gli scherzi
//   const [showJumpScare, setShowJumpScare] = useState(false);
//   const [countdown, setCountdown] = useState(null);
//   const [clicks, setClicks] = useState(0);

//   //note  Logica del Countdown (si attiva solo se countdown > 0)
//   useEffect(() => {
//     if (countdown !== null && countdown > 0) {
//       const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
//       return () => clearTimeout(timer);
//     } else if (countdown === 0) {
//       if (clicks < 50) {
//         alert("💥 BOOM! Too slow! The office is gone!");
//       } else {
//         alert("🏆 LEGEND! You saved the garage!");
//       }
//       setCountdown(null); // Reset
//       setClicks(0);
//     }
//   }, [countdown, clicks]);

//   //note Funzione che verrà chiamata dal click nell'Header
//   const handleSecretAction = () => {
//     if (location.pathname === "/") {
//       // JUMP SCARE IN HOME
//       setShowJumpScare(true);
//       setTimeout(() => setShowJumpScare(false), 2000); // Sparisce dopo 2s
//     } else if (location.pathname === "/about-us") {
//       // COUNTDOWN IN ABOUT
//       setCountdown(10);
//       setClicks(0);
//     }
//   };
//   return (
//     <>
//       <Header />
//       <main>
//         <div className="container">
//           <Outlet />
//         </div>
//         <Footer />
//       </main>
//     </>
//   );
// }

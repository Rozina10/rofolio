// import React from "react";
// import "./Footer.css";


// export default function Footer() {
//   return (
//     <div className="footer-container">
//       <div className="footer-parent">
//         <img src={ require ("/assets/images/shape-bg.png") .default } 
//         alt='no internet connection'/>
//       </div>
//     </div>
//   );
// }




import React from "react";
import "./Footer.css";
import shapeBg from "/assets/images/shape-bg.png"; // Direct import of image

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-parent">
        <img 
          src={shapeBg} 
          alt="Background shape design" 
          className="footer-image" // For specific styling
        />
      </div>
    </div>
  );
}




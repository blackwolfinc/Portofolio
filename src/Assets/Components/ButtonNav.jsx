import React from "react";
import "./CssComponents/ButtonNav.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export const ButtonNav = () => {
  return (
    <div className="ButonNav">
    
      <button>Profil</button>
      <button> Skils</button>
      <button> Work History</button>
      <button> Social</button>
      <button> Portofolio</button>
    </div>
  );
};

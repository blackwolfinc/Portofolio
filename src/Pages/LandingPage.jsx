import React, { useState } from "react";
import "../Assets/Style/LandingPage.scss";
import ImageProfil from "../Assets/img/bagas.png";
import { Type } from "../Assets/Components/Type";
import { LinkedIn } from "../Assets/Components/LinkedIn";
import { Youtube } from "../Assets/Components/Youtube";
import { ProfilComponents } from "../Assets/Components/ProfilComponents";
export const LandingPage = () => {
    const [HideKanan, setHideKanan] = useState("hide")

    const HendleHide =()=>{

        if(HideKanan === "hide")
        {
            setHideKanan("show")
        }else{
            setHideKanan("hide")
            console.log("hit")
        }
    }
  return (
    <div>
      <div className="LandingPage">
        <span className="LandingPagelayer"></span>
        <div className="ContainerDefault">
          <div className="ContainerKiri">
            <div className="CardProfil">
            
              <div class="line right">
                <div class="scanner"></div>
              </div>
              
              <div class="diagonal-hero-bg">
             
                <div class="stars">
                <h1 >hello there. . .</h1>
                  <div class="small"></div>
                  <div class="medium"></div>
                  <div class="big"></div>
                </div>
              </div>
              <img src={ImageProfil} />
      
            </div>
            <button onClick={HendleHide} className="Btn-hire">About Me</button>
          </div>
          <div  className={`ContainerKanan ${HideKanan}`}>
        <h1><Type
          Value ="Front end developer ReactJs & React Native"
        /></h1>
        <br/>
        <hr/>

        <ProfilComponents/>
        <div className="SocialWraper">
        <LinkedIn/>
      <Youtube/>
        </div>

     
  
        




          </div>
        </div>
      </div>
    </div>
  );
};

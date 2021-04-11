import React from 'react'
import { ButtonNav } from './ButtonNav'
import './CssComponents/Profil.scss'
export const ProfilComponents = () => {
    return (
        <div className="ProfilComponents">
            <div  className="ProfilKiri">
            <h4>PROFILE : </h4>
            <br/>
            <p>This is Bagas, who is taking the Front End course in our own Glints Academy Batch7 and mainly learning about Node.js. Even though he is mainly learning about Node.js, he also learns a fair amount of ReactJs. He ever got an award from Kediri City Government for 3rd place in "Inovasi Teknologi kota kediri 2019". He is currently very motivated to explore his capabilities by taking a new opportunity to start his international career, especially in foreign companies.</p>
           <br/>
           <p><h4>AWARDS : "INOVASI TEKNOLOGI KOTA KEDIRI 2019 3rd place" </h4> 
           <p>• Aplication Name : Antri Sehat</p>
           <p>• Role : Leader & Front End Developer</p> <p>• Certificate Number : 050/003/LH-E-K/VII/2019</p>
           </p>
            </div>
            <div className="ProfilKanan">
                <ButtonNav/>

            </div>
        </div>
    )
}

import TitleSection from "../titleSection"
import Description from "../description"
import DivSevice from "../divService"
import Time from "../time"
import Footer from "../footer"
import Navbar from "../navbar"
const About=()=>{
return<>
<Navbar/>
<div className=" pt-52 px-10  text-white bg-black">
<TitleSection text=" About me"/>
<Description 
 text1="mon parcours dans la conception d'experiences numerique epoustouflantes"
 text2="en savoir plus sur moi"
 text3="Bonjour je suis guei lewis developpeur full-stack specialisé en ReactJS ,Flutter, NextJS, NestJS et php.
 mon parcours a debuté avec une passion profonde pour la tecnologie , qui m'a poussé a créer des expériences numérique exceptionnelles et véritablement marquantes."
 text4=" Au fils des ans , cette passion a évolué vers une carrière où je transforme des idées en solution percutantes. a chaque projet j'apporte creativité, précision et engagement pour des résultats exceptionnels."
/>

<DivSevice
image="/vite.svg"
title=" Développeur web React et nest"
text="Expert en création d'application web dynamiques et
 reactives avec ReactJS, NextJS ou NextJs. Nous nous concentrons 
 sur la création d'experiences utilisateur fluides , en mettant l'accent
 sur la performance,la maintenabilité et l'evolutivité.
 "
/>

<Time/> 
<Footer/>
  </div>

  </>
} 
export default About


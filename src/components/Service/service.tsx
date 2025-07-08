import TitleSection from "../titleSection"
import Navbar from "../navbar"
import ServiceSection from "./serviveScetion"
import Description from "../description"
import Time from "../time"
import Footer from "../footer"
const Service=()=>{
    return <>
     <Navbar/>
    <div className=" text-white bg-black ">



<div className="pt-52 px-10">

<div>
 <TitleSection text='service'/>
    <ServiceSection title=" Developpement web"
     description=" a website to showcqse personal or prefessional work,skils
      and achievement , or web app for a specific business or service." />

</div>

<div className="my-32">
      <ServiceSection title=" Developpement mobile"
     description=" une application mobile professionnelle permettant aux entreprise de presenter leur produits , service et informatique 
     sur l'entreprise et pouvant disposer de fonctionalite de commerce electronique" />

</div>

<Description text1="Fournir des services exceptionnels avec une précision inegalée"
      text2="la precision rencontre l'innovation"
      text3="Chaque service que je propose  est soigneusement conçu avec élégance et précision
       combinant des idéés innovant pour créer des résultats exceptionnels."

       text4="En integrant ces éléments de maniere transparente, je m'assure que chaque projet dépasse les attentes ,
        en fournissant des solutions a la fois distinctves et percutantes "
/>

</div>   
  <Time/>
    <Footer/>   
    </div>

           </>
}
export default Service 
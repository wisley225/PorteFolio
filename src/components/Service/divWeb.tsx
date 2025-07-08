
import { GoArrowUpRight } from "react-icons/go"
import { FaCheck } from "react-icons/fa6";

const DivWeb=()=>{

return <div className=" bg-black border bg-neutral-900 w-96 p-5  h-[500px] flex flex-col justify-between ">
   <div className=""> 
 <h2 className="mb-10 font-black text-2xl border-b-2 ">basic plan</h2>
     <ul className=" size-full  ">
        <li className=" flex items-end    mb-2 -2  " ><FaCheck className="mr-2  text-xl"/><span className=" ">one-page website</span> </li>
        <li className=" flex items-end  mb-2  -2 " ><FaCheck className=" mr-2 text-xl"/><span>Conception reactive</span> </li>
        <li className=" flex items-end  mb-2  -2 " ><FaCheck className=" mr-2 text-xl"/><span>Optimisé pour le referencement</span> </li>
        <li className=" flex items-end  mb-2  -2 " ><FaCheck className=" mr-2 text-xl"/><span>Redaction de contenu</span> </li>
        <li className=" flex items-end  mb-2 -2  " ><FaCheck className="mr-2  text-xl"/><span>Hébergement gratuit</span> </li>
     </ul>
   </div>
    
    <div className=" ">
      <span className=" block mb-4 text-lg font-bold">Delai de livraison: 5 jours</span>
      <div className=" hover:bg-neutral-800 transition-all cursor-pointer text-lg border flex items-end justify-center py-2"> <span>Obtenir un devis</span> <GoArrowUpRight className="text-xl" /> </div>
      
    </div>
</div>

}

export default DivWeb
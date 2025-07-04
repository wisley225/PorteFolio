import { GoArrowUpRight } from "react-icons/go";


const Footer = () => {
    return (
        <div className=" px-10 mt-10 pt-10 bg-neutral-900">
        <h4 className=" font-extrabold text-3xl mb-10" > Guei lewis </h4> 
        <div className=" flex h-[400px] justify-between ">
            <div className="  h-full flex flex-col justify-evenly w-1/2   items-start">
<span className=" text-2xl font-thin"> Subscribe To Newsletter </span>
  <div className=" border-b-2 flex ">
   
       <input type="text" placeholder="Your Email" className=" text-xl  w-full bg-transparent outline-none  target:backdrop:text-red-500 placeholder:text-white text-white " />
           <GoArrowUpRight className=" text-4xl"/>
         </div>
 <div className="  text-xl  cursor-pointer transition-all  flex justify-center items-center   h-10 border px-5">
     <span className=" "> Shedule a free consultation gratuite</span> <GoArrowUpRight  className="  text-2xl"/> 
     </div>

 <div>
    
 </div>
            </div>

       <div className=" flex flex-col justify-evenly w-1/2   ">
           <ul className=" flex w-full justify-between ">
            <li className="">
                <h4 className=" mb-2 text-2xl font-extrabold">Usefull Links</h4>
                <ul className=" leading-7">
                    <li>Work</li>
                    <li>Services</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </li>
           
             <li className=" w-96">
                <h5 className=" mb-2 text-2xl font-extrabold">Collaboration</h5>
                <ul>
                    <li>si vous avez un projet potentiel ou une collaboration veuillez me contacter a :<span className=" text-neutral-500 cursor-pointer underline"> lewisguei67@gmail.com</span></li>
                  
                </ul>
            </li>
           </ul>

           <ul className=" flex  justify-between ">
  <li className=" ">
    <h5 className=" text-2xl font-extrabold ">Address </h5>
    <span> marcory residentiel</span>
  </li>
  <li className="  w-96">
      <h6 className=" text-2xl font-extrabold"> Support</h6>
    <ul>
   <li className="flex flex-col">
<p>pour toute demande generale veuilles me contacter : </p>
   <span className=" text-neutral-500 cursor-pointer underline"> lewisguei67@gmail.com</span>
   </li>
    <li className=" flex flex-col">
        <strong> phone Number : </strong>
        <span className="text-neutral-500 cursor-pointer ">+225 0788343382/ +225 0172531446</span>
    </li>
   
    </ul>
   
  </li>
           </ul>
       </div>
            
        </div> 
 <hr className=" border-1 border-neutral-600" />
        <ul className=" flex justify-between  text-sm py-10">
            <li> ©2025 Guei Lewis </li>
            <li> Tout droits reservés</li>
            <li> Conditions générales et Confidentialité</li>
            <li> developer et concu par moi</li>
        </ul>  

       
        </div>
    );
}

export default Footer;

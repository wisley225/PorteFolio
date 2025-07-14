import { GoArrowUpRight } from "react-icons/go";

const Footer = () => {
    return (
        <div className="px-4 sm:px-6 md:px-10 mt-10 pt-10 bg-neutral-900">
            <h4 className="font-extrabold text-2xl sm:text-3xl mb-6 sm:mb-10">Guei lewis</h4> 
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 justify-between">
                <div className=" w-full lg:w-1/2 flex flex-col justify-evenly items-start gap-6 sm:gap-8">
                    <span className="text-lg sm:text-xl lg:text-2xl font-thin">Subscribe To Newsletter</span>
                    <div className="border-b-2 flex items-center w-full">
                        <input 
                            type="text" 
                            placeholder="Your Email" 
                            className="text-base sm:text-lg lg:text-xl w-full bg-transparent outline-none placeholder:text-white text-white py-2" 
                        />
                        <GoArrowUpRight className="text-2xl sm:text-3xl lg:text-4xl ml-2"/>
                    </div>
                    <div className="  text-sm sm:w-96 text-base sm:text-lg lg:text-xl cursor-pointer transition-all flex justify-center items-center h-10 border px-4 sm:px-5">
                        <span>  consultation gratuite</span> 
                        <GoArrowUpRight className="text-xl sm:text-2xl ml-2"/> 
                    </div>
                </div>

                <div className="w-full lg:w-1/2 flex flex-col justify-evenly gap-6 sm:gap-8">
                    <ul className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-12 w-full justify-between">
                        <li className="w-full sm:w-auto">
                            <h4 className="mb-2 text-lg sm:text-xl lg:text-2xl font-extrabold">Useful Links</h4>
                            <ul className="leading-6 sm:leading-7 text-sm sm:text-base">
                                <li>Work</li>
                                <li>Services</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </li>
                        
                        <li className="w-full sm:w-96">
                            <h5 className="mb-2 text-lg sm:text-xl lg:text-2xl font-extrabold">Collaboration</h5>
                            <ul className="text-sm sm:text-base">
                                <li>
                                    Si vous avez un projet potentiel ou une collaboration veuillez me contacter à :
                                    <span className="text-neutral-500 cursor-pointer underline block mt-1">lewisguei67@gmail.com</span>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <ul className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-12 justify-between">
                        <li className="w-full sm:w-auto">
                            <h5 className="text-lg sm:text-xl lg:text-2xl font-extrabold mb-2">Address</h5>
                            <span className="text-sm sm:text-base">Marcory résidentiel</span>
                        </li>
                        <li className="w-full sm:w-96">
                            <h6 className="text-lg sm:text-xl lg:text-2xl font-extrabold mb-2">Support</h6>
                            <ul className="text-sm sm:text-base space-y-2">
                                <li className="flex flex-col">
                                    <p>Pour toute demande générale veuillez me contacter :</p>
                                    <span className="text-neutral-500 cursor-pointer underline">lewisguei67@gmail.com</span>
                                </li>
                                <li className="flex flex-col">
                                    <strong>Phone Number :</strong>
                                    <span className="text-neutral-500 cursor-pointer">+225 0788343382/ +225 0172531446</span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div> 
            
            <hr className="border-1 border-neutral-600 my-6 sm:my-8" />
            
            <ul className="flex flex-col sm:flex-row justify-between text-xs sm:text-sm py-6 sm:py-10 gap-2 sm:gap-0">
                <li>©2025 Guei Lewis</li>
                <li>Tous droits réservés</li>
                <li>Conditions générales et Confidentialité</li>
                <li>Développé et conçu par moi</li>
            </ul>  
        </div>
    );
}

export default Footer;

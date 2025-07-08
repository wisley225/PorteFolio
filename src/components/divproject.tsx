import { GoArrowUpRight } from "react-icons/go";

type DivProjectProps= {
  genre: string;
  title:string;
  image:string

}
const Divproject = ({genre, title, image}: DivProjectProps) => {
    return (
        <div className="  bg-black cursor-pointer p-12 w-[430px] hover:bg-neutral-800 transition-all bg-neutral-900 ">
        <div className="flex flex-col   items-center  ">
        <div className=" w-full ">
            <h2 className=" text-3xl  font-black">{title}</h2>
            <p className="text-xl  ">{genre}</p>
            </div>         
            <div className=" size-full mt-5 mb-10">
            <img src={image} alt={title}  className=" object-cover object-center" />          

            </div>
            <ul className=" flex w-full justify-between">
                <li className=" text-xl">Aout 2024</li>
               <li className=" text-xl  cursor-pointer transition-all  flex justify-center items-end "> <span className=" "> en savoir plus</span> <GoArrowUpRight  className="  text-2xl"/> </li>
            </ul>
        </div>
           
        </div>
    );
}

export default Divproject;

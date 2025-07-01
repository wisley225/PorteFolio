
type DivService={
    text:string
    image:string
    title:string
    
}
const DivSevice = ({image, title, text}: DivService) => {
    return (
        <div className=" size-[400px]  bg-neutral-900 flex flex-col items-center  justify-between p-10 ">
            <div className="  flex justify-center items-center ">
            <img src={image} alt={title} className=" mr-5 size-20" />
            <h3 className="  z-10 relative  font-bold  text-2xl  text-center  ">{title}</h3>
            </div>
            
            <p className=" text-xl text-center ">{text}</p>
        </div>
    );
}

export default DivSevice;

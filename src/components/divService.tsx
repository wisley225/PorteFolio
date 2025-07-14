
type DivService={
    text:string
    image:string
    title:string
    
}
const DivSevice = ({image, title, text}: DivService) => {
    return (
        <div className="bg-black w-full lg:w-[400px] h-auto lg:h-[400px] bg-neutral-900 flex flex-col items-center justify-between p-4 sm:p-6 md:p-8 lg:p-10 gap-4 sm:gap-6">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-5">
                <img src={image} alt={title} className="size-12 sm:size-16 md:size-20" />
                <h3 className="font-bold text-lg sm:text-xl md:text-2xl text-center z-10 relative">{title}</h3>
            </div>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center leading-relaxed">{text}</p>
        </div>
    );
}

export default DivSevice;

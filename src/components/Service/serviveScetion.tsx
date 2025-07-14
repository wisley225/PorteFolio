import DivWeb from "./divWeb"


type ServiceSection ={
    title:string,
    description:string
}

const ServiceSection=({title,description}:ServiceSection)=>{
return <>
<div className="  ">
    <h1 className=" border-b-2 w-72 max-[320px]:w-auto pb-2  text-2xl font-black"> {title} </h1>
    <p className="w-1/3  my-10 max-[768px]:w-2/3 max-[425px]:w-full  "> {description} </p>

<div>
    
</div>
    <div className="flex gap-10  flex-wrap justify-center">

 <DivWeb/>
<DivWeb/>
<DivWeb/>
    </div>
</div>


</>

}

export default ServiceSection



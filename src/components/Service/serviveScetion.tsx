import DivWeb from "./divWeb"


type ServiceSection ={
    title:string,
    description:string
}

const ServiceSection=({title,description}:ServiceSection)=>{
return <>
<div className="  ">
    <h1 className=" border-b-2 w-72 pb-2  text-2xl font-black"> {title} </h1>
    <p className="w-1/3  my-10"> {description} </p>

<div>
    
</div>
    <div className="">
<DivWeb/>
    </div>
</div>


</>

}

export default ServiceSection



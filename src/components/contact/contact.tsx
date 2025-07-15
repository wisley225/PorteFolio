import { useEffect, useRef, useState } from 'react';
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';
import TitleSection from '../titleSection';
import Navbar from '../navbar';
import { GoArrowUpRight } from 'react-icons/go'
import Description from '../description';
import Time from '../time';
import Footer from '../footer';
import type { Users } from '../../types/types';
import axios from 'axios';

const Contact = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [countryIso, setCountryIso] = useState('ci');
  const [formdata,setformData]=useState<Users >({
    nom:'',
    prenom:'',
    email:'',
    contact:'',
    message:''
  })
  const [error,setError]=useState({ type:'',text:''})

  useEffect(() => {
    if (inputRef.current) {
    const iti = intlTelInput(inputRef.current, {
  initialCountry:countryIso,
  nationalMode: false,
  separateDialCode: true, // <-- important
  utilsScript:
    'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js',
} as any);

      const updateDialCode = () => {
        const data = iti.getSelectedCountryData();
        setCountryIso(data.iso2 ?? 'ci')
    };

      inputRef.current.addEventListener('countrychange', updateDialCode);

      // Valeur initiale
      updateDialCode();
    }
  }, []);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value, name } = e.target;
    setformData(prev => ({
      ...prev,
      [name]: value
    }));

   
  }

 const handleSubmite = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let contactValue = formdata.contact;
    if (inputRef.current) {
      // @ts-ignore
      const iti = window.intlTelInputGlobals && window.intlTelInputGlobals.getInstance ? window.intlTelInputGlobals.getInstance(inputRef.current) : null;
      if (iti && iti.getNumber) {
        contactValue = iti.getNumber(); // numéro au format international
      } else {
        contactValue = inputRef.current.value;
      }
    }
    const data = {
      ...formdata,
      contact: contactValue
    };
    

    if (data) {
      const validerNom=/^[A-Z]{1,20}$/;
      const validerTextarea= /^[A-Za-z0-9 .,;:!?()'\"\\n\\r-]{1,500}$/

      if ((validerNom.test(data.nom) && validerNom.test(data.prenom)) ) {
             if(validerTextarea.test(data.message)){
            const reponse= await axios.post('http://localhost:3000/users', data)
            console.log(reponse.data)
            setError({type:'succes',text:' inscription reussi avec succes !!'})

      }
      else{
              setError({type:'error',text:' Veuillez saisir votre message (1 à 500 caractères).Les balises < et > ne sont pas autorisées.'})
      }
      }
  
      else{
      setError({type:'error',text:'nom et prenom .seule lettre en majuscule sont autorisés'})
      }
 
    
if (error.type) {
   alert(error.text)
}

    }
  }

 return (

    <>
    <Navbar/>
<div className='bg-black text-white pt-20 sm:pt-32 md:pt-48 px-4 sm:px-6 md:px-10 overflow-x-none'>
<TitleSection text='Contact'/>
<h2 className='text-2xl sm:text-3xl font-bold border-b-2 w-32 sm:w-40 mb-6 sm:mb-10'>Discutons</h2>
<div className='flex flex-col lg:flex-row gap-8 lg:gap-12 h-auto'>

<div className='w-full lg:w-1/2 text-center lg:text-left'>
    <h3 className='text-2xl sm:text-3xl font-bold mb-4 sm:mb-6'>Envoyer moi un message</h3>
    <p className='text-sm sm:text-base lg:text-lg max-w-md mx-auto lg:mx-0 lg:max-w-none my-6 sm:my-10'> 
    </p>
</div>


<div className='w-full lg:w-1/2'>
    <form onSubmit={(e) => handleSubmite(e)} className='w-full flex flex-col items-center lg:items-start'>
      <div className='w-full flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 lg:gap-10 border-b-2 pb-6'>
        <input  
          type="text" 
          placeholder='Prénom'  
          name='nom'
          className='w-full sm:w-52 outline-none h-10 bg-black placeholder:text-white border-b-2 pb-2 text-sm sm:text-base'
          onChange={(e)=>handleChange(e)}
          required
        />
        <input  
          type="text"  
          name='prenom'
          placeholder='Nom de Famille' 
          className='w-full sm:w-52 outline-none h-10 bg-black placeholder:text-white border-b-2 pb-2 text-sm sm:text-base'
          onChange={(e)=>handleChange(e)}
          required
           
        />
        <input  
          type="email" 
          placeholder='Email' 
          name='email'
          className='w-full sm:w-52 outline-none h-10 bg-black placeholder:text-white border-b-2 pb-2 text-sm sm:text-base'
          onChange={(e)=>handleChange(e)}
          required
          
     />
        <input 
          id="phone" 
          type="tel" 
          name='contact'
          onChange={(e)=>handleChange(e)}
          ref={inputRef} 
          className='w-full sm:w-52 outline-none h-10 bg-black placeholder:text-white border-b-2 pb-2 text-sm sm:text-base'
          required
        />
        <textarea 
          name="message" 
          placeholder='Votre message' 
          id="" 
          className='outline-none w-full lg:w-[458px] h-32 sm:h-40 bg-black placeholder:text-white border-b-2 pb-2 text-sm sm:text-base resize-none'
          onChange={(e)=>handleChange(e)}
          required
         
      />

   <span className={error.type === 'error' ? "text-red-600" : 'text-green-600'}>{error.text}</span>

      </div>
       
      <button type='submit' className='border flex items-center gap-2 text-base sm:text-xl px-4 sm:px-5 my-6 sm:my-10 cursor-pointer py-2 hover:bg-neutral-800 transition-all self-end'> 
        <span>Envoyer le message</span> 
        <GoArrowUpRight className='text-xl sm:text-2xl' /> 
      </button>

    </form>
</div>

</div>
<Description
 text1="Let's Reach Out and Bring Your Vision to Life"
 text2='Your Vision , My Expertise'
 text3="I'm excited to hear about your project and how we can collaborate to bring your vision to life . let's connect
 to explore how my expertise can trun your ideas into impactful digital solutions."
 text4="Reach out today for a free consultation and let's start crafting something extraordinary together."
 />
<Time/>
<Footer/>

</div>
 

    </>

);
};

export default Contact;

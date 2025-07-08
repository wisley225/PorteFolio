import { useEffect, useRef, useState } from 'react';
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';
import TitleSection from '../titleSection';
import Navbar from '../navbar';
import { GoArrowUpRight } from 'react-icons/go'
import Description from '../description';
import Time from '../time';
import Footer from '../footer';

const Contact = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dialCode, setDialCode] = useState('+225');
  const [countryIso, setCountryIso] = useState('ci');

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
        setDialCode(data.dialCode ? `+${data.dialCode}` : '');
        setCountryIso(data.iso2 ?? 'ci')
    };

      inputRef.current.addEventListener('countrychange', updateDialCode);

      // Valeur initiale
      updateDialCode();
    }
  }, []);

 return (

    <>
    <Navbar/>
<div className='bg-black text-white pt-48 px-10'>
<TitleSection text='Contact'/>
<h2 className='text-3xl font-bold border-b-2 w-40 mb-10'>Discutons</h2>
<div className='grid grid-cols-2 h-auto'>

<div>
    <h3 className='text-3xl font-bold '>Envoyer moi un message</h3>
    <p className=' w-96 my-10'> si vous avez des questions ou souhaitez simplement me controler , n'hésitez pas de m'envoyer un massage je serais tout ravis de vous aider ou de repondre avec vous</p>
</div>
    
 <div>
    <form action="  border">
        <div className='grid grid-cols-2 place-items-center  gap-10 pb-32 border-b-2'>
            <input  type="text" placeholder='Prenom'  className=' outline-none place w-72 h-10 bg-black placeholder:text-white border-b-2 pb-5'/>
      <input  type="text"  placeholder='Nom de Famille' className=' outline-none place w-72 h-10 bg-black placeholder:text-white border-b-2 pb-5 ' />
      <input  type="email" placeholder='Email' className=' outline-none place w-72 h-10 bg-black placeholder:text-white border-b-2 pb-5' />
      <input id="phone" type="tel" ref={inputRef} className=' outline-none place  w-72 h-10 bg-black placeholder:text-white border-b-2 pb-5'  />
      <textarea name="" placeholder='Votre message' id="" className=' outline-none place overflow-y-hidden w-72 h-10 bg-black placeholder:text-white border-b-2 pb-5'></textarea>
      
        </div>
      
      <button className='border ml-auto block flex items-end text-xl  px-5 my-10 cursor-pointer py-2 hover:bg-neutral-800 transition-all'> <span>Envoyer le message </span> <GoArrowUpRight className=' text-2xl' /> </button>

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

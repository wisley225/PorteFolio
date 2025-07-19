import Navbar from '../navbar';
import Footer from '../footer';
import Description from '../description';
import Time from '../time';
import TitleSection from '../titleSection';
import InfiniteMenu from './Infinitemenu';



const Work = () => {

const items = [
  {
    image: '/imagerie.png',
    link: 'http://imagerie-git-master-wisley225s-projects.vercel.app',
    title: 'Imagerie',
    description: ' technologie : Nextjs , tailwinds css'
  },
  {
    image: '/Gaming.png',
    link: 'https://site-gameing-gsap.vercel.app',
    title: 'GAMING',
    description: 'react + vite, gsap , tailwind css'
  },
  {
    image: '/landingPage1.png',
    link: 'https://mes-exercice.vercel.app',
    title: 'Landing Page',
    description: 'Technologie: html , tailwind'
  },

  {
    image: '/porteFolio.png',
    link: 'https://mon-portfolio-rose-nine.vercel.app',
    title: 'porteFolio',
    description: ' technologie: React+vite, tailwind css'
  },

  {
    image: '/weseemba1.png',
    link: 'https://formulaire-next-js-2.vercel.app',
    title: 'Weseemba',
    description: ' technologie: Nextjs , gsap, tailwind css'
  },
  {
    image: '/music.png',
    link: 'https://mes-exercice-taimwind6.vercel.app/',
    title: 'Music',
    description: ' technologie:html,tailwind css'
  },
  {
    image: '/burger.png',
    link: 'https://mes-exercice7.vercel.app//',
    title: 'home burger',
    description: ' technologie:html,tailwind css'
  }
];



    
    return (
        <div className='overflow-hidden bg-black text-white'>
        
            <Navbar/>
     <div className='pt-12 sm:pt-16 md:pt-18 lg:pt-20 px-4 sm:px-6 md:px-8 lg:px-10'>
        <TitleSection text=" Work"/>

           <ul className='flex justify-between items-start m-2 sm:m-3 md:m-4 lg:m-5'>
            
            <li>
              <span className='text-lg sm:text-xl md:text-2xl font-bold underline'> All Project</span>
         
            </li>

            <li className='text-lg sm:text-xl md:text-2xl font-bold underline'>10 Project  </li>
           </ul>

           
     </div>


     <div className="h-80 sm:h-96 md:h-[500px] lg:h-[550px] xl:h-[600px] relative">
      <InfiniteMenu items={items}/>
     </div>
          
      
      <Description
      text1='Crafting Digital Experiences with Artistic Precision'
      text2='Every Detail Matters'
      text3='Every website I create is a masterpiece of elegance , where avery
             detail is meticulously crafted to deliver an exceptional user experience'
      text4='With a commitment to unparalleled craftsmanship , i ensure aech Project is a Stunning blend of beauty and functionality, leaving a lasting impression that resonates'
      />   
      <Time/>
            <Footer/>
        </div>
    );
}

export default Work;

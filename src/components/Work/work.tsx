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
    link: 'https://google.com/',
    title: 'Item 1',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/400/400?grayscale',
    link: 'https://google.com/',
    title: 'Item 2',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/500/500?grayscale',
    link: 'https://google.com/',
    title: 'Item 3',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/600/600?grayscale',
    link: 'https://google.com/',
    title: 'Item 4',
    description: 'This is pretty cool, right?'
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

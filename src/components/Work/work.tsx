import Navbar from '../navbar';
import Divproject from '../divproject';
import Footer from '../footer';
import { IoIosArrowDown } from "react-icons/io";
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
        <div className='bg-black text-white '>
        
            <Navbar/>
     <div className='pt-20 px-10'>
        <TitleSection text=" Work"/>

           <ul className='flex justify-between  items-start'>
            
            <li>
            <ul>
            <li className='text-2xl font-bold border-b flex items-end justify-between w-40'> <span className=''> All Project</span> <IoIosArrowDown/>  </li>
            <li className=''>
               <ul className='absolute z-10 leading-10 text-xl border p-3 bg-black w-52 mt-5 rounded-xl '>
                <li>all</li>
                <li>Web App</li>
                <li>Website</li>
                <li>E-commerce</li>
                <li>Mobile App</li>
            </ul>
            </li> 
            
           </ul>
            </li>
            <li className='border-b text-2xl font-bold'>10 Project  </li>
           </ul>

           
     </div>


     <div style={{ height: '600px', position: 'relative' }}>
   <InfiniteMenu items={items}/>
   </div>
          
            {/* <div  className=''>
            <Divproject
             title='Fresh Pharma'
             genre=' site web'
             image='/imagerie.png'
             />
            </div> */}
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

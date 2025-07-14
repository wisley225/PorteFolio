
import gsap from "gsap";
import Description from "./description";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";
gsap.registerPlugin(ScrollTrigger)
import { useEffect,useRef, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

const Header = () => {
  const textRef = useRef<HTMLDivElement []>([])
  const textRef2 = useRef<HTMLDivElement>(null)
  const animeRef=useRef<HTMLDivElement>(null)
  const developerRef = useRef<HTMLSpanElement>(null);
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "developer";


  useEffect(() => {
    let timeout: any;
    let interval: any;

    // Curseur clignotant
    interval = setInterval(() => {
      setShowCursor((v) => !v);
    }, 500);

    function typeWriterLoop() {
      if (!developerRef.current) return;
      // Effet de saisie
      gsap.to({}, {
        duration: fullText.length * 0.12,
        repeat: 0,
        onUpdate: function () {
          if (developerRef.current) {
            const progress = this.progress();
            const currentLength = Math.floor(progress * fullText.length);
            developerRef.current.textContent = fullText.slice(0, currentLength);
          }
        },
        onComplete: function () {
          if (developerRef.current) {
            developerRef.current.textContent = fullText;
          }
          // Pause avant d'effacer
          timeout = setTimeout(eraseWriter, 1200);
        }
      });
      function eraseWriter() {
        gsap.to({}, {
          duration: fullText.length * 0.08,
          repeat: 0,
          onUpdate: function () {
            if (developerRef.current) {
              const progress = this.progress();
              const currentLength = fullText.length - Math.floor(progress * fullText.length);
              developerRef.current.textContent = fullText.slice(0, currentLength);
            }
          },
          onComplete: function () {
            if (developerRef.current) {
              developerRef.current.textContent = "";
            }
            // Pause avant de recommencer
            timeout = setTimeout(typeWriterLoop, 1200);
          }
        });
      }
    }
    typeWriterLoop();
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
   

     const ctx = gsap.context(() => {

    
      if (textRef.current && textRef2.current) {
      const splitText = new SplitType(textRef.current, { types: 'chars' })
      const splitText2 = new SplitType(textRef2.current, { types: 'chars' })
       let tl=gsap.timeline()

      tl.from(splitText.chars, {
        opacity:0,
       filter:'blur(40px)',
       duration:2,
       stagger:0.05,
   

        })
       .from(splitText2.chars,{
         opacity:0,
         filter:'blur(4px)',
         duration:1,
          stagger:0.05,
          scrollTrigger: {
             trigger: textRef2.current,
            
           }
       })
      

    }
      // Effet de saisie GSAP sur 'developer'
      if (developerRef.current) {
        const text = "developer";
        developerRef.current.textContent = "";
        gsap.to(textRef.current, {
          duration: text.length * 0.12,
          repeat: 0,
          onUpdate: function () {
            if (developerRef.current) {
              const progress = this.progress();
              const currentLength = Math.floor(progress * text.length);
              developerRef.current.textContent = text.slice(0, currentLength);
            }
          },
          onComplete: function () {
            if (developerRef.current) {
              developerRef.current.textContent = text;
            }
          }
        });
      }
      })
      return ()=>ctx.revert()
  },[])

    return (

      <>
 <div ref={animeRef} className=" overflow-x-hidden  px-10  ">
         <div className="  flex flex-col h-screen max-[1272px]:h-[720px]  max-[970px]:h-[600px]   justify-col  justify-end text-white ">
       <div ref={(el) => {
            if (el) textRef.current[0] = el;
          }}  className="flex  max-[375px]:text-[3rem]   max-[600px]:justify-center max-[1170px]:text-[9rem] max-[1090px]:text-[8rem] max-[970px]:text-[7rem] max-[870px]:text-[6rem] max-[790px]:text-[5rem] max-[700px]:text-[4rem]  items-center w-full text-[11rem] uppercase ">
        <span className=" font-bold scale-y-[1.5] tracking-tighter">full</span>
        <div className=" flex-1  mx-20 max-[600px]:mx-2 h-4  bg-white  " />
        <span className=" font-bold scale-y-[1.5] tracking-tighter">stack</span>
       </div>

        <div  className="    flex  justify-between   gap-2  max-[1272px]:flex-wrap  "> 
          <div className=" w-[890px]  flex  justify-between items-end  h-60  max-[970px]:h-32  max-[375px]:h-28  px-2  ">
            <span ref={developerRef} className="  block max-[1170px]:text-[9rem] max-[1090px]:text-[8rem] max-[970px]:text-[7rem] max-[870px]:text-[6rem] max-[790px]:text-[5rem] max-[700px]:text-[4rem] max-[375px]:text-[3rem] w-full   text-[9.8rem] uppercase   font-bold tracking-tighter scale-y-[1.7]" ></span> 
            <span className={"blinking-cursor  bg-white scale-y-[1.7]"} style={{opacity: showCursor ? 1 : 0}}>|</span>
         </div>

     
        <div ref={textRef2} className="   flex flex-col justify-end  gap-10   w-96  "> 
       <div>
        <p className="   ">
            <i className="  "> Bonjour , je m'appelle Guei Lewis et je suis un 
         Full Stack qui crée des  applications web  et mobil
          elegantes avec php, Reactjs ,nestjs ,nextJs,flutter</i>
          </p>
        </div>  
        
          <Link  to='/work'  className=" border-b-2 flex   w-full justify-between  "><span className="">See my work </span> <GoArrowUpRight className="text-2xl "/></Link>
        <div>
   
        </div>
        </div>
         
        </div>
    
         </div>
          
        <Description
        text1="Specialized in developing seamless web & mobile experiences"
        text2="Innovation web & Mobile Solutions"
        text3="  My project feacture Sleek, responsive designs with php, react, flutter,nextJs, nestjs and php engaging and 
              intuitive  user interface."
        text4=" On back-end,i use NestjS to build robust, scalable solutions,
                  ensuring Seamless integration to innovation , delivering solutions
                   that are both functional and delightful. "
       />
  </div>
      </>
       
   
  
  );
}

export default Header;

// Style du curseur clignotant
// Tu peux déplacer ce style dans App.css si tu préfères
<style>{`
.blinking-cursor {
  display: inline-block;
  width: 0.5em;
  animation: blink 1s steps(1) infinite;
}
@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}
`}</style>

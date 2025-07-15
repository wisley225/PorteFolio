import Threads from "./Threads";
import '../App.css'
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Loader = () => {
  const developerRef = useRef<HTMLSpanElement>(null);
  const fullText = "...";

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

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
    };
  }, []);

  return (
    <>
      <div className="flex items-center">
        <div className=" absolute my-soul-regular flex text-white text-7xl font-black ml-10 ">
          <h1 className="">
            soyez les bienvenu
          </h1>
          <span ref={developerRef}>...</span>
        </div>
        <div className="h-screen flex bg-black w-full">
          <Threads
            amplitude={1}
            distance={0}
            enableMouseInteraction={true}
          />
        </div>
      </div>
    </>
  );
}

export default Loader;
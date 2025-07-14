import Navbar from "./navbar"
import TitleSection from "./titleSection"
import Time from "./time"
import Footer from "./footer"
import ReactPaginate from "react-paginate"
import { useState, useEffect } from "react"
import { GoArrowLeft } from "react-icons/go"
import { GoArrowRight } from "react-icons/go"

interface ImageItem {
  id: number;
  img: string;
}

const WorkDetails = () => {
  const [products, setProducts] = useState<ImageItem[]>([]);
  const [currentItems, setCurrentItems] = useState<ImageItem[]>([]);
  const [itemsOffset, setItemsOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  // Déplacer l'initialisation des données dans useEffect
  useEffect(() => {
    const tabImage: ImageItem[] = [
      { id: 1, img: '/imagerie.png' },
      { id: 2, img: '/imagerie.png' },
      { id: 3, img: '/imagerie.png' },
      { id: 4, img: '/imagerie.png' },
      { id: 5, img: '/imagerie.png' },
      { id: 6, img: '/imagerie.png' },
      { id: 7, img: '/imagerie.png' }
    ];
    setProducts(tabImage);
  }, []);

  useEffect(() => {
    const endOffset = itemsOffset + 3; // itemsPerPage was removed, hardcoded to 3
    setCurrentItems(products.slice(itemsOffset, endOffset));
    setPageCount(Math.ceil(products.length / 3)); // itemsPerPage was removed, hardcoded to 3
  }, [itemsOffset, products]);

  const handlePageClick = (event: {
    selected: number;
  }) => {
    const newOffset = (event.selected * 3) % products.length; // itemsPerPage was removed, hardcoded to 3
    setItemsOffset(newOffset);
  };

  return (
    <>
      <div className="bg-black text-white">
        <Navbar />
        <div className="pt-20 sm:pt-32 px-4 sm:px-10">
          <TitleSection text="Optimisation Challenge" />
          <h2 className="text-xl sm:text-3xl font-bold w-8/12 sm:w-2/12 border-b-4 pb-3">Overview</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-20 mb-10">
            <div>
              <p className="my-6 sm:my-10 text-sm sm:text-base">
                Optimal Challenge is a real-time trading platform with react and NestJs,
                using WebSockets for live data updates. I contributed to creating a seamless
                user experience for traking trading challenges ans performance.
              </p>
              <p className="my-2 text-sm sm:text-base">
                Responsive design across all devices. Smooth animations and transition, Real-time Trading Data.
              </p>
            </div>
            <div>
              <ul className="flex flex-col justify-between h-full gap-2 sm:gap-0">
                <li className="text-base sm:text-xl"> <strong> Category: </strong> <span> Web App</span></li>
                <li className="text-base sm:text-xl"> <strong> Date: </strong> <span> jan 2025</span></li>
                <li className="text-base sm:text-xl"> <strong>Technologies : </strong> <span> ReactJs, NestJs,Tailwind CSS, Gsap,nest</span></li>
                <li className="text-base sm:text-xl"> <strong> Live Preview: </strong> <span> Coming Soon</span></li>
              </ul>
            </div>
          </div>
            {/* Pagination positionnée après les images */}
          <div className="items-center py-4 sm:py-8 ">
            <ReactPaginate
              breakLabel="..."
              nextLabel={
                <div className="flex items-center border gap-1 sm:gap-2 text-base sm:text-xl p-1 sm:p-2">
                <span> Next Project </span>
                <span> <GoArrowRight className="text-2xl sm:text-3xl"/></span>
                </div>
              }
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              pageCount={pageCount}
              previousLabel={
                <div className="flex items-center gap-1 sm:gap-2 border text-base sm:text-xl p-1 sm:p-2">
                <span> <GoArrowLeft className="text-2xl sm:text-3xl"/> </span>
                <span>Prev Project</span>
                </div>
              }
              renderOnZeroPageCount={null}
              containerClassName="w-full flex justify-between items-center"
              pageClassName="hidden" // Cache les numéros de page
              pageLinkClassName="text-white hover:text-gray-300"
              previousClassName="text-white rounded flex items-center"
              nextClassName="text-white rounded flex items-center"
              breakClassName="hidden" // Cache aussi les "..."
              activeClassName="bg-blue-600 text-white"
              disabledClassName="text-gray-500 cursor-not-allowed"
            />
          </div>
          <ul className="gap-4 sm:gap-10 flex flex-col sm:flex-row justify-center my-10 sm:my-20">
            {currentItems.map((image) => (
              <li key={image.id} className="border h-40 sm:h-[400px] w-full sm:w-auto flex items-center justify-center">
                <img src={image.img} alt="" className="w-full h-full object-cover object-center" />
              </li>
            ))}
          </ul>
        </div>
        <Time />
        <Footer />
      </div>
    </>
  );
};

export default WorkDetails
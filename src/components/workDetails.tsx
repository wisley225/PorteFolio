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
  const [itemsPerPage, setItemsPerPage] = useState(3); // Changé de 10 à 2 pour afficher 2 images par page
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
    const endOffset = itemsOffset + itemsPerPage;
    setCurrentItems(products.slice(itemsOffset, endOffset));
    setPageCount(Math.ceil(products.length / itemsPerPage));
  }, [itemsOffset, itemsPerPage, products]);

  const handlePageClick = (event: {
    selected: number;
  }) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemsOffset(newOffset);
  };

  return (
    <>
      <div className="bg-black text-white">
        <Navbar />
        <div className="pt-32 px-10">
          <TitleSection text="Optimisation Challenge" />
          <h2 className="text-3xl font-bold w-2/12 border-b-4 pb-3">Overview</h2>

          <div className="grid grid-cols-2 gap-20 mb-10">
            <div className="">
              <p className="my-10">
                Optimal Challenge is a real-time trading platform with react and NestJs,
                using WebSockets for live data updates. I contributed to creating a seamless
                user experience for traking trading challenges ans performance.
              </p>
              <p className="my-2">
                Responsive design across all devices.Smooth animations and transition , Real-time Trading Data.
              </p>
            </div>
            <div className="">
              <ul className="flex flex-col justify-between h-full">
                <li className="text-xl"> <strong> Category: </strong> <span> Web App</span></li>
                <li className="text-xl"> <strong> Date: </strong> <span> jan 2025</span></li>
                <li className="text-xl"> <strong>Technologies : </strong> <span> ReactJs, NestJs,Tailwind CSS, Gsap,nest</span></li>
                <li className="text-xl"> <strong> Live Preview: </strong> <span> Coming Soon</span></li>
              </ul>
            </div>
          </div>
            {/* Pagination positionnée après les images */}
          <div className=" items-center py-8 ">
            <ReactPaginate
              breakLabel="..."
              nextLabel={
                <div className="flex items-center border gap-2 text-xl p-2">
                <span> Next Project </span>
                <span> <GoArrowRight className="text-3xl"/></span>
                </div>
              }
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              pageCount={pageCount}
              previousLabel={
                <div className="flex items-center gap-2 border text-xl p-2">
                <span> <GoArrowLeft className="text-3xl"/> </span>
                <span>Prev Project</span>
                </div>
              }
              renderOnZeroPageCount={null}
              containerClassName="w-full flex justify-between items-center"
              pageClassName="hidden" // Cache les numéros de page
              pageLinkClassName="text-white hover:text-gray-300"
              previousClassName="  text-white  rounded flex items-center"
              nextClassName=" text-white  rounded flex items-center"
              breakClassName="hidden" // Cache aussi les "..."
              activeClassName="bg-blue-600 text-white"
              disabledClassName="text-gray-500 cursor-not-allowed"
            />
          </div>
          <ul className="gap-10 flex justify-center my-20">
            {currentItems.map((image) => (
              <li key={image.id} className="border h-[400px]">
                <img src={image.img} alt="" className="size-full object-center items-center" />
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
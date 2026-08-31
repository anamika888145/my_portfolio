import { useState } from "react";
import OverlayMenu from "./OverlayMenu";
import { img } from "framer-motion/client";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  const[imgsrc, setImgSrc] =useState("/my pic.png")

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50
        80 backdrop-blur-md 
        border-b border-white/10
        transition-transform duration-300
        ${visible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between flex justify-start items-center flex-1">
       <div className="flex flex-col items-start mr-auto group cursor-pointer">
  <h1 className="text-2xl md:text-3xl font-black tracking-[0.2em] text-white uppercase transition-colors duration-300 group-hover:text-purple-700">
    PORTFOLIO
  </h1>
  <span className="h-[3px] w-8 bg-black mt-1 transition-all duration-300 group-hover:w-55"></span>
</div><br />
      
         
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            {["Home", "About", "Skills", "Projects", "Contact"].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="relative transition-colors duration-300
                    hover:text-white
                    after:absolute after:left-0 after:-bottom-1
                    after:h-[2px] after:w-0 after:bg-white
                    after:transition-all after:duration-300
                    hover:after:w-full text-black"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
           
           
          </button>
        </div>
        
      </nav>

      {menuOpen && <OverlayMenu />}
    </>
  );


}
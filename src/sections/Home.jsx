import { useState } from 'react';

export default function Home() {
  // Image toggle karne ke liye state yahan rahegi
  const [imgsrc, setImgSrc] = useState('/my pic.png');

  return (
    <section id="home" className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center px-8 md:px-16 relative bg- rgb(11, 11, 67)-500">
      
      {/* Left Side: Text and Intro */}
      <div className="flex-1 flex flex-col justify-center text-center md:text-left order-2 md:order-1 relative z-20">
        <h2 className="text-2xl md:text-4xl text-white font-medium mb-2">
          Hello, I'm
        </h2>
        <h1 className="text-4xl md:text-6xl font-bold text-black mb-4 tracking-wide">
          Anamika Maurya
        </h1>
       <h3 className="text-2xl md:text-4xl font-extrabold tracking-[0.2em] mb-6 bg-gradient-to-r from-rose-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent uppercase text-center md:text-left">
           Full Stack Developer
        </h3>

        <p className="text-white-500 max-w-lg text-base md:text-lg mb-8 leading-relaxed">
          My name is Anamika Maurya. I am learning web development course. I live in Lalbagh, Lucknow.
        </p>
        <div>
         <div className="relative inline-flex group">
  <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 via-cyan-400 to-emerald-500 rounded-full blur-md opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
  
  <button 
    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
    className="relative inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-teal-400 bg-neutral-950 rounded-full tracking-wider border border-teal-500/30 transition-all duration-300 group-hover:text-white group-hover:border-transparent group-hover:scale-105 active:scale-95 shadow-purple-xl"
  >
    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></span>
    
    
    <span className="flex items-center gap-2">
      Contact me
      <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
      </svg>
    </span>
  </button>
</div>
        </div>
      </div>

    
      <div className="flex-1 flex justify-center lg:justify-end items-center order-1 md:order-2 relative group">

  <div className="absolute w-72 h-72 md:w-85 md:h-85 bg-purple-500/5 rounded-full blur-2xl group-hover:scale-110 transition-all duration-700 ease-in-out"></div>

  <div className="relative w-68 h-68 md:w-86 md:h-86 flex items-center justify-center">

    <div className="absolute inset-0 border-2 border-dashed border-amber-500/60 rounded-full animate-[spin_12s_linear_infinite]"></div>

    <div className="absolute inset-3 bg-gradient-to-tr from-amber-600 via-stone-300 to-purple-500 rounded-full transition-all duration-700 p-[4px] shadow-lg group-hover:shadow-[0_0_30px_rgba(217,119,6,0.3)]">
      
      <div 
        className="w-full h-full bg-white rounded-full overflow-hidden relative z-10"
        onMouseEnter={() => setImgSrc('/second.png')} 
        onMouseLeave={() => setImgSrc('/my pic.png')}
      >
        <img 
          src={imgsrc} 
          alt="My portfolio picture" 
          className="w-full h-full object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-700 animate-[spin_4s_ease_infinite]" 
        />
      </div>

    </div>
  </div>

</div>

    </section>
  );
}



export default function About() {
  return (
    <section id="about" className="min-h-screen w-full flex flex-col items-center justify-center px-6 md:px-20 py-20 to-slate-50 relative overflow-hidden bg- rgb(11, 11, 67)-500">
      
    
      <div className="absolute top-10 left-10 w-72 h-72 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

    
      <div className="text-center mb-16 relative z-10 group">

  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-semibold tracking-wider uppercase mb-4 shadow-sm transition-transform duration-300 hover:scale-105">
    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse"></span>
    Get To Know
  </div>

  <h2 className="text-4xl md:text-6xl font-black text-white-900 tracking-tight mb-4 relative">
    About{" "}
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500  bg-[size:200%_auto] animate-[pulse_3s_infinite]">
      Me
    </span>
  </h2>

  <div className="relative w-24 h-1.5 mx-auto bg-slate-100 rounded-full overflow-hidden shadow-inner">
    <div className="absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full transition-all duration-500 ease-out group-hover:w-full"></div>
  </div>
</div>

    
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center gap-16 relative z-10">
        

        <div className="flex-1 flex justify-center w-full">
          <div className="relative group w-72 h-72 md:w-85 md:h-85">
          
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500 to-blue-600 rounded-3xl opacity-25 blur-xl group-hover:opacity-40 transition duration-500"></div>
            
    
            <div className="relative w-full h-full bg-gradient-to-tr from-slate-900 to-slate-800 rounded-3xl shadow-2xl transform md:rotate-3 group-hover:rotate-0 transition-all duration-500 flex flex-col items-center justify-center p-8 text-white border border-slate-700/50">
              <div className="w-16 h-16 bg-teal-500/10 rounded-2xl flex items-center justify-center mb-6 border border-teal-500/20">
                <span className="text-2xl text-teal-400 font-mono">&lt;/&gt;</span>
              </div>
              <p className="text-2xl font-bold tracking-wide font-sans mb-2">
                Passionate
              </p>
              <p className="text-teal-400 font-mono text-sm tracking-wider uppercase">
                About Coding
              </p>
            </div>
          </div>
        </div>

      
        <div className="flex-1 text-center lg:text-left">
          <h3 className="text-2xl md:text-3xl font-bold text-white-800 mb-6 leading-tight">
            I am a <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Full Stack Web Developer</span> based in Lucknow.
          </h3>
          
          <div className="space-y-4 text-white-600 text-base md:text-lg leading-relaxed mb-10">
            <p>
              My name is Anamika Maurya. I live in Lalbagh, Lucknow. Currently, I am pursuing a web development course and learning new technologies. I love creating modern, clean, and responsive websites.
            </p>
            <p className="font-medium text-white-700">
              I am learning to work on both frontend (HTML, CSS, JavaScript, React) and backend so that I can design and deploy complete websites on my own.
            </p>
          </div>

  
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-200">
          
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4 hover:-translate-y-1 transition-all duration-300">
              <div className="p-2.5 bg-teal-50 rounded-xl text-teal-600 font-bold text-lg">📍</div>
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-0.5">Location</span>
                <p className="text-slate-800 font-semibold text-sm md:text-base">Lucknow, India</p>
              </div>
            </div>
            
            
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4 hover:-translate-y-1 transition-all duration-300">
              <div className="p-2.5 bg-blue-50 rounded-xl text-blue-600 font-bold text-lg">🎓</div>
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-0.5">Education</span>
                <p className="text-slate-800 font-semibold text-sm md:text-base">Full Stack Web Dev</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
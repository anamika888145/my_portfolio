import React from 'react';

export default function Projects() {
  
  const projectData = [
    {
      title: "E-Commerce Website",
      description: "A full-featured online shopping store with cart functionality, secure checkout, and interactive product filtering.",
      tags: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
      liveLink: "#",
      githubLink: "#",
      image: "/E-commerce.jpeg" 
    },
    {
      title: "Real-time Chat Application",
      description: "A smooth instant messaging app featuring secure private rooms, instant typing indicators, and beautiful dark mode UI.",
      tags: ["React.js", "Socket.io", "Express", "Tailwind"],
      liveLink: "#",
      githubLink: "#",
      image: "/real time chat.jpg" // Sample Image
    },
    {
      title: "Weather Forecasting Dashboard",
      description: "An interactive dashboard retrieving current dynamic climate patterns globally using live open meteorological API channels.",
      tags: ["JavaScript", "React", "Tailwind CSS", "REST API"],
      liveLink: "#",
      githubLink: "#",
      image: "/Weather.jpg" // Sample Image
    }
  ];

  return (
    <section id="projects" className="min-h-screen w-full  text-white py-20 px-6 md:px-16 flex flex-col justify-center items-center relative overflow-hidden bg- rgb(11, 11, 67)-500">
    
<div className="absolute bg-gradient-to-tr from-cyan-500/10 to-teal-500/5 rounded-full blur-[140px] -z-10 animate-[pulse_6s_infinite_ease-in-out] "></div>
<div className="absolute bg-gradient-to-br from-purple-500/10 to-pink-500/5 rounded-full blur-[140px] -z-10 animate-[pulse_8s_infinite_ease-in-out_1s]"></div>


<div className="text-center mb-20 flex flex-col items-center select-none">

  <span className="text-xs font-bold uppercase tracking-[0.25em] mb-3 block animate-fade-in ">
    Selected Creations
  </span>


  <h2 className="text-4xl md:text-6xl font-black tracking-tight bg-gradient-to-r from-gray-900 via-teal-600 to-blue-600 dark:from-white dark:via-teal-400 dark:to-cyan-400 bg-clip-text text-transparent uppercase bg-[length:200%_auto] animate-[shine_5s_linear_infinite] pb-2">
    My Projects
  </h2>
  

  <div className="relative mt-4 h-[3px] w-16 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 rounded-full overflow-hidden">
  
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent -translate-x-full animate-[shimmer_2.5s_infinite]"></div>
  </div>
</div>
    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {projectData.map((project, index) => (
          <div 
            key={index} 
            className="group bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl hover:border-teal-500/30 transition-all duration-500 transform hover:-translate-y-2 flex flex-col"
          >
            
            <div className="relative h-48 w-full overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-60"></div>
            </div>


            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold tracking-wide text-white group-hover:text-teal-400 transition-colors duration-300 mb-2">
                {project.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tIndex) => (
                  <span 
                    key={tIndex} 
                    className="text-xs font-semibold bg-teal-500/10 text-teal-400 px-2.5 py-1 rounded-md border border-teal-500/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            
              <div className="flex items-center gap-4 mt-auto border-t border-white/5 pt-4">
              
                <a 
                  href={project.liveLink} 
                  className="flex-1 text-center bg-teal-500 hover:bg-teal-600 text-neutral-950 font-bold text-xs uppercase py-2.5 px-4 rounded-xl transition duration-300 shadow-md shadow-teal-500/10 hover:shadow-teal-500/30"
                >
                  Live Demo
                </a>
            
                <a 
                  href={project.githubLink} 
                  className="flex-1 text-center bg-neutral-900 border border-white/10 hover:border-white/30 text-white font-medium text-xs uppercase py-2.5 px-4 rounded-xl transition duration-300 "
                >
                  GitHub
                </a>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
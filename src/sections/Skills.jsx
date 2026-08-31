import React from 'react';

export default function Skills() {

  const skillData = [
    { name: "HTML5", percentage: "95%", color: "from-orange-500 to-amber-500", icon: "🌐" },
    { name: "CSS3 & Tailwind", percentage: "90%", color: "from-blue-500 to-teal-500", icon: "🎨" },
    { name: "JavaScript", percentage: "85%", color: "from-yellow-400 to-amber-500", icon: "⚡" },
    { name: "React.js", percentage: "80%", color: "from-cyan-400 to-blue-600", icon: "⚛️" },
    { name: "Node.js", percentage: "75%", color: "from-green-500 to-emerald-600", icon: "🟢" },
    { name: "MongoDB", percentage: "70%", color: "from-emerald-500 to-green-700", icon: "🍃" }
  ];

  return (
    <section id="skills" className="min-h-screen w-full text-white py-20 px-6 md:px-16 flex flex-col justify-center items-center relative overflow-hidden bg- rgb(11, 11, 67)-500">
      
    
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>

  
      <div className="text-center md:text-left mb-16 flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-widest">
          My Skills
        </h2>
        <div className="h-[4px] w-24 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full mt-3 shadow-lg shadow-teal-500/50"></div>
      </div>

  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {skillData.map((skill, index) => (
          <div 
            key={index} 
            className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl hover:border-teal-500/30 transition-all duration-300 transform hover:-translate-y-1 group"
          >
      
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl group-hover:scale-125 transition-transform duration-300">{skill.icon}</span>
                <span className="text-lg font-semibold tracking-wide group-hover:text-purple-400 transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
              <span className="text-sm font-bold bg-teal-500/10 text-teal-400 px-3 py-1 rounded-full border border-teal-500/20">
                {skill.percentage}
              </span>
            </div>

    
            <div className="w-full bg-neutral-900 h-3 rounded-full overflow-hidden border border-white/5 shadow-inner">
              <div 
                style={{ width: skill.percentage }}
                className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
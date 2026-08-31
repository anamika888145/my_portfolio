import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Thank you! Your message has been sent.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 bg- rgb(11, 11, 67)-500">
      <div className="max-w-4xl mx-auto px-4">
        
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-4">
          Get In <span className="text-blue-600">Touch</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
          Feel free to reach out for collaborations or just to say hi!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          

          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Email Me</h3>
              <p className="text-gray-600 dark:text-gray-400">anamika26lko@gamil.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Location</h3>
              <p className="text-gray-600 dark:text-gray-400">Lucknow, India</p>
            </div>
          </div>

       <form 
  onSubmit={handleSubmit} 
  className="relative bg-white/60 dark:bg-gray-900/60 backdrop-blur-md p-8 rounded-2xl border border-gray-200/50 dark:border-gray-700/30 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:shadow-[0_20px_50px_rgba(59,130,246,0.08)] dark:hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] transform hover:-translate-y-1 transition-all duration-500 ease-out overflow-hidden group"
>
  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

  <div className="mb-5">
    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
      Name
    </label>
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      required
      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700/60 rounded-xl bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:outline-none transition-all duration-200"
      placeholder="Your Name"
    />
  </div>

  <div className="mb-5">
    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
      Email
    </label>
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      required
      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700/60 rounded-xl bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:outline-none transition-all duration-200"
      placeholder="name@example.com"
    />
  </div>

  <div className="mb-6">
    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
      Message
    </label>
    <textarea
      name="message"
      value={formData.message}
      onChange={handleChange}
      required
      rows="4"
      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700/60 rounded-xl bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:outline-none transition-all duration-200 resize-none"
      placeholder="Your Message..."
    ></textarea>
  </div>

  <button
  type="submit"
  className="w-full group relative overflow-hidden rounded-xl bg-gray-900 dark:bg-white px-4 py-3.5 text-sm font-semibold text-white dark:text-gray-900 shadow-md transition-all duration-300 active:scale-[0.98]"
>

  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />

  <span className="relative z-10 flex items-center justify-center gap-2 transition-transform duration-300 group-hover:scale-[1.02]">
    <span className="tracking-wide">Send Message</span>
    
  
    <svg 
      className="w-4 h-4 transform transition-all duration-300 ease-out translate-x-0 group-hover:translate-x-1 group-hover:text-white" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  </span>
  <span className="absolute -inset-px rounded-xl border border-transparent group-hover:border-blue-500/30 transition-all duration-300" />
</button>

</form>


    </div>
  </div>

  <div className="mt-16 w-full max-w-4xl mx-auto px-4">
    <div className="w-full border-t border-gray-200 dark:border-gray-800 transition-colors duration-300"></div>
    <p className="mt-6 text-sm sm:text-base font-medium text-gray-500 dark:text-gray-400 text-center tracking-wide">
      &copy; {new Date().getFullYear()} Designed & Built by Me.
    </p>
  </div>
</section>

  );
};

export default Contact;
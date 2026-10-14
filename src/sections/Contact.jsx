
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  async function handleSubmit(event) {
    event.preventDefault();

    setLoading(true);
    setStatusMessage('');
    setIsSuccess(false);

    try {
      const response = await fetch(
        'https://brevo-email-backend-pojd.onrender.com/api/contact',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          data.message ||
            data.error ||
            'Failed to send your message. Please try again.'
        );
      }

      setIsSuccess(true);
      setStatusMessage(
        data.message || 'Your message has been sent successfully!'
      );

      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (err) {
      console.error('Contact form error:', err);

      setIsSuccess(false);
      setStatusMessage(
        err.message ||
          'Unable to send your message. Please try again later.'
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="py-16 bg-[rgb(11,11,67)]"
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-4">
          Get In <span className="text-blue-400">Touch</span>
        </h2>

        <p className="text-center text-gray-300 mb-12">
          Feel free to reach out for collaborations or just to say hi!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Email Me
              </h3>
              <p className="text-gray-300">
                anamika26lko@gmail.com
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Location
              </h3>
              <p className="text-gray-300">
                Lucknow, India
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="relative bg-white/60 dark:bg-gray-900/60 backdrop-blur-md p-8 rounded-2xl border border-gray-200/50 dark:border-gray-700/30 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:shadow-[0_20px_50px_rgba(59,130,246,0.08)] dark:hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] transform hover:-translate-y-1 transition-all duration-500 ease-out overflow-hidden group"
          >
            {/* Top Gradient Border */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Name */}
            <div className="mb-5">
              <label
                htmlFor="contact-name"
                className="block text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-2"
              >
                Name
              </label>

              <input
                id="contact-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="name"
                className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700/60 rounded-xl bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:outline-none transition-all duration-200"
                placeholder="Your Name"
              />
            </div>

            {/* Email */}
            <div className="mb-5">
              <label
                htmlFor="contact-email"
                className="block text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-2"
              >
                Email
              </label>

              <input
                id="contact-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
                className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700/60 rounded-xl bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:outline-none transition-all duration-200"
                placeholder="name@example.com"
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label
                htmlFor="contact-message"
                className="block text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-2"
              >
                Message
              </label>

              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700/60 rounded-xl bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:outline-none transition-all duration-200 resize-none"
                placeholder="Your Message..."
              />
            </div>

            {/* Success / Error Message */}
            {statusMessage && (
              <p
                role="status"
                aria-live="polite"
                className={`mb-4 text-sm font-medium ${
                  isSuccess
                    ? 'text-green-600 dark:text-green-400'
                    : 'text-red-600 dark:text-red-400'
                }`}
              >
                {statusMessage}
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full group/button relative overflow-hidden rounded-xl bg-gray-900 dark:bg-white px-4 py-3.5 text-sm font-semibold text-white dark:text-gray-900 shadow-md transition-all duration-300 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 opacity-0 group-hover/button:opacity-100 transition-opacity duration-500 ease-out" />

              <span className="relative z-10 flex items-center justify-center gap-2 transition-transform duration-300 group-hover/button:scale-[1.02]">
                <span className="tracking-wide">
                  {loading ? 'Sending...' : 'Send Message'}
                </span>

                {!loading && (
                  <svg
                    className="w-4 h-4 transform transition-all duration-300 ease-out group-hover/button:translate-x-1 group-hover/button:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                )}
              </span>

              <span className="absolute -inset-px rounded-xl border border-transparent group-hover/button:border-blue-500/30 transition-all duration-300" />
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 w-full max-w-4xl mx-auto px-4">
        <div className="w-full border-t border-gray-700 transition-colors duration-300" />

        <p className="mt-6 text-sm sm:text-base font-medium text-gray-300 text-center tracking-wide">
          &copy; {new Date().getFullYear()} Designed &amp; Built by Me.
        </p>
      </div>
    </section>
  );
};

export default Contact;

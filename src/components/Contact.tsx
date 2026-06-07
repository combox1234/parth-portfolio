import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, User, AtSign, MessageSquare, Type } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      await emailjs.sendForm(
        'service_qkbicqh',
        'template_6srabxi',
        formRef.current!,
        'jrLWe4CbOOmIIJQa3'
      );

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setSubmitError('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">Get In Touch</h2>
        <div className="w-20 h-1 bg-teal-500 mx-auto mb-12"></div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-gray-900/60 backdrop-blur-lg rounded-2xl p-6 border border-gray-800 shadow-xl space-y-5">
                <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>

                {/* Email */}
                <div className="flex items-start">
                  <div className="mt-1 mr-4 flex-shrink-0 bg-teal-500/10 p-3 rounded-full border border-teal-500/20">
                    <Mail className="text-teal-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-300 mb-1">Email</h4>
                    <a href="mailto:01parthpatil10@gmail.com" className="text-white hover:text-teal-400 transition-colors">
                      01parthpatil10@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className="mt-1 mr-4 flex-shrink-0 bg-teal-500/10 p-3 rounded-full border border-teal-500/20">
                    <Phone className="text-teal-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-300 mb-1">Phone</h4>
                    <a href="tel:+919881746442" className="text-white hover:text-teal-400 transition-colors">
                      +91 9881746442
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start">
                  <div className="mt-1 mr-4 flex-shrink-0 bg-teal-500/10 p-3 rounded-full border border-teal-500/20">
                    <MapPin className="text-teal-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-300 mb-1">Location</h4>
                    <p className="text-white">Pune, Maharashtra, India</p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start">
                  <div className="mt-1 mr-4 flex-shrink-0 bg-pink-500/10 p-3 rounded-full border border-pink-500/20">
                    <svg className="text-pink-400 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.33 3.608 1.306.975.975 1.244 2.242 1.306 3.608.058 1.266.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.33 2.633-1.306 3.608-.975.975-2.242 1.244-3.608 1.306-1.266.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.33-3.608-1.306-.975-.975-1.244-2.242-1.306-3.608C2.175 15.747 2.163 15.368 2.163 12s.012-3.584.07-4.85c.062-1.366.33-2.633 1.306-3.608C4.514 2.493 5.781 2.225 7.147 2.163 8.413 2.105 8.793 2.163 12 2.163zm0-2.163C8.756 0 8.333.014 7.052.072 5.77.13 4.602.395 3.635 1.362c-.967.967-1.232 2.135-1.29 3.417C2.014 5.667 2 6.09 2 9.333v5.334c0 3.243.014 3.666.072 4.948.058 1.282.323 2.45 1.29 3.417.967.967 2.135 1.232 3.417 1.29 1.282.058 1.705.072 4.948.072s3.666-.014 4.948-.072c1.282-.058 2.45-.323 3.417-1.29.967-.967 1.232-2.135 1.29-3.417.058-1.282.072-1.705.072-4.948s-.014-3.666-.072-4.948c-.058-1.282-.323-2.45-1.29-3.417-.967-.967-2.135-1.232-3.417-1.29C15.667.014 15.244 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-300 mb-1">LinkedIn</h4>
                    <a href="https://www.linkedin.com/in/parth-patil-910482292" target="_blank" className="text-white hover:text-pink-400 transition-colors">
                      LinkedIn
                    </a>
                  </div>
                </div>

                {/* Threads */}

                {/* LeetCode */}
                <div className="flex items-start">
                  <div className="mt-1 mr-4 flex-shrink-0 bg-orange-500/10 p-3 rounded-full border border-orange-500/20">
                    <svg className="text-orange-400 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.372 0 0 5.372 0 12c0 6.627 5.372 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12zm1.125 16.5l-5.25-3 5.25-3v6zm5.625-3c0 1.654-1.346 3-3 3h-1.5V10.5H16.5c1.654 0 3 1.346 3 3z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-300 mb-1">LeetCode</h4>
                    <a href="https://leetcode.com/u/skullroster/" target="_blank" className="text-white hover:text-orange-400 transition-colors">
                      LeetCode
                    </a>
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex items-start">
                  <div className="mt-1 mr-4 flex-shrink-0 bg-gray-500/10 p-3 rounded-full border border-gray-500/20">
                    <svg className="text-gray-400 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.304.762-1.604-2.665-.304-5.467-1.334-5.467-5.933 0-1.31.468-2.381 1.235-3.221-.123-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.51 11.51 0 013.003-.404 11.53 11.53 0 013.003.404c2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.807 5.625-5.48 5.921.43.371.823 1.104.823 2.227v3.301c0 .32.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-300 mb-1">GitHub</h4>
                    <a href="https://github.com/combox1234" target="_blank" className="text-white hover:text-gray-400 transition-colors">
                      GitHub
                    </a>
                  </div>
                </div>



              </div>
            </div>

            {/* Form + Map */}
            <div className="lg:col-span-3 space-y-6">
              {/* Form Card */}
              <div className="bg-gray-900/60 backdrop-blur-lg rounded-2xl p-6 border border-gray-800 shadow-xl">
                <h3 className="text-xl font-bold text-white mb-6">Send Me a Message</h3>

                {submitSuccess ? (
                  <div className="bg-teal-500/10 p-4 rounded-lg text-teal-400 mb-6 border border-teal-500/20">
                    ✅ Thank you for your message! I'll get back to you soon.
                  </div>
                ) : submitError ? (
                  <div className="bg-red-500/10 p-4 rounded-lg text-red-400 mb-6 border border-red-500/20">
                    {submitError}
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="relative">
                        <User className="absolute left-3 top-3 text-gray-400" size={18} />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-800 text-white"
                        />
                      </div>
                      <div className="relative">
                        <AtSign className="absolute left-3 top-3 text-gray-400" size={18} />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-800 text-white"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="relative">
                      <Type className="absolute left-3 top-3 text-gray-400" size={18} />
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-800 text-white"
                      />
                    </div>

                    {/* Message */}
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 text-gray-400" size={18} />
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Your Message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-800 text-white resize-none"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`px-6 py-3 bg-teal-500 hover:bg-teal-600 text-black rounded-lg transition-all font-medium shadow-md hover:shadow-lg flex items-center justify-center transform hover:scale-105 ${
                        isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} className="mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

              {/* Map Card */}
              <div className="bg-gray-900/80 backdrop-blur-lg rounded-2xl p-1 border border-gray-700 shadow-xl overflow-hidden">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.4321955802394!2d73.85674331536868!3d18.52043028739657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c06f508d8d17%3A0xdbc1cbf2745a491!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1691672939339!5m2!1sen!2sin"
                  width="100%"
                  height="350"
                  className="rounded-2xl border-0"
                  loading="lazy"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

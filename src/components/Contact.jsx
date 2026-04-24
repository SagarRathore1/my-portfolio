import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill all fields.');
      return;
    }
    setStatus('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-darkBg">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-16">Get In Touch</h2>
        
        <div className="bg-gray-50 dark:bg-darkCard p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-800">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea 
                rows="5"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary outline-none transition-all"
                placeholder="How can we work together?"
              ></textarea>
            </div>
            {status && <p className="text-sm font-medium text-primary">{status}</p>}
            <button type="submit" className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-blue-600 transition-colors shadow-md">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 border-t border-gray-200 dark:border-gray-800 pt-8 pb-8 text-center">
        <div className="flex justify-center space-x-6 text-2xl mb-4 text-gray-600 dark:text-gray-400">
          <a href="#" className="hover:text-primary transition-colors"><FaGithub /></a>
          <a href="#" className="hover:text-primary transition-colors"><FaLinkedin /></a>
          <a href="mailto:sagarfromdtu@gmail.com" className="hover:text-primary transition-colors"><FaEnvelope /></a>
        </div>
        <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Sagar. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;
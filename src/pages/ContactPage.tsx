import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Linkedin, Github } from 'lucide-react';
import useSEO from '../hooks/useSEO';

const ContactPage: React.FC = () => {
  useSEO({
    title: 'Contact — Rahul Dadhich',
    description: 'Get in touch for collaboration, project inquiries, or just to say hello.',
    url: 'https://rahuldadhich.dev/contact',
  });
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, message } = formData;
    const phoneNumber = '919351876909';

    const whatsappMessage = `Hello Rahul!

I would like to get in touch through your portfolio.

👤 Name: ${name}
📧 Email: ${email}

💬 Message:
${message}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, '_blank');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="relative w-full py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-[#F9F9F7] overflow-hidden sharp-corners">
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Page Header */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="mb-12 md:mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#111111]/20 bg-[#CC0000]/20 text-[#CC0000] tracking-widest uppercase text-xs mb-8">
            GET IN TOUCH
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-[#111111] leading-tight mb-6">
            Let's Build Something
          </h1>
          <p className="text-base md:text-lg text-[#737373] leading-relaxed">
            Have a project in mind? I'd love to hear from you. Get in touch and let's create something great together.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-6 mb-12 md:mb-16"
        >
          <motion.a
            variants={itemVariants}
            href="mailto:rahuldadhich1517@gmail.com"
            className="p-6 border border-[#111111] hover:bg-[#F5F5F5] transition-colors flex items-start gap-4"
          >
            <Mail size={24} className="text-[#CC0000] mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-serif font-bold text-[#111111] mb-2">Email</h3>
              <p className="text-sm text-[#737373]">
                rahuldadhich1517@gmail.com
              </p>
              <p className="text-xs text-[#737373] mt-2">
                I typically respond within 24 hours
              </p>
            </div>
          </motion.a>

          <motion.a
            variants={itemVariants}
            href="https://wa.me/919351876909"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 border border-[#111111] hover:bg-[#F5F5F5] transition-colors flex items-start gap-4"
          >
            <MessageCircle size={24} className="text-[#CC0000] mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-serif font-bold text-[#111111] mb-2">
                WhatsApp
              </h3>
              <p className="text-sm text-[#737373]">+91 9351876909</p>
              <p className="text-xs text-[#737373] mt-2">
                Quick chat for urgent matters
              </p>
            </div>
          </motion.a>

          <motion.a
            variants={itemVariants}
            href="https://www.linkedin.com/in/rahul-dadhich-a40b67200"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 border border-[#111111] hover:bg-[#F5F5F5] transition-colors flex items-start gap-4"
          >
            <Linkedin size={24} className="text-[#CC0000] mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-serif font-bold text-[#111111] mb-2">
                LinkedIn
              </h3>
              <p className="text-sm text-[#737373]">@rahul-dadhich</p>
              <p className="text-xs text-[#737373] mt-2">
                Connect for professional opportunities
              </p>
            </div>
          </motion.a>

          <motion.a
            variants={itemVariants}
            href="https://github.com/rahuldadhich1517-sys"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 border border-[#111111] hover:bg-[#F5F5F5] transition-colors flex items-start gap-4"
          >
            <Github size={24} className="text-[#CC0000] mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-serif font-bold text-[#111111] mb-2">
                GitHub
              </h3>
              <p className="text-sm text-[#737373]">@rahuldadhich1517-sys</p>
              <p className="text-xs text-[#737373] mt-2">
                Check out my open source work
              </p>
            </div>
          </motion.a>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="p-6 sm:p-8 md:p-10 border border-[#111111]"
        >
          <h2 className="font-serif text-2xl font-bold text-[#111111] mb-8">
            Send me a message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#737373] uppercase tracking-wider mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-[#111111] bg-transparent px-4 py-3 text-[#111111] font-medium placeholder-[#737373] focus:outline-none focus:border-[#CC0000] transition-colors"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#737373] uppercase tracking-wider mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-[#111111] bg-transparent px-4 py-3 text-[#111111] font-medium placeholder-[#737373] focus:outline-none focus:border-[#CC0000] transition-colors"
                placeholder="you@example.com"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-[#737373] uppercase tracking-wider mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full border border-[#111111] bg-transparent px-4 py-3 text-[#111111] font-medium placeholder-[#737373] focus:outline-none focus:border-[#CC0000] transition-colors resize-none"
                placeholder="Tell me about your project or idea..."
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn--primary w-full">
              Send via WhatsApp
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;

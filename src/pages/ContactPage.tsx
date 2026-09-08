import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Linkedin, Github, Phone, Clock, Send, ArrowUpRight, ShieldCheck } from 'lucide-react';
import useSEO from '../hooks/useSEO';

const ContactPage: React.FC = () => {
  useSEO({
    title: 'Contact & Inquiries — Rahul Dadhich',
    description: 'Get in touch with Rahul Dadhich for technical inquiries, freelance projects, full-time opportunities, or collaborations.',
    url: 'https://rahuldadhich.dev/contact',
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

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

    const whatsappMessage = `Hello Rahul!\n\nI would like to get in touch through your portfolio.\n\n👤 Name: ${name}\n📧 Email: ${email}\n\n💬 Message:\n${message}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, '_blank');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="w-full bg-bg-primary text-text-primary">
      {/* Top Broadsheet Dateline */}
      <div className="border-b border-border-primary bg-bg-surface py-2.5 px-4 sm:px-6 lg:px-12 font-mono text-2xs uppercase tracking-widest text-text-muted font-semibold">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-accent inline-block" />
            <span className="font-bold text-text-primary">CONTACT // GET IN TOUCH</span>
          </div>
          <span className="font-bold text-text-primary">STATUS: AVAILABLE FOR NEW OPPORTUNITIES</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20">
        {/* Section Kicker */}
        <div className="section-kicker mb-6">
          <span>CONTACT & INQUIRIES</span>
        </div>

        {/* Page Headline */}
        <div className="mb-10 sm:mb-14 max-w-5xl">
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary leading-[1.02] uppercase">
            Get in Touch: <br />
            <span className="italic font-normal font-serif text-text-muted lowercase">let's talk</span>{' '}
            projects & opportunities.
          </h1>
          <p className="font-body text-base sm:text-xl text-text-primary leading-relaxed mt-4 max-w-3xl font-normal">
            Whether you have an interesting project, a question about my work, or want to discuss full-time roles,
            feel free to reach out directly through the form or my direct channels.
          </p>
        </div>

        {/* Double Rule */}
        <div className="editorial-double-rule mb-12" />

        {/* Two-Column Broadsheet Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column (5 cols): Communication Ledger */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border-2 border-border-primary bg-bg-secondary p-6 sm:p-8 space-y-6">
              <div className="border-b border-border-primary pb-3 flex items-center justify-between font-mono text-xs font-bold uppercase tracking-widest text-text-primary">
                <span>DIRECT CHANNELS</span>
                <span className="text-accent font-bold">ACTIVE</span>
              </div>

              <div className="divide-y divide-border-subtle">
                {/* Email */}
                <div className="py-4">
                  <div className="flex items-center gap-2 font-mono text-2xs uppercase text-text-muted font-bold mb-1">
                    <Mail size={13} className="text-accent" />
                    <span>EMAIL</span>
                  </div>
                  <a
                    href="mailto:rahuldadhich1517@gmail.com"
                    className="font-serif text-lg font-bold text-text-primary hover:text-accent transition-colors block"
                  >
                    rahuldadhich1517@gmail.com
                  </a>
                  <p className="font-mono text-[10px] text-text-muted font-semibold mt-1">
                    Personal inbox • Replies usually within 24 hours
                  </p>
                </div>

                {/* WhatsApp */}
                <div className="py-4">
                  <div className="flex items-center gap-2 font-mono text-2xs uppercase text-text-muted font-bold mb-1">
                    <MessageSquare size={13} className="text-[#16A34A]" />
                    <span>WHATSAPP</span>
                  </div>
                  <a
                    href="https://wa.me/919351876909?text=Hello%20Rahul!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-lg font-bold text-text-primary hover:text-accent transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>+91 9351876909</span>
                    <ArrowUpRight size={14} className="text-text-primary" />
                  </a>
                  <p className="font-mono text-[10px] text-text-muted font-semibold mt-1">
                    Great for quick chats and questions
                  </p>
                </div>

                {/* LinkedIn */}
                <div className="py-4">
                  <div className="flex items-center gap-2 font-mono text-2xs uppercase text-text-muted font-bold mb-1">
                    <Linkedin size={13} className="text-accent" />
                    <span>LINKEDIN</span>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/rahul-dadhich-a40b67200"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-lg font-bold text-text-primary hover:text-accent transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>linkedin.com/in/rahul-dadhich</span>
                    <ArrowUpRight size={14} className="text-text-primary" />
                  </a>
                </div>

                {/* GitHub */}
                <div className="py-4">
                  <div className="flex items-center gap-2 font-mono text-2xs uppercase text-text-muted font-bold mb-1">
                    <Github size={13} className="text-accent" />
                    <span>GITHUB</span>
                  </div>
                  <a
                    href="https://github.com/rahuldadhich1517-sys"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-lg font-bold text-text-primary hover:text-accent transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>github.com/rahuldadhich1517-sys</span>
                    <ArrowUpRight size={14} className="text-text-primary" />
                  </a>
                </div>
              </div>

              {/* Security & Confidentiality Notice */}
              <div className="p-4 bg-bg-surface border border-border-subtle flex items-start gap-3">
                <ShieldCheck size={18} className="text-[#16A34A] flex-shrink-0 mt-0.5" />
                <div className="font-mono text-2xs text-text-primary font-medium leading-relaxed">
                  <strong className="font-bold">NOTE:</strong> All inquiries go directly to Rahul Dadhich. Your project details and messages remain completely private.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Editorial Form */}
          <div className="lg:col-span-7">
            <div className="border-2 border-border-primary bg-bg-secondary p-6 sm:p-10 lg:p-12">
              <div className="border-b border-border-primary pb-4 mb-8">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent block mb-1">
                  DIRECT MESSAGE FORM
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-text-primary">
                  Send a Message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="page-contact-name"
                    className="block font-mono text-2xs font-bold uppercase tracking-widest text-text-primary mb-2"
                  >
                    01 // YOUR NAME *
                  </label>
                  <input
                    type="text"
                    id="page-contact-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-border-primary bg-bg-primary px-4 py-3.5 font-sans text-sm text-text-primary placeholder:text-text-muted/70 focus:outline-none focus:border-accent"
                    placeholder="John Doe / Company"
                  />
                </div>

                <div>
                  <label
                    htmlFor="page-contact-email"
                    className="block font-mono text-2xs font-bold uppercase tracking-widest text-text-primary mb-2"
                  >
                    02 // YOUR EMAIL *
                  </label>
                  <input
                    type="email"
                    id="page-contact-email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-border-primary bg-bg-primary px-4 py-3.5 font-sans text-sm text-text-primary placeholder:text-text-muted/70 focus:outline-none focus:border-accent"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="page-contact-message"
                    className="block font-mono text-2xs font-bold uppercase tracking-widest text-text-primary mb-2"
                  >
                    03 // YOUR MESSAGE *
                  </label>
                  <textarea
                    id="page-contact-message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border border-border-primary bg-bg-primary px-4 py-3.5 font-sans text-sm text-text-primary placeholder:text-text-muted/70 focus:outline-none focus:border-accent resize-none"
                    placeholder="Tell me about your project scope, stack, or what you'd like to discuss..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn--primary btn--lg w-full flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  <span>Send Message via WhatsApp</span>
                </button>

                <p className="font-mono text-[10px] text-text-muted font-bold text-center uppercase tracking-widest">
                  OPENS DIRECTLY IN WHATSAPP • QUICK RESPONSE
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

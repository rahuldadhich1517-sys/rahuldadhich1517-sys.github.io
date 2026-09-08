import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, ArrowUpRight, Clock, Send } from 'lucide-react';

export const Contact: React.FC = () => {
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
  };

  return (
    <section
      id="contact"
      className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-bg-primary text-text-primary border-b border-border-primary"
    >
      <div className="max-w-7xl mx-auto">
        {/* Editorial Section Kicker & Header Bar */}
        <div className="flex flex-wrap items-center justify-between border-b border-border-subtle pb-3 mb-8 sm:mb-12">
          <div className="section-kicker">
            <span>CONTACT // GET IN TOUCH</span>
          </div>
          <span className="font-mono text-2xs text-text-muted font-semibold uppercase tracking-widest">
            DIRECT CHANNELS
          </span>
        </div>

        {/* Section Headline */}
        <div className="mb-10 sm:mb-14 max-w-4xl">
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-text-primary leading-[1.04] uppercase">
            Let's Build Something <br />
            <span className="italic font-normal font-serif text-text-muted lowercase">great</span>{' '}
            together.
          </h2>
          <p className="font-body text-base sm:text-xl text-text-primary leading-relaxed mt-4 font-normal">
            Have a project in mind, a question about my work, or want to discuss an opportunity?
            Send me a message using the form below or reach out directly via WhatsApp or Email.
          </p>
        </div>

        {/* Double Rule */}
        <div className="editorial-double-rule mb-12" />

        {/* Two-Column Broadsheet Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column (5 cols): Office Coordinates & Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border border-border-primary bg-bg-secondary p-6 sm:p-8 space-y-6">
              <div className="border-b border-border-primary pb-3 flex items-center justify-between">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-text-primary">
                  CONTACT DETAILS
                </span>
                <span className="font-mono text-2xs text-accent font-bold">AVAILABLE</span>
              </div>

              {/* Channel Entries */}
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
                  <span className="font-mono text-[10px] text-text-muted font-semibold mt-1 block">
                    Usually replies within 24 hours
                  </span>
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
                  <span className="font-mono text-[10px] text-text-muted font-semibold mt-1 block">
                    Best for quick questions and direct chats
                  </span>
                </div>

                {/* Phone */}
                <div className="py-4">
                  <div className="flex items-center gap-2 font-mono text-2xs uppercase text-text-muted font-bold mb-1">
                    <Phone size={13} className="text-accent" />
                    <span>PHONE</span>
                  </div>
                  <a
                    href="tel:+919351876909"
                    className="font-serif text-lg font-bold text-text-primary hover:text-accent transition-colors block"
                  >
                    +91 9351876909
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Editorial Dispatch Form */}
          <div className="lg:col-span-7">
            <div className="border-2 border-border-primary bg-bg-secondary p-6 sm:p-8 lg:p-10">
              <div className="border-b border-border-primary pb-4 mb-6">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent block mb-1">
                  MESSAGE // DIRECT FORM
                </span>
                <h3 className="font-serif text-2xl font-bold text-text-primary">
                  Send a Message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block font-mono text-2xs font-bold uppercase tracking-widest text-text-primary mb-2"
                  >
                    01 // YOUR NAME *
                  </label>
                  <input
                    type="text"
                    id="contact-name"
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
                    htmlFor="contact-email"
                    className="block font-mono text-2xs font-bold uppercase tracking-widest text-text-primary mb-2"
                  >
                    02 // YOUR EMAIL *
                  </label>
                  <input
                    type="email"
                    id="contact-email"
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
                    htmlFor="contact-message"
                    className="block font-mono text-2xs font-bold uppercase tracking-widest text-text-primary mb-2"
                  >
                    03 // YOUR MESSAGE *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border border-border-primary bg-bg-primary px-4 py-3.5 font-sans text-sm text-text-primary placeholder:text-text-muted/70 focus:outline-none focus:border-accent resize-none"
                    placeholder="Tell me about your project, timeline, or what you're looking to build..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn--primary btn--lg w-full flex items-center justify-center gap-2"
                >
                  <Send size={15} />
                  <span>Send Message via WhatsApp</span>
                </button>

                <p className="font-mono text-[10px] text-text-muted font-semibold text-center uppercase tracking-wider">
                  Opens WhatsApp with your pre-filled message directly to Rahul Dadhich
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

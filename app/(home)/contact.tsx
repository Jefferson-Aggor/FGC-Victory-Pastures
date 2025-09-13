'use client';
import { PhoneIcon } from 'lucide-react';
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { useState } from 'react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: '',
  });

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', contact: '', message: '' });
  };

  const searchQuery = 'Fountain Gate Chapel Adenta, Ghana';

  return (
    <section className="p-24 bg-[#f5f4f2]">
      <h2 className="max-w-6xl text-xl md:text-6xl tracking-tighter text-neutral-800 dark:text-neutral-200">
        Reach out <span className="font-semibold">to us.</span>
      </h2>
      <p className="max-w-5xl mb-10 text-muted-foreground">
        Join us for our upcoming worship services, special events, and community
        gatherings.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-4">
              <PhoneIcon className="size-4 text-neutral-600" />
              <p className="text-neutral-700">0200929450 | 0241602332</p>
            </div>
            <div className="flex items-center space-x-4">
              <BsWhatsapp className="size-4 text-green-600" />
              <p className="text-neutral-700">0500335646</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex space-x-2">
                <BsFacebook className="text-blue-600" />
                <BsInstagram className="text-pink-600" />
              </div>
              <p className="text-neutral-700">@fgcadenta</p>
            </div>
          </div>
          <iframe
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              searchQuery
            )}&output=embed`}
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Church Location"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-neutral-800 mb-6">
            Leave us a message
          </h3>
          <form onSubmit={(e) => handleSubmit(e)} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-neutral-700 mb-2"
              >
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="contact"
                className="block text-sm font-medium text-neutral-700 mb-2"
              >
                Contact Information *
              </label>
              <input
                type="text"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
                required
                placeholder="Phone number or email address"
                className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-neutral-700 mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                placeholder="Type your message here..."
                className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-vertical"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 outline-none"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

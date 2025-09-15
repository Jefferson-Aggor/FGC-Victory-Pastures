import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Church Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Fountain Gate Chapel - Victory Pastures
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                A community of believers committed to worship, fellowship, and
                service in Adenta, Ghana.
              </p>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="hover:scale-110 transition-transform duration-200"
                  aria-label="Facebook"
                >
                  <BsFacebook />
                </a>
                <a
                  href="#"
                  className="hover:scale-110 transition-transform duration-200"
                  aria-label="Instagram"
                >
                  <BsInstagram />
                </a>
                <a
                  href="#"
                  className="hover:scale-110 transition-transform duration-200"
                  aria-label="WhatsApp"
                >
                  <BsWhatsapp />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#ministries"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Ministries
                </a>
              </li>
              <li>
                <a
                  href="#sermons"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Sermons
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h4 className="font-semibold mb-6">Service Times</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Sunday Services</p>
                  <div className="flex flex-col space-y-4">
                    <div>
                      <p className="text-neutral-300 text-sm">
                        Fire Assembly: 7:00 AM
                      </p>
                      <p className="text-neutral-300 text-sm">
                        Rain Assembly: 9:00 AM
                      </p>
                      <p className="text-neutral-300 text-sm">
                        Youth Church: 1:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Teaching Service</p>
                  <p className="text-neutral-300 text-sm">
                    Wednesdays: 6:30 PM
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Prayer Services</p>
                  <p className="text-neutral-300 text-sm">
                    Victory Hour: 9:00 AM - 11:00 AM
                  </p>
                  <p className="text-neutral-300 text-sm">
                    Issachar Force: 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-neutral-300 text-sm leading-relaxed">
                    Adenta, Greater Accra Region
                    <br />
                    Ghana
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-neutral-300">0200929450</p>
                  <p className="text-neutral-300">0241602332</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <BsWhatsapp fill="#51a2ff" />
                <p className="text-neutral-300 text-sm">0500335646</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <p className="text-neutral-300 text-sm">info@fgcadenta.org</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-neutral-400 text-sm">
              <span>
                © {currentYear} Fountain Gate Chapel Adenta. All rights
                reserved.
              </span>
            </div>

            <div className="flex items-center space-x-6 text-neutral-400 text-sm">
              <a href="#privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

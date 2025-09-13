import { Phone, Mail, MapPin, Clock, Heart } from 'lucide-react';

// Mock social media icons
const FacebookIcon = () => (
  <div className="w-5 h-5 bg-blue-600 rounded-sm"></div>
);
const InstagramIcon = () => (
  <div className="w-5 h-5 bg-pink-600 rounded-sm"></div>
);
const WhatsAppIcon = () => (
  <div className="w-5 h-5 bg-green-600 rounded-sm"></div>
);
const YoutubeIcon = () => <div className="w-5 h-5 bg-red-600 rounded-sm"></div>;

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
              <h3 className="text-2xl font-bold mb-2">Fountain Gate Chapel</h3>
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
                  <FacebookIcon />
                </a>
                <a
                  href="#"
                  className="hover:scale-110 transition-transform duration-200"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="#"
                  className="hover:scale-110 transition-transform duration-200"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon />
                </a>
                <a
                  href="#"
                  className="hover:scale-110 transition-transform duration-200"
                  aria-label="YouTube"
                >
                  <YoutubeIcon />
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
                  <p className="font-medium">Sunday Worship</p>
                  <p className="text-neutral-300 text-sm">8:00 AM & 10:00 AM</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Wednesday Bible Study</p>
                  <p className="text-neutral-300 text-sm">6:30 PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Friday Night Service</p>
                  <p className="text-neutral-300 text-sm">7:00 PM</p>
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
                <WhatsAppIcon />
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

      {/* Newsletter Signup */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <h4 className="font-semibold mb-2">Stay Connected</h4>
              <p className="text-neutral-300 text-sm">
                Get updates on church events, sermons, and community news.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-md text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-md font-medium transition-colors whitespace-nowrap">
                Subscribe
              </button>
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

            <div className="flex items-center space-x-2 text-neutral-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>for the community</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

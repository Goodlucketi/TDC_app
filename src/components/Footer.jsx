import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 md:px-20 text-center">
      <div className=" mx-auto grid md:grid-cols-3 gap-10 ">
        {/* Company Info */}
            <div>
                <h3 className="text-xl font-bold text-white mb-4">
                    Technology Development Company
                </h3>
                <p className="text-sm text-gray-400">
                    Driving industrial automation through innovation, expertise, and seamless technology solutions.
                </p>
            </div>

            {/* Quick Links */}
            <div>
                <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                <ul className="space-y-2">
                    <li><a href="/" className="hover:text-white">Home</a></li>
                    <li><a href="/about" className="hover:text-white">About Us</a></li>
                    <li><a href="/services" className="hover:text-white">Services</a></li>
                    <li><a href="/industries" className="hover:text-white">Industries</a></li>
                    <li><a href="/contact" className="hover:text-white">Contact</a></li>
                </ul>
            </div>

            {/* Social Media */}
            <div>
                <h4 className="text-lg font-semibold text-white mb-4">Connect With Us</h4>
                <div className="flex gap-4 text-xl justify-center">
                    <a href="#" className="hover:text-blue-500 "><FaFacebook /></a>
                    <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
                    <a href="#" className="hover:text-blue-600"><FaLinkedin /></a>
                    <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
                </div>
            </div>
        </div>

        {/* Bottom Note */}
        <div className="border-t border-gray-700 mt-5 pt-6 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Technology Development Company. All rights reserved.
        </div>
    </footer>
  );
};

export default Footer;

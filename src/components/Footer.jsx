import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
    const navLinks = [
        { to: "home", label: "Home" },
        { to: "about", label: "About" },
        { to: "services", label: "What We Do" },
        { to: "industries", label: "Industries" },
        { to: "projects", label: "Projects" },
        { to: "case-studies", label: "Case Studies" },
        { to: "contact", label: "Contact" },
    ];

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
                        {navLinks.map((link) => (
                            <li key={link.to}>
                            <Link
                                to={link.to}
                                smooth={true}
                                duration={500}
                                // offset={-70} // Adjust for fixed navbar height
                                className=" hover:text-white transition-all duration-300 cursor-pointer"
                            >
                                {link.label}
                            </Link>
                            </li>
                        ))}
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

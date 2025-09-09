import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import Logo from "/assets/tdc_logo.png";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

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
    <nav className="py-3 px-6 md:px-20 flex items-center justify-between shadow-md bg-white sticky top-0 z-100">
      {/* Logo */}
      <div className="logo">
        <img src={Logo} alt="TDC Logo" className="w-28 h-auto" />
      </div>

      {/* Toggle Button (only on mobile) */}
      <div className="md:hidden cursor-pointer" onClick={handleToggle}>
        {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
      </div>

      {/* Navigation Links */}
      <ul
        className={`absolute md:static top-16 left-0 w-full h-screen md:h-auto md:w-auto md:flex md:items-center gap-6 list-none transition-all duration-300 ${
          isOpen ? "flex flex-col py-6 px-6 bg-slate-100/95 shadow-md" : "hidden md:flex"
        }`}
      >
        {navLinks.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              smooth={true}
              duration={500}
              // offset={-70} // Adjust for fixed navbar height
              className="block p-3 rounded-md hover:bg-blue-800 hover:text-white transition-all duration-300"
              onClick={() => setIsOpen(false)} // close menu after click
            >
              {link.label}
            </Link>
          </li>
        ))}

        <li>
          <button className="bg-blue-800 py-2 px-4 rounded-md text-white hover:bg-blue-500 transition-all duration-300">
            Get Started
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

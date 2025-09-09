import { FaRobot, FaNetworkWired, FaServer, FaShieldAlt, FaCloud } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "Automation Systems Design",
      desc: "Custom-built industrial automation solutions tailored to your production needs, reducing human error and maximizing efficiency.",
      icon: <FaRobot className="text-blue-800 text-5xl" />,
    },
    {
      title: "Smart Factory Integration",
      desc: "Seamless integration of IoT devices, AI-driven monitoring, and real-time analytics to create a truly connected factory.",
      icon: <FaNetworkWired className="text-blue-800 text-5xl" />,
    },
    {
      title: "Cloud & Data Infrastructure",
      desc: "Secure and scalable cloud-based systems to store, process, and analyze industrial data with high availability.",
      icon: <FaCloud className="text-blue-800 text-5xl" />,
    },
    {
      title: "System Security",
      desc: "Advanced cybersecurity solutions to protect your industrial systems from unauthorized access and digital threats.",
      icon: <FaShieldAlt className="text-blue-800 text-5xl" />,
    },
    {
      title: "Maintenance & Support",
      desc: "24/7 technical support, upgrades, and proactive maintenance to ensure maximum uptime of your automation solutions.",
      icon: <FaServer className="text-blue-800 text-5xl" />,
    },
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Our Services
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        We deliver a complete suite of technology solutions that transform industries into smarter, faster, and more resilient enterprises.
      </p>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center py-8 px-4 bg-gray-50 shadow-sm rounded-2xl hover:shadow-md transition duration-300"
          >
                <div className="flex justify-center items-center bg-blue-100 rounded-xl p-2 mb-6">
                    {service.icon}
                </div>
                <h3 className="text-lg leading-tight font-semibold text-gray-800 mb-4">
                    {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    {service.desc}
                </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

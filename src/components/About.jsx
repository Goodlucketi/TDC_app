import { FaChartLine, FaCogs, FaIndustry, FaTools } from "react-icons/fa";
const About = () => {
     const services = [
    {
      title: "Industrial Automation",
      desc: "We design and deploy smart automation systems that reduce downtime and maximize efficiency in manufacturing plants.",
      icon: <FaIndustry className="text-blue-800 text-3xl mb-4" />,
    },
    {
      title: "Smart Factory Integration",
      desc: "Helping industries transition from manual processes to connected, intelligent systems with IoT and AI-driven solutions.",
      icon: <FaCogs className="text-blue-800 text-3xl mb-4" />,
    },
    {
      title: "Data-Driven Solutions",
      desc: "Unlock the power of data with real-time analytics and predictive maintenance tools for sustainable operations.",
      icon: <FaChartLine className="text-blue-800 text-3xl mb-4" />,
    },
    {
      title: "Maintenance & Support",
      desc: "End-to-end technical support, upgrades, and staff training to ensure long-term reliability of your automation systems.",
      icon: <FaTools className="text-blue-800 text-3xl mb-4" />,
    },
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-20 bg-gray-100 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About Us
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            At Technology Development Company, we bring innovation and precision to industries through advanced automation and smart technology integration.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
            <div
                key={index}
                className="p-6 rounded-2xl hover:shadow-xl transition duration-300"
            >
                <div className="flex justify-center items-center">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
            ))}
        </div>
    </section>
  );
};

export default About;
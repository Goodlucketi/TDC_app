import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="bg-blue-600 py-20 px-6 md:px-16 text-center text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Automate Your Industry?
        </h2>
        <p className="text-lg md:text-xl mb-8 text-blue-100">
          Let’s help you transform operations with innovative automation solutions  
          tailored for efficiency, reliability, and growth.
        </p>
        <Link
          to="/contact"
          className="bg-white text-blue-800 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
        >
          Get Started Today
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;

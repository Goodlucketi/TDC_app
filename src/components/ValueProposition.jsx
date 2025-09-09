import { FaBolt, FaIndustry, FaCogs, FaChartLine } from "react-icons/fa";
import FactoryImage from "/assets/metal-worker-using-machinery-industrial-workshop-generated-by-ai.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const ValueProposition = () => {
  return (
    <section id="projects" className="py-16 px-6 md:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-20 items-center">
        {/* Left Image */}
        <div className="relative">
          <LazyLoadImage
            src={FactoryImage}
            alt="Industrial automation"
            effect="blur"
            className="rounded-2xl shadow-lg w-full h-[500px] object-cover"
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Why Choose Technology Development Company?
          </h2>
          <p className="text-gray-600 mb-8">
            We bring innovation, reliability, and efficiency to industrial automation.  
            Here’s what makes us the preferred choice:
          </p>

          <div className="space-y-6">
            {/* Item 1 */}
            <div className="flex items-start gap-4">
              <FaBolt className="text-blue-600 text-2xl mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-gray-800">
                  Cutting-Edge Innovation
                </h3>
                <p className="text-gray-600 text-sm">
                  We leverage the latest automation technologies to future-proof your operations.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-4">
              <FaIndustry className="text-blue-600 text-2xl mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-gray-800">
                  Industry Expertise
                </h3>
                <p className="text-gray-600 text-sm">
                  Years of hands-on experience across multiple industries ensure tailored solutions.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start gap-4">
              <FaCogs className="text-blue-600 text-2xl mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-gray-800">
                  Seamless Integration
                </h3>
                <p className="text-gray-600 text-sm">
                  Our solutions easily integrate with your existing systems for a smooth transition.
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-start gap-4">
              <FaChartLine className="text-blue-600 text-2xl mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-gray-800">
                  Measurable Results
                </h3>
                <p className="text-gray-600 text-sm">
                  Boost productivity, reduce costs, and achieve sustainable growth with automation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;

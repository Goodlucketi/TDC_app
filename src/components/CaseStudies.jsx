import slide1 from "../assets/engineer-cooperation-male-female-technician-maintenance-control-relay-robot-arm-system-welding-with-tablet-laptop.jpg";
import slide2 from '../assets/metal-worker-using-machinery-industrial-workshop-generated-by-ai.jpg'
import slide3 from '../assets/drone-delivering-goods-city-autonomous-delivery-robot-business-air-transportation-concept.jpg'
// import slide4 from '../assets/employee-working-marketing-setting.jpg'
// import slide5 from '../assets/student-home-taking-notes-while-watching-presentation-closeup.jpg'

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Automating Warehouse Operations",
      steps: [
        "Problem: Manual tracking of inventory led to delays and errors.",
        "Solution: Implemented IoT sensors with real-time dashboards.",
        "Outcome: Reduced stock discrepancies by 45% and improved efficiency.",
      ],
      image: slide1,
    },
    {
      id: 2,
      title: "Smart Manufacturing Line",
      steps: [
        "Problem: Production downtime was causing huge losses.",
        "Solution: Introduced predictive maintenance powered by AI.",
        "Outcome: Downtime reduced by 30% and annual savings increased.",
      ],
      image: slide2,
    },
    {
      id: 3,
      title: "Energy Optimization in Plants",
      steps: [
        "Problem: Excessive energy consumption raised operational costs.",
        "Solution: Integrated smart meters with automated control systems.",
        "Outcome: Achieved 25% cost savings in electricity bills.",
      ],
      image: slide3,
    },
  ];

  return (
    <section className="py-10 px-6 md:px-20 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Case Studies
      </h2>
      <div className="md:space-y-0 md:w-10/12 mx-auto">
        {caseStudies.map((study, index) => (
          <div
            key={study.id}
            className={`flex flex-col md:flex-row justify-center items-center mb-10 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="flex-1">
              <img
                src={study.image}
                alt={study.title}
                className="shadow-sm w-full h-[300px] object-cover"
              />
            </div>

            {/* Text */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold my-4 md:px-8">{study.title}</h3>
              <ul className="list-disc list-inside md:px-8 text-gray-700 leading-relaxed">
                {study.steps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;

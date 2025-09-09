import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FaIndustry, FaHospital, FaTruck, FaBolt, FaWarehouse, FaFlask } from "react-icons/fa";

const Industries = () => {
  const industries = [
    {
      name: "Manufacturing",
      desc: "Optimizing assembly lines and production with automation for speed, precision, and consistency.",
      icon: <FaIndustry className="text-blue-800 text-3xl" />,
    },
    {
      name: "Healthcare",
      desc: "Enhancing medical equipment, diagnostics, and patient management with smart automation.",
      icon: <FaHospital className="text-blue-800 text-3xl" />,
    },
    {
      name: "Logistics & Supply Chain",
      desc: "Streamlining warehouses, shipping, and inventory systems to reduce costs and delays.",
      icon: <FaTruck className="text-blue-800 text-3xl" />,
    },
    {
      name: "Energy & Utilities",
      desc: "Powering energy plants and grids with automation for reliability and sustainable efficiency.",
      icon: <FaBolt className="text-blue-800 text-3xl" />,
    },
    {
      name: "Warehousing",
      desc: "Smart storage, retrieval, and inventory management systems for modern warehouses.",
      icon: <FaWarehouse className="text-blue-800 text-3xl" />,
    },
    {
      name: "Pharmaceuticals",
      desc: "Automation in drug production, testing, and quality assurance for global compliance.",
      icon: <FaFlask className="text-blue-800 text-3xl" />,
    },
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Industries We Serve
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        Our automation solutions empower diverse industries to achieve higher efficiency, 
        smarter operations, and sustainable growth.
      </p>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={4}
        loop={true}
        speed={8000}
        pagination={{ clickable: true }}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        breakpoints={{
            0: { slidesPerView: 1 }, // 1 slide on mobile
          768: { slidesPerView: 2 }, // 2 slides on tablets
          1024: { slidesPerView: 4 }, // 3 slides on desktops
        }}
        className="pb-12 bg-slate-100/50 rounded-2xl"
      >
        {industries.map((industry, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center justify-center p-8 h-[350px]">
              <div className="flex justify-center items-center bg-blue-100 rounded-full p-4 mb-6">
                {industry.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                {industry.name}
              </h3>
              <p className="text-gray-600 text-sm leading-tight">
                {industry.desc}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Industries;

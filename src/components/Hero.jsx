import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import slide1 from "/assets/engineer-cooperation-male-female-technician-maintenance-control-relay-robot-arm-system-welding-with-tablet-laptop.jpg";
import slide2 from '/assets/metal-worker-using-machinery-industrial-workshop-generated-by-ai.jpg'
import slide3 from '/assets/drone-delivering-goods-city-autonomous-delivery-robot-business-air-transportation-concept.jpg'
import slide4 from '/assets/employee-working-marketing-setting.jpg'
import slide5 from '/assets/student-home-taking-notes-while-watching-presentation-closeup.jpg'

const slides = [
  {
    caption: "Redefining Industries Through Automation Excellence.",
    tagline: "Where innovation meets precision.",
    image: slide1,
  },
  {
    caption: "From Manual to Smart The Future of Industrial Growth.",
    tagline: "Transforming workflows, one system at a time.",
    image: slide2,
  },
  {
    caption: "Innovating Today for the Factories of Tomorrow.",
    tagline: "Building smarter solutions for lasting impact.",
    image: slide3,
  },
  {
    caption: "Precision, Performance, and Progress in Every System.",
    tagline: "Automation you can trust, results you can measure.",
    image: slide4,
  },
  {
    caption: "Driving Industrial Transformation with Intelligent Technology.",
    tagline: "Powering the next wave of industrial growth.",
    image: slide5,
  },
];
const Hero = () => {
    return ( 
        <header id="home" className="h-screen w-full">
            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000 }}
                loop={true}
                className="w-full h-[90vh]"
            >
                {slides.map((slide, idx) => (
                    <SwiperSlide key={idx}>
                    <div
                        className="w-full h-full flex items-center justify-center text-center relative"
                        style={{
                        backgroundImage: `url(${slide.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        }}
                    >
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-linear-to-r from-cyan-900/70 to-blue-900/65 flex flex-col items-center justify-center px-6 mx-auto">
                            <div className="md:w-8/12 lg:w-6/12 mx-auto">
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
                                    {slide.caption}
                                </h2>
                                <p className="m-4 lg:mt-5 text-md md:text-xl text-slate-200">
                                    {slide.tagline}
                                </p>
                            </div>
                          
                        </div>
                    </div>
                    </SwiperSlide>
                ))}
            </Swiper>
     </header>
     );
}
 
export default Hero;
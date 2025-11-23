import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import TestimonialTemplate from "./TestimonialTemplate";
import "./testimonial.css";

const testimonialData = [
  {
    message:
      "Outstanding frontend development skills! The React application delivered was incredibly responsive, performant, and pixel-perfect across all devices.",
    quote: `Their expertise in React and modern JavaScript frameworks helped us build a user interface that our customers love. The attention to detail in UI components and state management was exceptional. Every interaction feels smooth and intuitive.`,
    name: "Sarah Johnson",
    designation: "Product Manager, TechVision Inc.",
  },
  {
    message:
      "Exceptional backend development work. The RESTful APIs and database architecture were clean, secure, and scalable.",
    quote: `Working with them on our Node.js backend was seamless. They implemented robust authentication, optimized our database queries, and ensured our API could handle high traffic. The code quality and documentation exceeded our expectations.`,
    name: "Michael Chen",
    designation: "CTO, DataFlow Solutions",
  },
  {
    message:
      "A true full-stack developer who understands both frontend and backend. Delivered our entire application from database to deployment.",
    quote: `From designing the PostgreSQL schema to building the React frontend, every layer of our application was expertly crafted. The integration between frontend and backend was flawless. They're the complete package for web development.`,
    name: "Alex Martinez",
    designation: "Founder & CEO, StartupHub",
  },
];

const Testimonial = () => {
  return (
    <div className="flex mx-auto justify-center px-2 max-w-218 pb-10 md:pb-25">
      <div className="w-full h-full cursor-grab">
        <p className="section-title mb-6 text-center">Testimonial</p>
        <Swiper
          id="testimonialSwiper"
          spaceBetween={30}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
        >
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialTemplate testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;

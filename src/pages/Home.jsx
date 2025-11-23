import Introduction from "../components/introduction/Introduction";
import Profile from "../components/profile/Profile";
import WorkProcess from "../components/workProcess/WorkProcess";
import Portfolio from "../components/portfolio/Portfolio";
import WorkTogether from "../components/workTogether/WorkTogether";
import Blog from "../components/blog/Blog";
import Profession from "../components/profession/Profession";
import HappyClients from "../components/happyClients/HappyClients";
import Testimonial from "../components/testimonial/Testimonial";
import Contact from "../components/contact/Contact";
import ParticleBackground from "../components/common/ParticleBackground";
import "../../index.css";

const Home = () => {
  return (
    <div className="relative">
      {/* Hero Section with Interactive Particles */}
      <div className="introduction-profile-background relative">
        <ParticleBackground variant="hero" />
        <div className="content relative z-10">
          <Introduction />
          <Profile />
        </div>
      </div>

      {/* Work Process Section */}
      <div className="bg-soft-white pt-30">
        <WorkProcess />
      </div>

      {/* Portfolio Section with Floating Particles */}
      <div className="relative">
        <ParticleBackground variant="portfolio" />
        <div className="relative z-10">
          <Portfolio />
        </div>
      </div>

      {/* Work Together Section */}
      <div className="bg-gray-900">
        <WorkTogether />
      </div>

      {/* Profession/Services Section with Elegant Particles */}
      <div className="bg-soft-white relative">
        <ParticleBackground variant="services" />
        <div className="relative z-10">
          <Profession />
        </div>
      </div>

      {/* Happy Clients & Testimonials */}
      <HappyClients />
      <Testimonial />

      {/* Contact Section with Starfield Effect */}
      <div className="relative">
        <ParticleBackground variant="contact" />
        <div className="relative z-10">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Home;


import { Outlet } from "react-router-dom";
import NavBar from "../components/common/navbar/NavBar";
import Footer from "../components/common/footer/Footer";
import ScrollToTop from "../components/common/scrollToTop/ScrollToTop";
import CustomCursor from "../components/common/CustomCursor";
import ParticleBackground from "../components/common/ParticleBackground";

const Main = () => {
  return (
    <div data-theme={"light"} className="relative">
      {/* Global background particles */}
      <div className="fixed inset-0 -z-50 pointer-events-none">
        <ParticleBackground variant="default" />
      </div>

      <CustomCursor />
      <NavBar />
      <Outlet />
      <div className="bg-[#2A374A]">
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Main;



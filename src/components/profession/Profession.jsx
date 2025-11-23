import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "I create responsive and interactive user interfaces using React, Next.js, and modern JavaScript/TypeScript. I focus on performance optimization, state management, and delivering pixel-perfect designs with seamless user experiences.",
  },
  {
    id: 2,
    title: "Backend Development",
    description:
      "I build scalable and secure server-side applications using Node.js, Express, and databases like MongoDB and PostgreSQL. I design RESTful APIs, implement authentication systems, and ensure efficient data handling.",
  },
  {
    id: 3,
    title: "Full-Stack Solutions",
    description:
      "I deliver end-to-end web applications by integrating frontend and backend technologies. From database design to deployment, I ensure seamless communication between all layers for robust, production-ready solutions.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I specialize in building modern web applications as a full-stack
            software developer, working with cutting-edge technologies for both
            frontend and backend development.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            My approach combines clean code practices, scalable architecture,
            and user-centric design to deliver high-performance applications
            that solve real-world problems.
          </p>
        </div>
        <a
          href="#!"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello!
        </a>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;

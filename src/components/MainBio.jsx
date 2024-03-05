import { Link } from "react-router-dom";
import avatar from "../assets/avatar.avif";
import { FaPhoneFlip } from "react-icons/fa6";

const MainBio = () => {
  return (
    <div className="container flex w-full bg-white  px-4 pl-4">
      <div className="w-full pl-5 pr-24 pt-10">
        <h1 className="py-2 text-6xl font-bold text-black">
          Hello, I'm <span className="text-orange-700">Vincent Setiawan</span>
        </h1>
        <h1 className="py-2 text-5xl font-semibold text-orange-400">
          Full-stack Developer
        </h1>
        <p className="py-2 text-lg text-gray-400">
          Passionate and driven, I am a junior full stack developer with a
          thirst for knowledge and a commitment to excellence. With a background
          in both frontend and backend technologies, I aspire to become a
          versatile and proficient developer capable of tackling complex
          challenges. Eager to learn and grow, I continuously seek out
          opportunities to expand my skill set and contribute to impactful
          projects. With a keen eye for detail and a dedication to delivering
          high-quality solutions, I am poised to make a positive impact in the
          world of software development.
        </p>
        <button
          className="align-items-center mt-6 flex h-8 w-32 justify-evenly rounded bg-orange-400 hover:bg-orange-700"
          component={Link}
          to="/#contactSection"
        >
          <p className="p-1  text-black">Contact Me</p>
          <div className="pt-1 text-black">
            <FaPhoneFlip size="22px" />
          </div>
        </button>
      </div>
      <div className="pl-6">
        <img src={avatar} alt="" />
      </div>
    </div>
  );
};

export default MainBio;

import Link from "next/link";
import { FaHeart, FaGraduationCap, FaHospital, FaHandHoldingHeart, FaPlay } from "react-icons/fa";

export default function MissionGoalsSection() {
  return (
    <section className="bg-[#f9f4eb] py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side Content */}
        <div className="w-full md:w-2/3">
          <p className="text-[#f44e28] font-semibold text-lg mb-2">Our Mission & Goals</p>
          <h2 className="text-4xl font-bold text-[#111] leading-snug mb-8">
            Change, Impacting Lives <br />
            Social Equity
          </h2>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-md p-5 flex items-start space-x-4">
              <FaHeart className="text-[#f44e28] text-2xl" />
              <div>
                <h4 className="font-semibold text-lg">Marriage</h4>
                <p className="text-sm text-gray-600">Donating to supports marriage is a great way</p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-md p-5 flex items-start space-x-4">
              <FaHospital className="text-[#f44e28] text-2xl" />
              <div>
                <h4 className="font-semibold text-lg">Health Care</h4>
                <p className="text-sm text-gray-600">Providing resources such as medical equipment</p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-md p-5 flex items-start space-x-4">
              <FaGraduationCap className="text-[#f44e28] text-2xl" />
              <div>
                <h4 className="font-semibold text-lg">Education</h4>
                <p className="text-sm text-gray-600">Mentorship, tutoring, or after-school programs</p>
              </div>
            </div>
            {/* Card 4 */}
            <div className="bg-white rounded-xl shadow-md p-5 flex items-start space-x-4">
              <FaHandHoldingHeart className="text-[#f44e28] text-2xl" />
              <div>
                <h4 className="font-semibold text-lg">Shraddh</h4>
                <p className="text-sm text-gray-600">CSF joins Help Of people</p>
              </div>
            </div>
          </div>

          {/* Donate Button */}
          <Link href="donate">
          <button className="mt-8 bg-[#005c4b] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#004638] transition">
            Donate Now
          </button>
          </Link>
          
        </div>

        {/* Right Side - Video */}
        <div className="w-full md:w-1/3 relative flex justify-center items-center">
          <button className="bg-[#f44e28] text-white w-14 h-14 rounded-full flex items-center justify-center text-xl shadow-lg hover:bg-[#d7381b] transition">
            <FaPlay />
          </button>
          <p className="absolute right-[-60px] top-1/2 transform -translate-y-1/2 rotate-90 text-5xl font-bold text-[#dde4db] hidden lg:block">
            Watch Video
          </p>
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';
import bannerImg from "@/assets/hero.png";
const Banner = () => {
    return (
        <div className="space-y-[20px] bg-gray-100 rounded-lg shadow-lg p-8 text-center">
           <div className="flex flex-col items-center justify-center gap-4">
              <span className="text-3xl font-semibold text-[#001931] text-center">We Build <br/> <span className="text-blue-500">Productive</span > Apps</span>
           </div>
            <p className="max-w-[700px] mx-auto text-[#001931]">At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

            <div className="flex justify-center items-center gap-4">
               <button className="btn btn-primary">Google Play</button>
               <button className="btn btn-primary">App Store</button>
            </div>

            <Image src={bannerImg} alt="Banner Image" className="w-[500px] h-auto mx-auto"/>

        </div>
    );
};

export default Banner;
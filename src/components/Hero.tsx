import Image from "next/image";
import banner from "@/images/dev.jpg";

const Hero = () => {
  return (
    <div className="w-full max-h-screen relative">
      <Image
        src={banner}
        alt="banner image"
        className="w-full max-h-screen object-contain"
      />
      <div className="absolute top-0 w-full h-full bg-black/30 text-gray-100 flex flex-col items-center justify-center">
        <h2 className="text-6xl md:text-[6rem] lg:text-[8.75rem] font-bold tracking-tighter">Thiago Alves</h2>
        <p className="text-xl md:text-2xl lg:text-5xl font-semibold mt-2 tracking-tighter">
          Driver, Developer
        </p>
      </div>
    </div>
  );
};

export default Hero;

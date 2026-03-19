import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <div
        className="relative min-h-[70vh] md:h-[80vh] flex flex-col bg-cover bg-center text-white"
        // style={{ backgroundImage: `url(${herobg})` }}
      >
        {/* Navbar Wrapper */}
        <div className="relative z-30 w-full">
          <Navbar />
        </div>
      </div>
    </div>
  );
}

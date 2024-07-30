import ArrowIcon from "@/assets/icons/arrow";
import { Button } from "@/components/atom/button";
import Image from "next/image";


import Circle from '@/assets/images/circle.png'
import Line from '@/assets/images/line.png'
import Plus from '@/assets/images/plus.png'
import Triangle from '@/assets/images/triangle.png'
import { GradientBox } from "@/components/molecule/gradient-box";
import Link from "next/link";



export default function Home() {
  return (
    <>
      <section className="min-h-fit container mx-auto px-4">
        <div className="grid sm:grid-cols-2 justify-center w-full items-center mt-12 min-h-screen">
          <div className="space-y-8 relative w-fit">
            <GradientBox height={100} width={60} fromColor="rgb(84, 84, 212)" toColor="rgb(84, 84, 212, 0.4)" className="-rotate-45" />
            <GradientBox height={100} width={60} fromColor="rgb(251, 168, 28, 0.26)" toColor="rgb(224, 86, 136, 0.15)" className="top-0 rotate-45" />
            <h1 className="font-hanken_grotesk font-extrabold text-5xl lg:text-7xl">Build Your <span className="block">Awesome</span> <span className="block">Platform</span></h1>
            <p>Enver studio is a digital studio that offers several services such as UI/UX Design to developers, we will provide the best service for those of you who use our services.</p>
            <Button lastIcon={<ArrowIcon />} variant="primary">
              Our Services
            </Button>
          </div>

          <div className="w-full text-center mx-auto">
            <div className="relative sm:w-[85%] md:w-full">
              <Image src={Line} alt="line" width={80} height={80} className="absolute top-0 left-0" />
              <Image src={Circle} alt="line" width={80} height={80} className="absolute top-0 right-0" />
              <Image src={'/images/user.png'} alt="user" width={700} height={700} />
              <Image src={Triangle} alt="line" width={80} height={80} className="absolute bottom-0 left-0" />
              <Image src={Plus} alt="line" width={80} height={80} className="absolute bottom-0 right-0" />
              <GradientBox height={120} width={60} fromColor="rgb(251, 168, 28, 0.26)" toColor="rgb(224, 86, 136, 0.15)" className="top-0 rotate-45" />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 space-y-12">
        <div className="space-y-8 sm:space-y-0 grid sm:grid-cols-2 items-start">
          <h2 className="text-3xl hanken_grotesk font-bold sm:text-4xl xl:text-6xl">Why Enver Is The <span className="block">Best Choice?</span></h2>
          <p className="opacity-70 sm:text-lg">Watch this one minute video so you <span className="block sm:inline">understand why you should use our services!</span></p>
          
        </div>
        <Link href={''} className="block">
          <Image src={'/images/video.png'} alt="video" width={1920} height={1080} className="rounded-lg" />
        </Link>
      </section>

      <div className="h-screen"></div>
    </>
  );
}

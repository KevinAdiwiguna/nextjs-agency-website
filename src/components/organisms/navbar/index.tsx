"use client"
import Image from "next/image";
import Link from "next/link";

// Constants
import { NAVIGATION } from '@/constants/navigation';
import { Button } from "@/components/atom/button";

// Hooks
import {useActiveSection} from '@/hooks/use-active-section';
import { useScroll } from "@/hooks/use-scroll";

export const Navbar = () => {
   const activeSection = useActiveSection()
   const isScrolled = useScroll();

    return (
        <div className={`fixed w-full top-0 px-4 hidden z-[100] sm:block duration-300 ${isScrolled ? 'backdrop-blur-md' : "bg-transparent"}`}>
            <div className="container mx-auto flex items-center justify-between py-4">
                <Link href={'/'} className="flex justify-center items-center gap-x-2">
                    <div>
                        <Image src={'/images/logo.png'} alt="Enver" width={45} height={45} priority />
                    </div >
                    <span className='font-bold text-lg font-mintserrat'>Enver</span>
                </Link>
                <div className="flex items-center justify-center gap-x-3">
                    {NAVIGATION.map((res) => (
                        <Link href={res.url} key={res.url} className={activeSection === res.url.slice(1) ? 'text-[#5454D4]' : 'text-white'}>
                            {res.name}
                        </Link>
                    ))}
                </div>
                <div>
                    <Button variant="outline">
                        <Link href={'/contact-us'}>Contact us</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

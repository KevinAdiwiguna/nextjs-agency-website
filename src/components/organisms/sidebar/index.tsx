"use client"
import { useContext } from "react"
import Image from "next/image"
import Link from "next/link"

// Context
import { SidebarContext } from "@/context/sidebar-context"
import { ThreeBars } from "@/assets/icons/three-bars"

// Constants
import { NAVIGATION } from "@/constants/navigation"

// Hooks
import { useActiveSection } from '@/hooks/use-active-section';

export const Sidebar = () => {
    const { isOpen, setIsOpen } = useContext(SidebarContext)
    const activeSection = useActiveSection()

    return (
        <div className="relative">
            <div className={`sm:hidden top-0 right-0 w-full h-full fixed z-30 transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"} backdrop-blur-md`}>
                <div className="w-full h-full flex flex-col justify-center gap-y-12 text-3xl items-center">
                    {NAVIGATION.map((res) => (
                        <Link href={res.url} key={res.url} className={activeSection === res.url.slice(1) ? 'text-[#5454D4] font-semibold' : 'text-white'} onClick={() => setIsOpen(false)}>{res.name}</Link>
                    ))}
                </div>
            </div>

            <div className="fixed top-0 w-full sm:hidden z-40 ">
                <div className="flex px-4 items-center justify-between py-4">
                    <Link href="/" className="flex justify-center items-center gap-x-2">
                        <div>
                            <Image src={'/images/logo.png'} alt="Enver" width={30} height={30} priority />
                        </div>
                        <span className='font-bold text-lg font-mintserrat'>Enver</span>
                    </Link>
                    <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
                        <ThreeBars />
                    </div>
                </div>
            </div>
        </div>
    )
}

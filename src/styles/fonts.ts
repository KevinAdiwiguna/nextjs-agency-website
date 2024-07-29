import { Inter, Montserrat,Hanken_Grotesk } from "next/font/google";

const inter_init = Inter({
    subsets: ["latin"],
    weight: ["100", "300", "700"],
    variable: "--font-inter",
    display: 'swap'
});

const montserrat_init = Montserrat({
    subsets: ["latin"],
    weight: ["100", "300", "700"],
    variable: "--font-montserrat",
    display: 'swap'
})

const hanken_Grotesk_init = Hanken_Grotesk({
    subsets: ["latin"],
    weight: ["100", "300", "700"],
    variable: "--font-hanken-grotesk",
    display: 'swap'
})

export const inter = inter_init.variable
export const montserrat = montserrat_init.variable
export const hanken_grotesk = hanken_Grotesk_init.variable

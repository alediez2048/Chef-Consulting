import React from 'react'
import { motion } from 'framer-motion'
import bioImage from '../assets/bio-pic-image.png'

function Hero() {
    return (
        <section className="min-h-screen flex items-center px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-0 bg-cream relative overflow-hidden">
            {/* Background typography */}
            <div className="absolute top-1/4 -left-10 md:-left-20 text-[8rem] md:text-[20rem] font-serif text-deep-black opacity-[0.02] leading-none pointer-events-none select-none">
                K
            </div>

            {/* Grid Layout */}
            <motion.div
                className="max-w-7xl w-full mx-auto relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-x-12 lg:gap-x-16 items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
                {/* Left Column: Headline */}
                <div className="md:col-span-7 relative z-20">
                    <motion.h1
                        className="text-[clamp(2.5rem,8vw,11rem)] font-serif text-deep-black leading-[1.05] md:leading-[0.9] tracking-tight"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="whitespace-nowrap">Gastronomía</span><br />
                        con criterio,<br />
                        <span className="italic text-burnt-sienna">técnica</span> y<br />
                        propósito.
                    </motion.h1>
                </div>

                {/* Right Column: Bio Image + Content */}
                <div className="md:col-span-5 flex flex-col items-center md:items-end md:text-right">
                    {/* Bio Image */}
                    <motion.div
                        className="w-full max-w-xs sm:max-w-sm md:max-w-md mb-6 md:mb-10 relative grayscale hover:grayscale-0 transition-all duration-700"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        <div className="absolute inset-0 bg-burnt-sienna opacity-0 mix-blend-multiply hover:opacity-10 transition-opacity duration-500"></div>
                        <img
                            src={bioImage}
                            alt="Kike Mujica"
                            className="w-full h-auto object-cover shadow-xl"
                        />
                    </motion.div>

                    {/* Subtitle & CTA */}
                    <motion.div
                        className="w-full max-w-xs sm:max-w-sm text-center md:text-right"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <p className="text-base sm:text-lg md:text-xl text-warm-gray leading-relaxed mb-6 md:mb-8">
                            Consultoría gastronómica internacional basada en experiencia real, respeto por el producto y ejecución impecable.
                        </p>

                        <motion.button
                            className="bg-deep-black text-cream px-6 sm:px-8 md:px-10 py-3 md:py-4 text-xs md:text-sm tracking-widest uppercase font-medium w-full sm:w-auto"
                            whileHover={{ x: 10 }}
                            transition={{ duration: 0.2 }}
                        >
                            Solicitar una conversación →
                        </motion.button>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default Hero

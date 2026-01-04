import React from 'react'
import { motion } from 'framer-motion'
import bioImage from '../assets/bio-pic-image.png'

function Hero() {
    return (
        <section className="min-h-screen flex items-center px-6 md:px-12 lg:px-20 bg-cream relative overflow-hidden pt-20 md:pt-0">
            {/* Background typography */}
            <div className="absolute top-1/4 -left-10 md:-left-20 text-[10rem] md:text-[20rem] font-serif text-deep-black opacity-[0.02] leading-none pointer-events-none select-none">
                K
            </div>

            {/* Grid Layout */}
            <motion.div
                className="max-w-7xl w-full relative z-10 grid md:grid-cols-12 gap-y-12 md:gap-x-16 items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
                {/* Left Column: Headline */}
                <div className="md:col-span-7 relative z-20">
                    <motion.h1
                        className="text-[3.5rem] md:text-[clamp(3rem,9vw,11rem)] font-serif text-deep-black leading-[1.1] md:leading-[0.9] mb-8 md:mb-0 tracking-tight break-words"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Gastronomía<br />
                        con criterio,<br />
                        <span className="italic text-burnt-sienna">técnica</span> y<br />
                        propósito.
                    </motion.h1>
                </div>

                {/* Right Column: Bio Image + Content */}
                <div className="md:col-span-5 flex flex-col items-start md:items-end md:text-right relative">
                    {/* Bio Image */}
                    <motion.div
                        className="w-full max-w-sm md:max-w-md mb-8 md:mb-12 relative grayscale hover:grayscale-0 transition-all duration-700"
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
                        className="max-w-sm"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <p className="text-lg md:text-xl text-warm-gray leading-relaxed mb-8">
                            Consultoría gastronómica internacional basada en experiencia real, respeto por el producto y ejecución impecable.
                        </p>

                        <motion.button
                            className="bg-deep-black text-cream px-8 md:px-10 py-3 md:py-4 text-xs md:text-sm tracking-widest uppercase font-medium w-full md:w-auto"
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

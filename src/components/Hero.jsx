import React from 'react'
import { motion } from 'framer-motion'

function Hero() {
    return (
        <section className="min-h-screen flex items-center px-6 md:px-12 lg:px-20 bg-cream relative overflow-hidden pt-20 md:pt-0">
            {/* Background typography */}
            <div className="absolute top-1/4 -left-10 md:-left-20 text-[10rem] md:text-[20rem] font-serif text-deep-black opacity-[0.02] leading-none pointer-events-none select-none">
                K
            </div>

            {/* Background image - subtle, offset */}
            <motion.div
                className="absolute right-0 top-1/4 w-2/3 md:w-1/3 h-1/2 md:h-2/3 opacity-20"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 0.2, x: 0 }}
                transition={{ duration: 1.2, delay: 0.3 }}
            >
                <img
                    src="/hero-hands.png"
                    alt=""
                    className="w-full h-full object-cover grayscale"
                />
            </motion.div>

            <motion.div
                className="max-w-7xl w-full relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
                {/* Asymmetric layout - content on left */}
                <div className="max-w-4xl">
                    <motion.h1
                        className="text-[3.5rem] md:text-[clamp(3rem,10vw,12rem)] font-serif text-deep-black leading-[1.1] md:leading-[0.9] mb-8 md:mb-12 tracking-tight break-words"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Gastronomía<br />
                        con criterio,<br />
                        <span className="italic text-burnt-sienna">técnica</span> y<br />
                        propósito.
                    </motion.h1>

                    <motion.div
                        className="ml-0 md:ml-24 max-w-xl space-y-6 md:space-y-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <p className="text-lg md:text-xl lg:text-2xl text-warm-gray leading-relaxed max-w-[90%]">
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

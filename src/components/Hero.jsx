import React from 'react'
import { motion } from 'framer-motion'

function Hero() {
    return (
        <section className="min-h-screen flex items-center px-6 md:px-12 lg:px-20 bg-cream relative overflow-hidden">
            {/* Background typography */}
            <div className="absolute top-1/4 -left-20 text-[20rem] font-serif text-deep-black opacity-[0.02] leading-none pointer-events-none select-none">
                K
            </div>

            <motion.div
                className="max-w-7xl w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
                {/* Asymmetric layout - content on left */}
                <div className="max-w-4xl">
                    <motion.h1
                        className="text-[clamp(3rem,10vw,12rem)] font-serif text-deep-black leading-[0.9] mb-12 tracking-tight"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Gastronomía<br />
                        con criterio,<br />
                        <span className="italic text-burnt-sienna">técnica</span><br />
                        y propósito.
                    </motion.h1>

                    <motion.div
                        className="ml-0 md:ml-24 max-w-xl space-y-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <p className="text-xl md:text-2xl text-warm-gray leading-relaxed">
                            Consultoría gastronómica internacional basada en experiencia real, respeto por el producto y ejecución impecable.
                        </p>

                        <motion.button
                            className="bg-deep-black text-cream px-10 py-4 text-sm tracking-widest uppercase font-medium"
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

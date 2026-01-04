import React from 'react'
import { motion } from 'framer-motion'

function CTAFinal() {
    return (
        <section className="min-h-[80vh] md:min-h-screen flex items-center py-20 md:py-32 lg:py-48 px-6 md:px-12 lg:px-20 bg-cream">
            <div className="max-w-7xl mx-auto w-full">
                <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
                    {/* Left side - massive call to action */}
                    <motion.div
                        className="md:col-span-7"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-5xl md:text-7xl lg:text-9xl font-serif text-deep-black leading-[0.95] mb-8 md:mb-12">
                            Conversemos
                        </h2>

                        <motion.button
                            className="group bg-deep-black text-cream px-8 md:px-12 py-4 md:py-5 text-sm md:text-base tracking-widest uppercase font-medium relative overflow-hidden w-full md:w-auto"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                        >
                            <span className="relative z-10">Iniciar conversación</span>
                            <motion.div
                                className="absolute inset-0 bg-burnt-sienna"
                                initial={{ x: '-100%' }}
                                whileHover={{ x: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.button>
                    </motion.div>

                    {/* Right side - supporting text */}
                    <motion.div
                        className="md:col-span-5 space-y-6 md:space-y-8"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p className="text-lg md:text-xl lg:text-2xl text-charcoal leading-relaxed">
                            Si tienes un proyecto gastronómico y buscas claridad, estructura y criterio real.
                        </p>

                        <div className="border-t-2 border-deep-black pt-6">
                            <p className="text-base md:text-lg text-warm-gray italic">
                                No todos los proyectos necesitan consultoría.<br />
                                Los que sí, lo saben.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default CTAFinal

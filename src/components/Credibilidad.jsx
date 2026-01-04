import React from 'react'
import { motion } from 'framer-motion'

function Credibilidad() {
    return (
        <section className="py-20 md:py-48 px-6 md:px-12 lg:px-20 bg-white">
            <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-start">
                {/* Offset title - spans 3 columns */}
                <motion.h2
                    className="md:col-span-3 text-4xl md:text-6xl lg:text-8xl font-serif text-deep-black md:sticky md:top-32 mb-8 md:mb-0"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Credi­bilidad
                </motion.h2>

                {/* Content offset - starts at column 5, spans 7 */}
                <motion.div
                    className="md:col-start-5 md:col-span-7 space-y-8"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {/* Added image */}
                    <motion.div
                        className="mb-12 overflow-hidden"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <img
                            src="/Chef-Consulting/ingredients.png"
                            alt="Fresh ingredients"
                            className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </motion.div>

                    <p className="text-2xl md:text-3xl text-charcoal leading-relaxed">
                        He trabajado en cocinas y proyectos gastronómicos en <strong>Venezuela, Argentina, España e Irlanda</strong>, colaborando con equipos, marcas y conceptos que entienden la cocina como un oficio serio, no como una moda.
                    </p>

                    <div className="border-l-4 border-burnt-sienna pl-8 py-4">
                        <p className="text-xl text-charcoal italic leading-relaxed">
                            Cada lugar me dejó una enseñanza distinta.<br />
                            Todas forman parte del mismo lenguaje.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Credibilidad

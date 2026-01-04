import React from 'react'
import { motion } from 'framer-motion'

function Mirada() {
    return (
        <section className="min-h-screen flex items-center py-32 md:py-48 px-6 md:px-12 lg:px-20 bg-deep-black text-cream relative overflow-hidden">
            {/* Background text pattern */}
            <div className="absolute inset-0 opacity-[0.03] text-[8rem] font-serif leading-tight overflow-hidden pointer-events-none">
                <div className="transform -rotate-6">
                    decisiones decisiones decisiones decisiones decisiones<br />
                    decisiones decisiones decisiones decisiones decisiones<br />
                    decisiones decisiones decisiones decisiones decisiones
                </div>
            </div>

            <motion.div
                className="max-w-5xl mx-auto relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-sm uppercase tracking-[0.3em] text-burnt-sienna mb-16">
                    Mirada / Filosofía
                </h2>

                <motion.p
                    className="text-[clamp(2rem,5vw,6rem)] font-serif leading-[1.1] mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    La gastronomía no se trata solo de platos.<br />
                    Se trata de <span className="italic text-burnt-sienna">decisiones</span>.
                </motion.p>

                <motion.div
                    className="md:ml-auto md:max-w-2xl space-y-8 text-xl md:text-2xl leading-relaxed opacity-90"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.9 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <p>
                        Decisiones sobre producto, técnica, tiempos, personas y territorio.
                        Cuando esas decisiones están alineadas, el resultado se siente.
                    </p>
                    <p>
                        No busco imponer un estilo.
                        Busco revelar el que ya existe, hacerlo más claro y llevarlo a su mejor versión.
                    </p>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Mirada

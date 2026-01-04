import React from 'react'
import { motion } from 'framer-motion'

function Mirada() {
    return (
        <section className="section-spacing bg-deep-black text-cream">
            <motion.div
                className="content-container text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-h1 mb-12">Mirada</h2>
                <p className="text-h2 font-serif mb-12 leading-relaxed">
                    La gastronomía no se trata solo de platos.<br />
                    Se trata de <em className="text-burnt-sienna">decisiones</em>.
                </p>
                <p className="text-lead mb-8 opacity-85">
                    Decisiones sobre producto, técnica, tiempos, personas y territorio.<br />
                    Cuando esas decisiones están alineadas, el resultado se siente.
                </p>
                <p className="text-lead opacity-85">
                    No busco imponer un estilo.<br />
                    Busco revelar el que ya existe, hacerlo más claro y llevarlo a su mejor versión.
                </p>
            </motion.div>
        </section>
    )
}

export default Mirada

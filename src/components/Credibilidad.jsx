import React from 'react'
import { motion } from 'framer-motion'

function Credibilidad() {
    return (
        <section className="section-spacing bg-white">
            <motion.div
                className="content-container"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
                <h2 className="text-h1 text-deep-black mb-8">Credibilidad</h2>
                <p className="text-body text-warm-gray mb-6">
                    He trabajado en cocinas y proyectos gastronómicos en Venezuela, Argentina, España e Irlanda, colaborando con equipos, marcas y conceptos que entienden la cocina como un oficio serio, no como una moda.
                </p>
                <p className="text-body text-charcoal italic">
                    Cada lugar me dejó una enseñanza distinta.<br />
                    Todas forman parte del mismo lenguaje.
                </p>
            </motion.div>
        </section>
    )
}

export default Credibilidad

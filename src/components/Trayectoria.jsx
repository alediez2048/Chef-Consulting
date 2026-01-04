import React from 'react'
import { motion } from 'framer-motion'

function Trayectoria() {
    return (
        <section className="section-spacing bg-cream">
            <motion.div
                className="content-container"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-h1 text-deep-black mb-8">Trayectoria</h2>
                <p className="text-lead text-charcoal mb-6 font-medium">
                    Soy Kike Mujica, cocinero y consultor gastronómico venezolano.
                </p>
                <p className="text-body text-warm-gray mb-6">
                    Mi camino me ha llevado por cocinas y proyectos en distintos países, siempre con la misma premisa: respeto por el oficio, atención al detalle y compromiso con el trabajo bien hecho.
                </p>
                <p className="text-body text-charcoal italic">
                    Venezuela sigue siendo el punto de partida.<br />
                    El mundo, el contexto.
                </p>
            </motion.div>
        </section>
    )
}

export default Trayectoria

import React from 'react'
import { motion } from 'framer-motion'

function Trayectoria() {
    return (
        <section className="py-20 md:py-32 lg:py-48 px-6 md:px-12 lg:px-20 bg-cream">
            <motion.div
                className="max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-4xl md:text-6xl lg:text-8xl font-serif text-deep-black mb-6 md:mb-8">
                    Trayectoria
                </h2>
                <p className="text-xl md:text-2xl lg:text-3xl text-charcoal mb-6 font-medium leading-relaxed">
                    Soy Kike Mujica, cocinero y consultor gastronómico venezolano.
                </p>
                <p className="text-lg md:text-xl text-warm-gray mb-6 leading-relaxed">
                    Mi camino me ha llevado por cocinas y proyectos en distintos países, siempre con la misma premisa: respeto por el oficio, atención al detalle y compromiso con el trabajo bien hecho.
                </p>
                <p className="text-lg md:text-xl text-charcoal italic leading-relaxed">
                    Venezuela sigue siendo el punto de partida.<br />
                    El mundo, el contexto.
                </p>
            </motion.div>
        </section>
    )
}

export default Trayectoria

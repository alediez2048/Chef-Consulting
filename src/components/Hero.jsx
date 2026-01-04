import React from 'react'
import { motion } from 'framer-motion'

function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center px-6 bg-cream">
            <motion.div
                className="max-w-4xl text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
                <h1 className="text-hero font-serif text-deep-black mb-8">
                    Gastronomía con criterio, técnica y propósito.
                </h1>
                <p className="text-lead text-warm-gray mb-12 max-w-2xl mx-auto">
                    Consultoría gastronómica internacional basada en experiencia real, respeto por el producto y ejecución impecable.
                </p>
                <motion.button
                    className="btn-primary"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    Solicitar una conversación
                </motion.button>
            </motion.div>
        </section>
    )
}

export default Hero

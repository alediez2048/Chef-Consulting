import React from 'react'
import { motion } from 'framer-motion'

function CTAFinal() {
    return (
        <section className="section-spacing bg-cream">
            <motion.div
                className="content-container text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
            >
                <p className="text-lead text-charcoal mb-8">
                    Si tienes un proyecto gastronómico y buscas claridad, estructura y criterio real, conversemos.
                </p>
                <p className="text-body text-warm-gray mb-12 italic">
                    No todos los proyectos necesitan consultoría.<br />
                    Los que sí, lo saben.
                </p>
                <motion.button
                    className="btn-primary"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    Iniciar conversación
                </motion.button>
            </motion.div>
        </section>
    )
}

export default CTAFinal

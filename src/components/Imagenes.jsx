import React from 'react'
import { motion } from 'framer-motion'

function Imagenes() {
    return (
        <section className="section-spacing bg-white">
            <motion.div
                className="content-container-wide text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
            >
                <p className="text-body text-warm-gray mb-4">
                    El proceso importa tanto como el resultado.<br />
                    Aquí no hay artificios, solo cocina, trabajo y tiempo.
                </p>
                <p className="text-sm italic text-mid-gray mb-16">
                    (Las imágenes deben hablar por sí solas.)
                </p>

                {/* Placeholder for images - will add later */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                        <motion.div
                            key={i}
                            className="aspect-square bg-light-gray/20"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export default Imagenes

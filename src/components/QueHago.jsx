import React from 'react'
import { motion } from 'framer-motion'

function QueHago() {
    const servicios = [
        {
            titulo: 'Desarrollo de concepto gastronómico',
            descripcion: 'Definición clara de identidad, propuesta y narrativa culinaria.'
        },
        {
            titulo: 'Diseño y optimización de menú',
            descripcion: 'Menús pensados para el cliente, el equipo y la operación.'
        },
        {
            titulo: 'Acompañamiento en aperturas',
            descripcion: 'Desde la idea hasta el primer servicio.'
        },
        {
            titulo: 'Estandarización y procesos de cocina',
            descripcion: 'Orden, repetibilidad y control sin perder alma.'
        },
        {
            titulo: 'Asesoría creativa y técnica',
            descripcion: 'Para proyectos que necesitan dirección, no ruido.'
        }
    ]

    return (
        <section className="py-20 md:py-48 px-6 md:px-12 lg:px-20 bg-cream relative overflow-hidden">
            {/* Large background text */}
            <div className="absolute top-0 right-0 text-[8rem] md:text-[15rem] font-serif text-deep-black opacity-[0.015] leading-none pointer-events-none">
                Qué
            </div>

            <div className="max-w-7xl mx-auto">
                {/* Title spans full width, aligned right on desktop */}
                <motion.div
                    className="mb-12 md:mb-20 text-left md:text-right"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-[4rem] md:text-[clamp(3rem,8vw,10rem)] font-serif text-deep-black leading-none mb-4 md:mb-8">
                        Qué Hago
                    </h2>
                    <p className="text-xl md:text-3xl text-charcoal max-w-2xl md:ml-auto font-medium">
                        Consultoría gastronómica para proyectos que quieren <em className="italic text-burnt-sienna">durar</em>.
                    </p>
                </motion.div>

                {/* Two-column service list */}
                <div className="grid md:grid-cols-2 gap-x-20 gap-y-12 md:gap-y-16">
                    {servicios.map((servicio, index) => (
                        <motion.div
                            key={index}
                            className="space-y-4 relative pl-16 md:pl-0"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <div className="text-6xl md:text-8xl font-serif text-burnt-sienna opacity-20 absolute left-0 top-0 md:static md:mb-2 leading-none">
                                {String(index + 1).padStart(2, '0')}
                            </div>
                            <h3 className="text-2xl font-serif text-deep-black leading-tight">
                                {servicio.titulo}
                            </h3>
                            <p className="text-lg text-warm-gray leading-relaxed">
                                {servicio.descripcion}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default QueHago

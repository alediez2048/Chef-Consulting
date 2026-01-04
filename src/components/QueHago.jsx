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

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <section className="section-spacing bg-cream">
            <motion.div
                className="content-container"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-h1 text-deep-black mb-8">Qué Hago</h2>
                <p className="text-lead text-charcoal mb-6 font-medium">
                    Consultoría gastronómica para proyectos que quieren durar.
                </p>
                <p className="text-body text-warm-gray mb-16">
                    Trabajo con restaurantes, grupos gastronómicos y emprendedores que buscan claridad antes de crecer, estructura antes de escalar y coherencia antes de abrir.
                </p>

                <h3 className="text-h2 text-charcoal mb-12">Mis servicios incluyen:</h3>
                <motion.div
                    className="space-y-10"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {servicios.map((servicio, index) => (
                        <motion.div
                            key={index}
                            className="border-l-2 border-burnt-sienna pl-6"
                            variants={itemVariants}
                        >
                            <h4 className="text-xl font-serif font-medium text-deep-black mb-2">
                                {servicio.titulo}
                            </h4>
                            <p className="text-body text-warm-gray">{servicio.descripcion}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    )
}

export default QueHago

import React from 'react'
import { motion } from 'framer-motion'

function ComoTrabajo() {
    const pasos = [
        {
            numero: '1',
            titulo: 'Diagnóstico',
            descripcion: 'Escuchar, observar y entender antes de proponer.'
        },
        {
            numero: '2',
            titulo: 'Estrategia',
            descripcion: 'Definir el camino correcto para el proyecto, no el más rápido.'
        },
        {
            numero: '3',
            titulo: 'Ejecución',
            descripcion: 'Trabajo cercano con equipos y responsables.'
        },
        {
            numero: '4',
            titulo: 'Ajuste y seguimiento',
            descripcion: 'La cocina se afina en la práctica, no en el papel.'
        }
    ]

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0 }
    }

    return (
        <section className="section-spacing bg-white">
            <motion.div
                className="content-container"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-h1 text-deep-black mb-8">Cómo Trabajo</h2>
                <p className="text-lead text-charcoal mb-16 font-medium">
                    Un proceso simple, honesto y enfocado en resultados.
                </p>

                <motion.div
                    className="space-y-10"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {pasos.map((paso, index) => (
                        <motion.div
                            key={index}
                            className="flex gap-8 items-start"
                            variants={itemVariants}
                        >
                            <div className="text-6xl font-serif text-burnt-sienna flex-shrink-0 leading-none">
                                {paso.numero}
                            </div>
                            <div className="pt-2">
                                <h3 className="text-h2 text-deep-black mb-3">{paso.titulo}</h3>
                                <p className="text-body text-warm-gray">{paso.descripcion}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    )
}

export default ComoTrabajo

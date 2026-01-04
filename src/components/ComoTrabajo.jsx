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

    return (
        <section className="py-40 md:py-60 px-6 md:px-12 lg:px-20 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Narrow title column */}
                <div className="mb-32">
                    <motion.h2
                        className="text-[clamp(2.5rem,6vw,8rem)] font-serif text-deep-black leading-none max-w-3xl"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        Cómo Trabajo
                    </motion.h2>
                </div>

                {/* Offset process list */}
                <div className="md:ml-auto md:max-w-4xl space-y-24">
                    {pasos.map((paso, index) => (
                        <motion.div
                            key={index}
                            className="relative"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                        >
                            {/* Huge number background */}
                            <div className="absolute -left-4 md:-left-20 top-0 text-[12rem] md:text-[16rem] font-serif text-burnt-sienna opacity-10 leading-none pointer-events-none">
                                {paso.numero}
                            </div>

                            <div className="relative z-10 pl-8 md:pl-20 pt-12">
                                <h3 className="text-4xl md:text-5xl font-serif text-deep-black mb-6">
                                    {paso.titulo}
                                </h3>
                                <p className="text-xl md:text-2xl text-warm-gray leading-relaxed max-w-2xl">
                                    {paso.descripcion}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ComoTrabajo

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
        <section className="py-20 md:py-40 lg:py-60 px-6 md:px-12 lg:px-20 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Title */}
                <div className="mb-16 md:mb-32">
                    <motion.h2
                        className="text-4xl md:text-6xl lg:text-8xl font-serif text-deep-black leading-none max-w-3xl"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        Cómo Trabajo
                    </motion.h2>
                </div>

                {/* Process list */}
                <div className="md:ml-auto md:max-w-4xl space-y-16 md:space-y-24">
                    {pasos.map((paso, index) => (
                        <motion.div
                            key={index}
                            className="relative"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                        >
                            {/* Background number */}
                            <div className="absolute -left-2 md:-left-20 -top-4 md:top-0 text-[6rem] md:text-[12rem] lg:text-[16rem] font-serif text-burnt-sienna opacity-10 leading-none pointer-events-none select-none">
                                {paso.numero}
                            </div>

                            <div className="relative z-10 pl-12 md:pl-20 pt-8 md:pt-12">
                                <h3 className="text-2xl md:text-4xl lg:text-5xl font-serif text-deep-black mb-4 md:mb-6">
                                    {paso.titulo}
                                </h3>
                                <p className="text-lg md:text-xl lg:text-2xl text-warm-gray leading-relaxed max-w-2xl">
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

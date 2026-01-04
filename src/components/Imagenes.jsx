import React from 'react'
import { motion } from 'framer-motion'

function Imagenes() {
    const images = [
        { src: '/Chef-Consulting/plating.png', alt: 'Plating precision' },
        { src: '/Chef-Consulting/workspace.png', alt: 'Kitchen workspace' },
        { src: '/Chef-Consulting/fire.png', alt: 'Cooking with fire' },
        { src: '/Chef-Consulting/knife.png', alt: 'Knife technique' }
    ]

    return (
        <section className="py-20 md:py-32 lg:py-48 px-6 md:px-12 lg:px-20 bg-white">
            <motion.div
                className="max-w-7xl mx-auto"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="mb-12 md:mb-20 max-w-3xl">
                    <p className="text-xl md:text-2xl lg:text-3xl text-charcoal leading-relaxed mb-4 md:mb-6">
                        El proceso importa tanto como el resultado.<br />
                        Aquí no hay artificios, solo cocina, trabajo y tiempo.
                    </p>
                    <p className="text-base md:text-lg italic text-mid-gray">
                        (Las imágenes deben hablar por sí solas.)
                    </p>
                </div>

                {/* Asymmetric image grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    {/* Large left image */}
                    <motion.div
                        className="md:col-span-7 aspect-[4/3] overflow-hidden"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <img
                            src={images[0].src}
                            alt={images[0].alt}
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </motion.div>

                    {/* Top right image */}
                    <motion.div
                        className="md:col-span-5 aspect-square overflow-hidden"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <img
                            src={images[1].src}
                            alt={images[1].alt}
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </motion.div>

                    {/* Bottom left image */}
                    <motion.div
                        className="md:col-span-5 aspect-[3/4] overflow-hidden"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <img
                            src={images[2].src}
                            alt={images[2].alt}
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </motion.div>

                    {/* Large bottom right image */}
                    <motion.div
                        className="md:col-span-7 aspect-video overflow-hidden"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <img
                            src={images[3].src}
                            alt={images[3].alt}
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default Imagenes

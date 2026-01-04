import React from 'react'

function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center px-6">
            <div className="max-w-4xl text-center">
                <h1 className="text-5xl md:text-6xl font-serif mb-6">
                    Gastronomía con criterio, técnica y propósito.
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-600">
                    Consultoría gastronómica internacional basada en experiencia real, respeto por el producto y ejecución impecable.
                </p>
                <button className="px-8 py-3 bg-black text-white">
                    Solicitar una conversación
                </button>
            </div>
        </section>
    )
}

export default Hero

import React from 'react'

function Imagenes() {
    return (
        <section className="py-20 px-6 bg-gray-50">
            <div className="max-w-3xl mx-auto text-center">
                <p className="text-lg mb-4 leading-relaxed">
                    El proceso importa tanto como el resultado.<br />
                    Aquí no hay artificios, solo cocina, trabajo y tiempo.
                </p>
                <p className="text-sm italic text-gray-500">
                    (Las imágenes deben hablar por sí solas.)
                </p>

                {/* Placeholder for images - will add later */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="aspect-square bg-gray-200"></div>
                    <div className="aspect-square bg-gray-200"></div>
                    <div className="aspect-square bg-gray-200"></div>
                    <div className="aspect-square bg-gray-200"></div>
                </div>
            </div>
        </section>
    )
}

export default Imagenes

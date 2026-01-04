import React from 'react'

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
        <section className="py-20 px-6 bg-gray-50">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-serif mb-8">Qué Hago</h2>
                <p className="text-xl mb-6 font-medium">
                    Consultoría gastronómica para proyectos que quieren durar.
                </p>
                <p className="text-lg mb-12 leading-relaxed">
                    Trabajo con restaurantes, grupos gastronómicos y emprendedores que buscan claridad antes de crecer, estructura antes de escalar y coherencia antes de abrir.
                </p>

                <h3 className="text-xl mb-8 font-medium">Mis servicios incluyen:</h3>
                <div className="space-y-8">
                    {servicios.map((servicio, index) => (
                        <div key={index} className="border-l-2 border-black pl-6">
                            <h4 className="text-lg font-medium mb-2">{servicio.titulo}</h4>
                            <p className="text-gray-600">{servicio.descripcion}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default QueHago

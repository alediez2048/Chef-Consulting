import React from 'react'

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
        <section className="py-20 px-6">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-serif mb-8">Cómo Trabajo</h2>
                <p className="text-xl mb-12 font-medium">
                    Un proceso simple, honesto y enfocado en resultados.
                </p>

                <div className="space-y-8">
                    {pasos.map((paso, index) => (
                        <div key={index} className="flex gap-6">
                            <div className="text-4xl font-serif flex-shrink-0">{paso.numero}</div>
                            <div>
                                <h3 className="text-xl font-medium mb-2">{paso.titulo}</h3>
                                <p className="text-gray-600">{paso.descripcion}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ComoTrabajo

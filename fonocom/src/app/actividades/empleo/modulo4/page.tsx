import React from 'react';
import Header from '../../../header';

const Modulo1 = () => {
    return (
        <div className="p-6 space-y-6">
            <Header />
            <div className="p-6 space-y-6"
            style={{
                    padding: "0 1.5rem !important",
                }}>
                <br></br>
                <p className="text-2xl font-bold">Comunicación</p>
                <section>
                    <br></br>
                    <h2 className="text-xl font-extrabold">Descripción</h2>
                    <p className='text-sm  font-light'>Este programa cubre los conceptos fundamentales de la comunicación...</p>
                </section>
                <section>
                    <h2 className="text-xl font-semibold">Actividades</h2>
                    <ul>
                        <li>Leer capítulo 1: Introducción a la comunicación</li>
                        <li>Realizar ejercicios de expresión verbal</li>
                        <li>Participar en un debate sobre temas actuales</li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default Modulo1;
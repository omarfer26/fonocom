import React from 'react';

const Comunicacion = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Programa de Comunicación</h1>
      <section>
        <h2 className="text-xl font-semibold">Teoría</h2>
        <p>Este programa cubre los conceptos fundamentales de la comunicación...</p>
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
  );
};

export default Comunicacion;

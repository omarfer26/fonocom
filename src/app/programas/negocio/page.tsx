/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Header from '../../header';
import Link from 'next/link';
import Footer from '../../footer';

const empleo = () => {
  return (
    <div className="p-6 space-y-6">
      <Header />
    <div className="p-6 space-y-6 flex">
      <div className="flex-1 p-6 space-y-6 overflow-auto"
      style={{
          padding: "0 1.5rem !important",
        }}>
      <br></br>
      <div className="p-6 space-y-6 flex">
        <img src="/images/negocioIcon.png" alt="icon" className='size-7' />
      <p className="text-2xl font-bold"> &nbsp; Ideas de negocio</p>
      </div>
      <section>
        <br></br>
        <h1 className="text-xl font-extrabold">Descripción</h1>
        <p className='text-sm  font-light'>Este programa cubre los conceptos fundamentales de la comunicación enfocada en los negocios y el emprendimiento...</p>
      </section>
      <br></br>
      <h1>Introducción</h1>
      <section className='space-y-1 w-fit flex'>
        <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, dolore aperiam aliquid aspernatur dolorem asperiores. Dolores, enim dignissimos. Quasi mollitia est in eum ipsum unde consectetur nam facere laborum voluptatem.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At delectus molestiae quam velit mollitia veritatis nam totam pariatur, libero vitae a culpa. Veritatis voluptatum illo repudiandae deleniti odio, doloribus ex!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, natus. Minima, quos. Quae, autem? Dignissimos, repellat. Quisquam, natus. Minima, quos. Quae, autem? Dignissimos, repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, natus. Minima, quos. Quae, autem? Dignissimos, repellat. Quisquam, natus. Minima, quos. Quae, autem? Dignissimos, repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, natus. Minima, quos. Quae, autem? Dignissimos, repellat. Quisquam, natus. Minima, quos. Quae, autem? Dignissimos, repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, provident eius. Est illo asperiores assumenda ipsa? Corrupti, tempora. Commodi necessitatibus rerum minima fuga amet iure vitae, optio doloremque laborum repellendus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut incidunt cupiditate accusantium. Provident, illum voluptatum atque, ea ex commodi tenetur labore, quos dolores obcaecati fugit nulla. Veritatis dignissimos vel sed?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quae officia impedit itaque laborum quas quibusdam deleniti esse eos. Sunt rerum sapiente nisi odit quod eligendi. Illum porro tempora nostrum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo dolorem dolorum harum fuga laborum nisi quibusdam voluptas dolores culpa voluptates excepturi cupiditate nihil earum debitis ipsum ut laboriosam, voluptatem iusto!
        </p>
          <aside className=" w-64 p-4 border-l border-gray-300 shrink-0">
            <img src="/images/negocio.png" alt="Negocio" className='w-192 h-192' />
          </aside>
      </section>
        <br></br>
          <div className="p-4 gap-10">
            <p className="text-xl font-semibold">Contenido Programático</p>
            <div className="mt-8">       
              <br/>
              <div className="flex flex-row gap-6 max-w-full">
                <Link href="/programas/negocio/modulos/modulo1">
                  <button type="button" className="button">Modulo 1: Capacitación en habilidades emprendedoras</button>
                </Link>
                <Link href="/programas/negocio/modulos/modulo2">
                  <button type="button" className="button">Modulo 2: Desarrollo de ideas de negocio</button>
                </Link>
                <Link href="/programas/negocio/modulos/modulo3">
                  <button type="button" className="button">Modulo 3: Educación financiera básica</button>
                </Link>
                <Link href="/programas/negocio/modulos/modulo4">
                  <button type="button" className="button">Modulo 4: Entrenamiento en comunicación para ventas</button>
                </Link>
                <Link href="/programas/negocio/modulos/modulo5">
                  <button type="button" className="button">Modulo 5: Formación a familias o cuidadores sobre emprendimiento</button>
                </Link>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default empleo;

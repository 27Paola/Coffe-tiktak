import React from 'react';

const Categories = () => {
    return (
        <>
            <section className='pt-4 pb-4 bg-black rounded-3xl w-11/12 m-auto md:pt-6'>
                <div className='p-2'>
                    <h2 className='text-center font-Bebas text-3xl md:text-3xl lg:text-3xl xl:text-5xl 2xl:text-6xl text-white'>
                        Categorias
                    </h2>
                </div>

                <div className='grid grid-cols-2 gap-2 p-4 md:grid-cols-3 md:p-6  lg:p-10 lg:grid-cols-4 lg:gap-4 font-Bebas'>
                    <a id='Foods'>
                        <span className='flex flex-row justify-center p-2 px-3 text-1xl bg-white text-black rounded-xl md:text-3xl lg:text-3xl'>Comidas</span>
                    </a>

                    <a id='Beverages'>
                        <span className='flex flex-row justify-center p-2 px-3 text-21l bg-white text-black rounded-xl md:text-3xl lg:text-3xl'>Bebidas</span>
                    </a>

                    <a id='Liquors'>
                        <span className='flex flex-row justify-center p-2 px-3 text-1xl bg-white text-black rounded-xl md:text-3xl lg:text-3xl'>Licores</span>
                    </a>

                    <a id='Desserts'>
                        <span className='flex flex-row justify-center p-2 px-3 text-1xl bg-white text-black rounded-xl md:text-3xl lg:text-3xl'>Desayunos</span>
                    </a>

                    <a >
                        <span className='flex flex-row justify-center p-2 px-3 text-1xl bg-white text-black rounded-xl md:text-3xl lg:text-3xl'>Postres</span>
                    </a>

                    <a >
                        <span className='flex flex-row justify-center p-2 px-3 text-1xl bg-white text-black rounded-xl md:text-3xl lg:text-3xl'>Combos</span>
                    </a>

                    <a>
                        <span className='flex flex-row justify-center p-2 px-3 text-1xl bg-white text-black rounded-xl md:text-3xl lg:text-3xl'>Promociones</span>
                    </a>
                </div>


            </section>
        </>
    )
}

export default Categories
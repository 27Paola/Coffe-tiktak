import React from 'react'
import { IoBagAddOutline } from 'react-icons/io5';
import Huevo from '../assets/Huevo.png';
import Jamon from '../assets/jamon.png';
import Espinaca from '../assets/tomate.png';
import Maiz from '../assets/maiz.png';
import Fritos from '../assets/fritos.png';
import Rancheros from '../assets/rancheros.png';
import Omelette from '../assets/omelete.png';

const Breakfast = () => {
    return (

        <div className='container m-x-auto bg-white rounded-2xl w-11/12 mt-10 pb-5 '>
            <div className='flex justify-center col-span-1 md:col-span-2 lg:col-span-4'>
                <h3 className='text-5xl font-Bebas pt-10 text-black'>Desayunos</h3>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 m-6'>
                <div className='bg-slate-400 rounded-2xl'>
                    <h4 className='text-2xl p-3 text-center font-Bebas text-white'>Wrap de Huevo</h4>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Huevo} alt='Img del producto' />
                    <p className='font-Abel text-base p-5 text-white'>Desayunar en Tik Tak siempre será la mejor opción.</p>
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg text-white ml-10 font-Bebas'>$12.000</p>
                        <IoBagAddOutline className='text-2xl ml-24 text-white' />
                    </div>
                </div>

                <div className='bg-slate-400 rounded-2xl'>
                    <h3 className='text-2xl text-white p-3 text-center font-Bebas'>Huevos acompañados de jamon y queso</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Jamon} alt='Img del producto' />
                    <p className='font-Abel text-base text-white p-5'>Desayunar en Tik Tak siempre será la mejor opción.</p>
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg text-white ml-10 font-Bebas'>$12.500</p>
                        <IoBagAddOutline className='text-2xl text-white ml-24' />
                    </div>
                </div>

                <div className='bg-slate-400 rounded-2xl'>
                    <h3 className='text-2xl text-white p-3 text-center font-Bebas'>Huevos con espinaca y tomate + croissant</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Espinaca} alt='Img del producto' />
                    <p className='font-Abel text-base text-white p-5'>Desayunar en Tik Tak siempre será la mejor opción.</p>
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg text-white ml-10 font-Bebas'>$14.500</p>
                        <IoBagAddOutline className='text-2xl text-white ml-24' />
                    </div>
                </div>

                <div className='bg-slate-400 rounded-2xl'>
                    <h3 className='text-2xl text-white p-3 text-center font-Bebas'>Huevos con maiz y queso + mogolla integral</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Maiz} alt='Img del producto' />
                    <p className='font-Abel text-base text-white p-5'>Desayunar en Tik Tak siempre será la mejor opción.</p>
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg text-white ml-10 font-Bebas'>$14.800</p>
                        <IoBagAddOutline className='text-2xl text-white ml-24' />
                    </div>
                </div>

                <div className='bg-slate-400 rounded-2xl'>
                    <h3 className='text-2xl text-white p-3 text-center font-Bebas'>Huevos fritos + pan tajado + tocineta</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Fritos} alt='Img del producto' />
                    <p className='font-Abel text-base text-white p-5'>Desayunar en Tik Tak siempre será la mejor opción.</p>
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg text-white ml-10 font-Bebas'>$15.800</p>
                        <IoBagAddOutline className='text-2xl text-white ml-24' />
                    </div>
                </div>

                <div className='bg-slate-400 rounded-2xl'>
                    <h3 className='text-2xl text-white p-3 text-center font-Bebas'>Huevos rancheros + Arepa</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Rancheros} alt='Img del producto' />
                    <p className='font-Abel text-base text-white p-5'>Desayunar en Tik Tak siempre será la mejor opción.</p>
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg text-white ml-10 font-Bebas'>$15.800</p>
                        <IoBagAddOutline className='text-2xl text-white ml-24' />
                    </div>
                </div>

                <div className='bg-slate-400 rounded-2xl'>
                    <h3 className='text-2xl text-white p-3 text-center font-Bebas'>Huevos rancheros + Arepa</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Rancheros} alt='Img del producto' />
                    <p className='font-Abel text-base text-white p-5'>Desayunar en Tik Tak siempre será la mejor opción.</p>
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg text-white ml-10 font-Bebas'>$15.800</p>
                        <IoBagAddOutline className='text-2xl text-white ml-24' />
                    </div>
                </div>

                <div className='bg-slate-400 rounded-2xl'>
                    <h3 className='text-2xl text-white p-3 text-center font-Bebas'>Omelette + pan tajado / croissant</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Omelette} alt='Img del producto' />
                    <p className='font-Abel text-base text-white p-5'>Desayunar en Tik Tak siempre será la mejor opción.</p>
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg text-white ml-10 font-Bebas'>$15.800</p>
                        <IoBagAddOutline className='text-2xl text-white ml-24' />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Breakfast

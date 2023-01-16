import React from 'react'
import { IoBagAddOutline } from 'react-icons/io5';
import sal from '../assets/sal.png';
import Nachos from '../assets/Nachos.png';
import Wraps from '../assets/Wraps.png';
import tostadas from '../assets/Tostadas.png';
import Quesadillas from '../assets/Quesadillas.png';
import Arepa from '../assets/Arepa.png';
import Waffle from '../assets/Waffle.png';
import Mexicano from '../assets/Mexicano.png';

const Foods = () => {
    return (
        <div className='container m-x-auto bg-gray-50 rounded-2xl w-11/12 mt-10 pb-5 '>
            <div className='flex justify-center col-span-1 md:col-span-2 lg:col-span-4'>
                <h1 className='text-5xl font-Bebas pt-10'>Comidas</h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 m-6'>
                <div className='bg-slate-400 col-start-1 rounded-2xl'>
                    <h3 className='text-2xl p-3 text-center font-Bebas'>Sandwich de Jamon, Pollo, Cerdo o Atùn</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={sal} alt='Img del producto' />
                    <p className='font-Abel text-base p-5'>Pan de la casa, artesanal con especias con jamon de pollo o cerdo, queso, lechuga, tomate, espinaca, salsa de la casa acompañado de nachos</p>
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg ml-10 font-Bebas'>$15.000</p>
                        <IoBagAddOutline className='text-2xl ml-24' />
                    </div>
                </div>

                <div className='bg-slate-400 rounded-2xl'>
                    <h3 className='text-2xl p-3 text-center font-Bebas'>Nachos</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Nachos} alt='Img del producto' />
                    <p className='font-Abel text-base p-5'>Base de nachos con queso gratinado, maíz tierno, pico de gallo y salsas de la casa </p>
                    <div className='grid grid-cols-2 pb-3'>
                        <p className='text-lg ml-10 font-Bebas'>$13.500</p>
                        <IoBagAddOutline className='text-2xl ml-24' />
                    </div>
                </div>

                <div className='bg-slate-400 rounded-2xl'>
                    <h3 className='text-2xl p-3 text-center font-Bebas'>Wraps de Jamon de Pollo, Cerdo o Atùn</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Wraps} alt='Img del producto' />
                    <p className='font-Abel text-base p-5'>Tortilla de maiz con jamón de pollo o cerdo, queso, lechuga, tomate, espinaca, salsa de la casa acompañado de nachos o papitas sabor a pollo.
                    (envueltas tipo burrito)</p>
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg ml-10 font-Bebas'>$13.500</p>
                        <IoBagAddOutline className='text-2xl ml-24' />
                    </div>
                </div>

                <div className='bg-slate-400 rounded-2xl'>
                    <h3 className='text-2xl p-3 text-center font-Bebas'>Tostadas Francesas</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={tostadas} alt='Img del producto' />
                    <p className='font-Abel text-base p-5'>Tostadas gratinadas con huevo, queso y tocineta.</p>
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg ml-10 font-Bebas'>$15.000</p>
                        <IoBagAddOutline className='text-2xl ml-24' />
                    </div>
                </div>

                <div className='bg-slate-400 rounded-2xl'>
                    <h3 className='text-2xl p-3 text-center font-Bebas'>Quesadillas</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Quesadillas} alt='Img del producto' />
                    <p className='font-Abel text-base p-5'>Tortilla de maiz con jamón a tu elección y queso (SALADA) ó Arequipe y queso (DULCE)</p>
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg ml-10 font-Bebas'>$15.000</p>
                        <IoBagAddOutline className='text-2xl ml-24' />
                    </div>
                </div>

                <div className='bg-slate-400 rounded-2xl'>
                    <h3 className='text-2xl p-3 text-center font-Bebas'>Arepa con Queso</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Arepa} alt='Img del producto' />
                    <p className='font-Abel text-base p-5'> Contiene una buena cantidad de queso, hechas con los mejores producto.</p>
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg ml-10 font-Bebas'>$4.600</p>
                        <IoBagAddOutline className='text-2xl ml-24' />
                    </div>
                </div>

                <div className='bg-slate-400 rounded-2xl'>
                    <h3 className='text-2xl p-3 text-center font-Bebas'>Waffle Italiano</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Waffle} alt='Img del producto' />
                    <p className='font-Abel text-base p-5'>Base de Waffle con espinaca, queso, tomate y jamón </p>
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg ml-10 font-Bebas'>$18.000</p>
                        <IoBagAddOutline className='text-2xl ml-24' />
                    </div>
                </div>

                <div className='bg-slate-400 rounded-2xl'>
                    <h3 className='text-2xl p-3 text-center font-Bebas'>Waffle Mexicano</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Mexicano} alt='Img del producto' />
                    <p className='font-Abel text-base p-5'>Base de waffle con lechuga, jamón, queso, pico de gallo, nachos triturados y salsas de la casa</p>
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg ml-10 font-Bebas'>$18.000</p>
                        <IoBagAddOutline className='text-2xl ml-24' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Foods
import React from 'react';
import { IoBagAddOutline } from 'react-icons/io5';
import Macadamia  from '../assets/Macadamia.png';
import Monkey from '../assets/monkey.png';
import Frape from '../assets/Frape.png';
import Soda from '../assets/soda.png';
import Limonada from '../assets/Limonada.png';
import Cold from '../assets/Cold.png';
import Milo from '../assets/Milo.png';
import Frio from '../assets/Frio.png';

const Beverages = () => {
    return (
        <div className='container m-x-auto bg-slate-600 rounded-2xl w-11/12 mt-10 pb-5 '>
            <div className='flex justify-center col-span-1 md:col-span-2 lg:col-span-4'>
                <h1 className='text-5xl font-Bebas pt-10 text-white'>Bebidas</h1>
            </div>

            <div className='flex justify-start pl-10 md:pl-12 lg:pl-20 font-Bebas mt-5'>
                <h3 className='text-3xl text-white'>Bebidas Frias</h3>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 m-6'>
                <div className='bg-black col-start-1 rounded-2xl'>
                    <h3 className='text-2xl p-3 text-center font-Bebas text-white'>Macadamia o Crema Irlandesa</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Macadamia} alt='Img del producto' />
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg text-white ml-10 font-Bebas'>$10.500</p>
                        <IoBagAddOutline className='text-2xl ml-24 text-white' />
                    </div>
                </div>

                <div className='bg-black rounded-2xl'>
                    <h3 className='text-2xl p-3 text-center font-Bebas text-white'>Tea Monkey</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Monkey} alt='Img del producto' />
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg text-white ml-10 font-Bebas'>$8.200</p>
                        <IoBagAddOutline className='text-2xl ml-24 text-white' />
                    </div>
                </div>

                <div className='bg-black rounded-2xl'>
                    <h3 className='text-2xl p-3 text-center font-Bebas text-white'>Frappe</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Frape} alt='Img del producto' />
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg text-white ml-10 font-Bebas'>$9.800</p>
                        <IoBagAddOutline className='text-2xl ml-24 text-white' />
                    </div>
                </div>

                <div className='bg-black  rounded-2xl'>
                    <h3 className='text-2xl p-3 text-center font-Bebas text-white'>Monkey Soda</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Soda} alt='Img del producto' />
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg text-white ml-10 font-Bebas'>$8.000</p>
                        <IoBagAddOutline className='text-2xl ml-24 text-white' />
                    </div>
                </div>

                <div className='bg-black rounded-2xl'>
                    <h3 className='text-2xl p-3 text-center font-Bebas text-white'>Limonadas</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Limonada} alt='Img del producto' />
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg text-white ml-10 font-Bebas'>$7.000</p>
                        <IoBagAddOutline className='text-2xl ml-24 text-white' />
                    </div>
                </div>

                <div className='bg-black  rounded-2xl'>
                    <h3 className='text-2xl p-3 text-center font-Bebas text-white'>Cold Brew</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Cold} alt='Img del producto' />
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg text-white ml-10 font-Bebas'>$7.000</p>
                        <IoBagAddOutline className='text-2xl ml-24 text-white' />
                    </div>
                </div>

                <div className='bg-black rounded-2xl'>
                    <h3 className='text-2xl p-3 text-center font-Bebas text-white'>Milo Frio</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Milo} alt='Img del producto' />
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg text-white ml-10 font-Bebas'>$7.000</p>
                        <IoBagAddOutline className='text-2xl ml-24 text-white' />
                    </div>
                </div>

                <div className='bg-black rounded-2xl'>
                    <h3 className='text-2xl p-3 text-center font-Bebas text-white'>Latte Frio</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Frio} alt='Img del producto' />
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg text-white ml-10 font-Bebas'>$7.500</p>
                        <IoBagAddOutline className='text-2xl ml-24 text-white' />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Beverages
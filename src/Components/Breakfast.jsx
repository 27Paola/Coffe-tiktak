import React from 'react'
import { IoBagAddOutline } from 'react-icons/io5';
import Huevo from '../assets/Huevo.png';
import Jamon from '../assets/monkey.png';
import Espinaca from '../assets/Frape.png';
import Maiz from '../assets/soda.png';
import Fritos from '../assets/Limonada.png';
import Rancheros from '../assets/Cold.png';
import Omelette from '../assets/Milo.png';

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
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg text-white ml-10 font-Bebas'>$12.000</p>
                        <IoBagAddOutline className='text-2xl ml-24 text-white' />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Breakfast

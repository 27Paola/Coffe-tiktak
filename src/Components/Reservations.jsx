import React from 'react';
import Reservacion from '../assets/reservacion.png';
import Reservacion1 from '../assets/reservacion1.png';
import Reservacion2 from '../assets/reservacion2.png';
import Reservacion3 from '../assets/reservacion3.png';
import { RiWhatsappFill } from "react-icons/ri";

const Information = () => {
    return (
        <div className='container m-x-auto bg-black rounded-2xl w-11/12 mt-10 pb-5 '>
            <div className='flex justify-center col-span-1 md:col-span-2 lg:col-span-4'>
                <h1 className='text-5xl font-Bebas pt-10 text-white'>Reservas</h1>
            </div>
            <div>
                <p className='p-5 text-3xl text-white'>Para informacion sobre la reserva ya sea de el lugar o una mesa, escribe directamente al WhatsApp.</p>
            </div>

            <a href='https://api.whatsapp.com/send/?phone=573214894777&text&type=phone_number&app_absent=0' className='flex flex-row pl-16 hover:text-slate-300'>
                <RiWhatsappFill className='text-3xl text-white hover:text-slate-500' />
                <p className='text-lg'> +57 3214894777</p>
            </a>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 m-6'>
                <div className='bg-white col-start-1 rounded-2xl'>
                    <img className='rounded-2xl h-58 w-11/12 m-auto scale-90' src={Reservacion} alt='Img del producto' />
                </div>

                <div className='bg-white rounded-2xl'>
                    <img className='rounded-2xl h-58 w-11/12 m-auto scale-90' src={Reservacion1} alt='Img del producto' />
                </div>

                <div className='bg-white rounded-2xl'>
                    <img className='rounded-2xl h-58 w-11/12 m-auto scale-90' src={Reservacion2} alt='Img del producto' />
                </div>

                <div className='bg-white rounded-2xl'>
                    <img className='rounded-2xl h-58 w-11/12 m-auto scale-90' src={Reservacion3} alt='Img del producto' />
                </div>


            </div>
        </div>
    );
}


export default Information

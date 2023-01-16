import React from 'react';
import Informacion from '../assets/informacion.png';
import Informacion1 from '../assets/Informacion1.png';
import Informacion2 from '../assets/informacion2.png';
import Informacion3 from '../assets/informacion3.png';

const Information = () => {
    return (
        <div  className='container m-x-auto bg-white rounded-2xl w-11/12 mt-10 pb-5 '>
            <div id='Information' className='flex justify-center col-span-1 md:col-span-2 lg:col-span-4'>
                <h1 className='text-5xl font-Bebas pt-10'>Màs Informaciòn</h1>
            </div>
            <div>
                <p className='p-5 text-3xl'>Somos un lugar el cual puedes venir a distraerte tomar algo hablar, mantenemos musica excelente, y pasarla bien con tu familia o amigos.
                    Acontinuacion unas imagenes y videos para que conozcan mas del este lugar.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 m-6'>
                <div className='bg-slate-400 col-start-1 rounded-2xl'>
                    <img className='rounded-2xl h-58 w-11/12 m-auto scale-90' src={Informacion} alt='Img del producto' />
                </div>
            
                <div className='bg-slate-400 rounded-2xl'>
                    <img className='rounded-2xl h-58 w-11/12 m-auto scale-90' src={Informacion1} alt='Img del producto' />
                </div>

                <div className='bg-slate-400 rounded-2xl'>
                    <img className='rounded-2xl h-58 w-11/12 m-auto scale-90' src={Informacion2} alt='Img del producto' />
                </div>

                <div className='bg-slate-400 rounded-2xl'>
                    <img className='rounded-2xl h-58 w-11/12 m-auto scale-90' src={Informacion3} alt='Img del producto' />
                </div>
            </div>
        </div>
    );
}


export default Information

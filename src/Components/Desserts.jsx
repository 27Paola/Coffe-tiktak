import React from 'react'
import { IoBagAddOutline } from 'react-icons/io5';
import Postre from '../assets/postre.png';
import Brownie from '../assets/Brownie.png'
import Helado from '../assets/Helado.png';
import Affogato from '../assets/Affogato.png';
import Cereales from '../assets/cereal.png';
import Parfait from '../assets/parfait.png';
import Dulce from '../assets/dulce.png';
import Donas from '../assets/Donas.png';
import Cheescake from '../assets/Cheescakes.png';
import tortas from '../assets/tortas.png';
import banano from '../assets/Banano.png';
import Maracuya from '../assets/maracuya.png';
import Croissants from '../assets/Croissants.png';

const Desserts = () => {
    return (
        <div className='container m-x-auto bg-slate-500 rounded-2xl w-11/12 mt-10 pb-5 '>
            <div className='flex justify-center col-span-1 md:col-span-2 lg:col-span-4'>
                <h1 className='text-5xl font-Bebas pt-10'>Postres</h1>
            </div>

            <div id='Desserts' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 m-6'>
                <div className='bg-slate-400 col-start-1 rounded-2xl'>
                    <h3 className='text-2xl p-3 text-center font-Bebas'>Copa TIK TAK</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Postre} alt='Img del producto' />
                    <p className='font-Abel text-base p-5'>Base de dulce de maracuyá ó mora, helado, galleta de cono, chantilly y fresas.</p>
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg ml-10 font-Bebas'>$8.500</p>
                        <IoBagAddOutline className='text-2xl ml-24' />
                    </div>
                </div>

                <div className='bg-slate-400 rounded-2xl'>
                    <h3 className='text-2xl p-3 text-center font-Bebas'>Brownie con Helado</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Brownie} alt='Img del producto' />
                    <p className='font-Abel text-base p-5'>Postre con excelente calidad.</p>
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg ml-10 font-Bebas'>$7.500</p>
                        <IoBagAddOutline className='text-2xl ml-24' />
                    </div>
                </div>

                <div className='bg-slate-400 rounded-2xl'>
                    <h3 className='text-2xl p-3 text-center font-Bebas'>Helado Borracho</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Helado} alt='Img del producto' />
                    <p className='font-Abel text-base p-5'>Base de galleta triturada, helado y 1 shot de licor a tu elección</p>
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg ml-10 font-Bebas'>$8.000</p>
                        <IoBagAddOutline className='text-2xl ml-24' />
                    </div>
                </div>

                <div className='bg-slate-400 rounded-2xl'>
                    <h3 className='text-2xl p-3 text-center font-Bebas'>Affogato</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Affogato} alt='Img del producto' />
                    <p className='font-Abel text-base p-5'>Base de helado con crema chantilly y un espresso de cafe sencillo.</p>
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg ml-10 font-Bebas'>$7.500</p>
                        <IoBagAddOutline className='text-2xl ml-24' />
                    </div>
                </div>

                <div className='bg-slate-400 rounded-2xl'>
                    <h3 className='text-2xl p-3 text-center font-Bebas'>Cereales</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Cereales} alt='Img del producto' />
                    <p className='font-Abel text-base p-5'>te ofrecemos un excelente cereal atrevete a probarlo.</p>
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg ml-10 font-Bebas'>$10.000</p>
                        <IoBagAddOutline className='text-2xl ml-24' />
                    </div>
                </div>

                <div className='bg-slate-400 rounded-2xl'>
                    <h3 className='text-2xl p-3 text-center font-Bebas'>Parfait de Frutas</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Parfait} alt='Img del producto' />
                    <p className='font-Abel text-base p-5'>Base de yougurt griego, granola y fruta.</p>
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg ml-10 font-Bebas'>$12.000</p>
                        <IoBagAddOutline className='text-2xl ml-24' />
                    </div>
                </div>

                <div className='bg-slate-400 rounded-2xl'>
                    <h3 className='text-2xl p-3 text-center font-Bebas'>Waffle Dulce</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Dulce} alt='Img del producto' />
                    <p className='font-Abel text-base p-5'>Base de waffle de la casa, crema chantilly, helado, fruta, 4 toppings y salsas a tu elección. Diversión y sabores en tu boca.</p>
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg ml-10 font-Bebas'>$18.000</p>
                        <IoBagAddOutline className='text-2xl ml-24' />
                    </div>
                </div>

                <div className='bg-slate-400 rounded-2xl'>
                    <h3 className='text-2xl p-3 text-center font-Bebas'>Donas Tik Tak</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Donas} alt='Img del producto' />
                    <p className='font-Abel text-base p-5'>Las mejores donas rellenas que vas a probar, pregunta por nuestros sabores.</p>
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg ml-10 font-Bebas'>$5.500</p>
                        <IoBagAddOutline className='text-2xl ml-24' />
                    </div>
                </div>

                <div className='bg-slate-400 rounded-2xl'>
                    <h3 className='text-2xl p-3 text-center font-Bebas'>Cheescake</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Cheescake} alt='Img del producto' />
                    <p className='font-Abel text-base p-5'>Prueba de nuestros mejores postres.</p>
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg ml-10 font-Bebas'>$7.500</p>
                        <IoBagAddOutline className='text-2xl ml-24' />
                    </div>
                </div>

                <div className='bg-slate-400 rounded-2xl'>
                    <h3 className='text-2xl p-3 text-center font-Bebas'>Tortas</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={tortas} alt='Img del producto' />
                    <p className='font-Abel text-base p-5'>Horneadas siempre frescas, producto estrella de Tik Tak</p>
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg ml-10 font-Bebas'>$6.000</p>
                        <IoBagAddOutline className='text-2xl ml-24' />
                    </div>
                </div>

                <div className='bg-slate-400 rounded-2xl'>
                    <h3 className='text-2xl p-3 text-center font-Bebas'>Torta Banano con Chips de Chocolate</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={banano} alt='Img del producto' />
                    <p className='font-Abel text-base p-5'>Deliciosa torta casera, pruebala.</p>
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg ml-10 font-Bebas'>$6.000</p>
                        <IoBagAddOutline className='text-2xl ml-24' />
                    </div>
                </div>

                <div className='bg-slate-400 rounded-2xl'>
                    <h3 className='text-2xl p-3 text-center font-Bebas'>Pudin de Maracuya</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Maracuya} alt='Img del producto' />
                    <p className='font-Abel text-base p-5'>Deliciosp pudin hecho con maracuya, pruebalo.</p>
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg ml-10 font-Bebas'>$6.500</p>
                        <IoBagAddOutline className='text-2xl ml-24' />
                    </div>
                </div>

                <div className='bg-slate-400 rounded-2xl'>
                    <h3 className='text-2xl p-3 text-center font-Bebas'>Croissants Dulces</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Croissants} alt='Img del producto' />
                    <p className='font-Abel text-base p-5'>Delicioso pan hecho con los mejores productos.</p>
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg ml-10 font-Bebas'>$7.000</p>
                        <IoBagAddOutline className='text-2xl ml-24' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Desserts

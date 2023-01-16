import React from 'react';
import { AiFillInstagram, AiOutlineTrademark } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import { FaTiktok } from "react-icons/fa";
import { BiHeart } from "react-icons/bi";
import { FaBus } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div>
            {/*------------------SOCIAL MEDIA------------------------*/}
                <div className='bg-slate-400 px-10 py-4'>
                    <h2 className='text-center text-black text-2xl leading-5 font-Bebas'>
                        ¡Hecha un vistazo a nuestros productos y conocenos mas!
                    </h2>
                    <div className='py-2'>
                        <h2 className=' text-1xl'>
                            Siguenos en nuestras redes sociales
                        </h2>

                        <div className='py-2 gap-2 ml-2'>
                            <a href='https://www.instagram.com/tiktakfaca/?igshid=YmMyMTA2M2Y%3D' className='flex flex-row hover:text-slate-300'>
                                <AiFillInstagram className='text-black text-3xl hover:text-slate-500' />
                                <p className='text-lg'>@tiktakfaca</p>
                            </a>

                            <a href='https://www.facebook.com/TIKTAKCAFE?mibextid=ZbWKwL' className='flex flex-row gap-2 hover:text-slate-300' >
                                <BsFacebook className='text-black text-2xl hover:text-slate-500' />
                                <p className='text-lg'> TikTak Cafe</p>
                            </a>
                            <a href='https://api.whatsapp.com/send/?phone=573214894777&text&type=phone_number&app_absent=0' className='flex flex-row gap-1 hover:text-slate-300'>
                                <RiWhatsappFill className='text-3xl text-black hover:text-slate-500' />
                                <p className='text-lg'> +57 3214894777</p>
                            </a>
                            <a href='https://www.tiktok.com/@tiktakcafeteriass' className='flex flex-row gap-1 hover:text-slate-300'>
                                <FaTiktok className='text-2xl text-black hover:text-slate-300' />
                                <p className='text-lg'> tiktakcafeteriass</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/*------------------MORE INFORMATION------------------------*/}
            <div className='grid grid-cols-1 gap-3 bg-black border-t-2 border-white pl-5 pr-2'>
                <div>
                    <div className='flex flex-row justify-center text-white'>
                        <FaBus className='text-3xl text-white' />
                        <h3 className=' font-Amatic text-2xl text-white'>Envios Solo Facatativa</h3>
                    </div>
                    <div>
                        <p className='text-center text-white'>Contraentrega a:<br /> (Facatativa)</p>
                    </div>
                </div>
                <p className='text-[11px] text-white'>® Realizado por: Paola Sanchez</p>
            </div>

        </>
    )
}


export default Footer

import React, { useState } from 'react';
import { FaHome, FaCocktail, FaUtensils } from "react-icons/fa";
import { IoIceCreamOutline } from "react-icons/io5";
import { SiBuymeacoffee } from "react-icons/si";
import { SlPresent } from "react-icons/sl";
import { MdOutlineOutdoorGrill, MdOutlinePeopleAlt } from "react-icons/md";
import { GrSchedule } from "react-icons/gr";
import { BiMenu, BiReceipt } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { IoFastFoodOutline } from "react-icons/io5";
import { RiShoppingCartFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import Img3 from '../assets/logo-gris.png';

const Navbar = () => {
  const [menu, setMenu] = useState(false)

  return (
    <>

      <div className='fixed left-5 top-3 z-50 w-fit h-fit rounded-full text-slate-400  font-Bebas hover:text-slate-400'>
        <BiMenu className='text-4xl' onClick={() => setMenu(!menu)} />
      </div>
      <div>
        {menu && (
          <div className='fixed h-fit pb-40 px-8 py-16 flex flex-col gap-4 z-40 text-3xl bg-black drop-shadow-2xl text-slate-400 font-Bebas'>

            <div className='flex flex-row items-baseline hover:text-white'>
              <Link to="/">
                <FaHome className='text-2xl absolute left-8 ' />
                <span className='p-8'>Inicio</span>
              </Link>
            </div>

            <div className='flex flex-row items-baseline hover:text-white'>
              <a href='#Foods' >
                <IoFastFoodOutline className='text-2xl absolute left-8' />
                <a className='p-8'>Comidas</a>
              </a>
            </div>

            <div className='flex flex-row items-baseline hover:text-white'>
              <a href='#Beverages' >
                <SiBuymeacoffee className='text-2xl absolute left-8' />
                <span className='p-8'>Bebidas</span>
              </a>
            </div>

            <div className='flex flex-row items-baseline hover:text-white'>
              <a href='#Liquors'>
                <FaCocktail className='text-2xl absolute left-8' />
                <span className='p-8'>Licores</span>
              </a>
            </div>

            <div className='flex flex-row items-baseline  hover:text-white'>
              <a href='#Breakfast'>
                <FaUtensils className='text-2xl absolute left-8' />
                <span className='p-8'>Desayunos</span>
              </a>
            </div>

            <div className='flex flex-row items-baseline hover:text-white'>
              <a href='#Desserts'>
                <IoIceCreamOutline className='text-2xl absolute left-8' />
                <span className='p-8'>Postres</span>
              </a>
            </div>

            <div className='flex flex-row items-baseline  hover:text-white'>
              <Link>
                <SlPresent className='text-2xl absolute left-8' />
                <span className='p-8'>Promociones</span>
              </Link>
            </div>

            <div className='flex flex-row items-baseline hover:text-white'>
              <Link>
                <MdOutlineOutdoorGrill className='text-2xl absolute left-8' />
                <span className='p-8'>Combos</span>
              </Link>
            </div>

            <br />

            <div className='flex flex-row items-baseline hover:text-white'>
              <Link>
                <MdOutlinePeopleAlt className='text-2xl absolute left-8' />
                <span className='p-8'>Mas Informacion</span>
              </Link>
            </div>

            <div className='flex flex-row items-baseline hover:text-white'>
              <Link>
                <GrSchedule className='text-2xl absolute left-8 bg-slate-400' />
                <span className='p-8'>Reserva</span>
              </Link>
            </div>

            <div className='flex flex-row items-baseline hover:text-white'>
              <Link>
                <BiReceipt className='text-2xl absolute left-8' />
                <span className='p-8'>Formulario</span>
              </Link>
            </div>

          </div>
        )}
      </div>

      <section className=' bg-black fixed w-full z-20 h-30'>
        <div className='flex justify-center text-lg diagonal-fractions p-2 text-white'>
          <picture className='flex justify-center w-1/4'>
            <img className='scale-100 w-40' src={Img3} />
          </picture>
          <div>
            <RiShoppingCartFill className='fixed right-10 top-5 text-slate-400 text-3xl'/>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar
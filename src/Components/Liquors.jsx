import React from 'react'
import { IoBagAddOutline } from 'react-icons/io5';
import Mar from '../assets/Mar.png';
import Delfin from '../assets/Delfin.png';
import Martini from '../assets/Martini.png';
import Tequila from '../assets/Tequila.png';
import Mojito from '../assets/mojito.png';
import Margarita from '../assets/Margarita.png';
import Piña from '../assets/Piña.png';
import Cubano from '../assets/cubano.png';
import Coffee from '../assets/coffee.png';
import Guaya from '../assets/guaya.png';
import Copa from '../assets/copa.png';
import Cerveza from '../assets/cervezas.png'

const Liquors = () => {
  return (

    <div className='container m-x-auto bg-black rounded-2xl w-11/12 mt-10 pb-5 '>
      <div className='flex justify-center col-span-1 md:col-span-2 lg:col-span-4'>
        <h1 className='text-5xl font-Bebas pt-10 text-white'>Licores</h1>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 m-6'>
        <div className='bg-slate-400 col-start-1 rounded-2xl'>
          <h4 className='text-2xl p-3 text-center font-Bebas text-white'>Espuma de Mar</h4>
          <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Mar} alt='Img del producto' />
          <div className='grid grid-cols-2 pb-3 '>
            <p className='text-lg text-white ml-10 font-Bebas'>$20.000</p>
            <IoBagAddOutline className='text-2xl ml-24 text-white' />
          </div>
        </div>


        <div className='bg-slate-400  rounded-2xl'>
          <h4 className='text-2xl p-3 text-center font-Bebas text-white'>Delfin Azul</h4>
          <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Delfin} alt='Img del producto' />
          <div className='grid grid-cols-2 pb-3 '>
            <p className='text-lg text-white ml-10 font-Bebas'>$20.000</p>
            <IoBagAddOutline className='text-2xl ml-24 text-white' />
          </div>
        </div>

        <div className='bg-slate-400 rounded-2xl'>
          <h4 className='text-2xl p-3 text-center font-Bebas text-white'>Martini Cosmopolitan</h4>
          <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Martini} alt='Img del producto' />
          <div className='grid grid-cols-2 pb-3 '>
            <p className='text-lg text-white ml-10 font-Bebas'>$20.000</p>
            <IoBagAddOutline className='text-2xl ml-24 text-white' />
          </div>
        </div>

        <div className='bg-slate-400 rounded-2xl'>
          <h4 className='text-2xl p-3 text-center font-Bebas text-white'>Tequila Sunrise</h4>
          <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Tequila} alt='Img del producto' />
          <div className='grid grid-cols-2 pb-3 '>
            <p className='text-lg text-white ml-10 font-Bebas'>$20.000</p>
            <IoBagAddOutline className='text-2xl ml-24 text-white' />
          </div>
        </div>

        <div className='bg-slate-400 rounded-2xl'>
          <h4 className='text-2xl p-3 text-center font-Bebas text-white'>Mojito Frozen</h4>
          <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Mojito} alt='Img del producto' />
          <div className='grid grid-cols-2 pb-3 '>
            <p className='text-lg text-white ml-10 font-Bebas'>$20.000</p>
            <IoBagAddOutline className='text-2xl ml-24 text-white' />
          </div>
        </div>

        <div className='bg-slate-400 rounded-2xl'>
          <h4 className='text-2xl p-3 text-center font-Bebas text-white'>Margarita de Frutas</h4>
          <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Margarita} alt='Img del producto' />
          <div className='grid grid-cols-2 pb-3 '>
            <p className='text-lg text-white ml-10 font-Bebas'>$20.000</p>
            <IoBagAddOutline className='text-2xl ml-24 text-white' />
          </div>
        </div>

        <div className='bg-slate-400 rounded-2xl'>
          <h4 className='text-2xl p-3 text-center font-Bebas text-white'>Piña Colada</h4>
          <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Piña} alt='Img del producto' />
          <div className='grid grid-cols-2 pb-3 '>
            <p className='text-lg text-white ml-10 font-Bebas'>$20.000</p>
            <IoBagAddOutline className='text-2xl ml-24 text-white' />
          </div>
        </div>

        <div className='bg-slate-400 rounded-2xl'>
          <h4 className='text-2xl p-3 text-center font-Bebas text-white'>Mijito Cubano</h4>
          <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Cubano} alt='Img del producto' />
          <div className='grid grid-cols-2 pb-3 '>
            <p className='text-lg text-white ml-10 font-Bebas'>$20.000</p>
            <IoBagAddOutline className='text-2xl ml-24 text-white' />
          </div>
        </div>

        <div className='bg-slate-400 rounded-2xl'>
          <h4 className='text-2xl p-3 text-center font-Bebas text-white'>Martini Coffee</h4>
          <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Coffee} alt='Img del producto' />
          <div className='grid grid-cols-2 pb-3 '>
            <p className='text-lg text-white ml-10 font-Bebas'>$20.000</p>
            <IoBagAddOutline className='text-2xl ml-24 text-white' />
          </div>
        </div>

        <div className='bg-slate-400 rounded-2xl'>
          <h4 className='text-2xl p-3 text-center font-Bebas text-white'>Guaya</h4>
          <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Guaya} alt='Img del producto' />
          <div className='grid grid-cols-2 pb-3 '>
            <p className='text-lg text-white ml-10 font-Bebas'>$50.000</p>
            <IoBagAddOutline className='text-2xl ml-24 text-white' />
          </div>
        </div>

        <div className='bg-slate-400 rounded-2xl'>
          <h4 className='text-2xl p-3 text-center font-Bebas text-white'>Copa Vino</h4>
          <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Copa} alt='Img del producto' />
          <div className='grid grid-cols-2 pb-3 '>
            <p className='text-lg text-white ml-10 font-Bebas'>$22.000</p>
            <IoBagAddOutline className='text-2xl ml-24 text-white' />
          </div>
        </div>

        <div className='bg-slate-400 rounded-2xl'>
          <h4 className='text-2xl p-3 text-center font-Bebas text-white'>Cerveza</h4>
          <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Cerveza} alt='Img del producto' />
          <div className='grid grid-cols-2 pb-3 '>
            <p className='text-lg text-white ml-10 font-Bebas'>$6.000</p>
            <IoBagAddOutline className='text-2xl ml-24 text-white' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Liquors
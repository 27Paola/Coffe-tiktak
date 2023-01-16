import React from 'react'
import Navbar from '../Components/Navbar'
import Categories from '../Components/Categories'
import Foods from '../Components/Foods'
import Beverages from '../Components/Beverages'
import Liquors from '../Components/Liquors'
import Breakfast from '../Components/Breakfast'
import Principal from '../assets/Principal.png'
import Desserts from '../Components/Desserts'

const Home = () => {
    return (
        <>
            <Navbar />
            <div className='flex flex-row justify-center gap-6 pt-24 p-5 md:grid-cols-2'>
                <picture>
                    <img className='rounded-2xl sm:scale-50 md:scale-75 lg:scale-75 xl:scale-90' src={Principal} />
                </picture>
            </div>

            <section>
                <div className=''>
                    
                    <h1 className='flex justify-center text-slate-500 col-span-2 text-4xl font-Bebas md:text-star md:text-6xl md:ml-8  lg:text-7xl lg:ml-24'>
                        Bienvenido a <br />
                    </h1>
                    <h2 className='text-black text-center text-4xl font-Bebas md:text-5xl lg:text-7xl col-span-3'>TIK TAK</h2>
                </div>
                <p className=' pl-5 pr-5 p-4 text-2xl md:text-4xl lg:text-4xl lg:px-20'>Te ofrecemos bebidas, comida, licores entre otra variedad de Alimentos que podrías probar, por otra parte podrías alquilar nuestro sitio para cumpleaños, graduaciones entre otras.  </p>
            </section>

            <section>
                <Categories />
                <Foods/>
                <Beverages />
                <Liquors />
                <Breakfast />
                <Desserts />
            </section>

           
        </>
    )
}

export default Home
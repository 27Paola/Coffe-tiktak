import React from 'react';
import { IoBagAddOutline } from 'react-icons/io5';
import Macadamia from '../assets/Macadamia.png';
import Monkey from '../assets/monkey.png';
import Frape from '../assets/Frape.png';
import Soda from '../assets/soda.png';
import Limonada from '../assets/Limonada.png';
import Cold from '../assets/Cold.png';
import Milo from '../assets/Milo.png';
import Frio from '../assets/Frio.png';
import Capuchino from '../assets/Capuchino.png';
import Latte from '../assets/Latte.png';
import Crema from '../assets/crema.png';
import Irlandesa from '../assets/irlandesa.png';
import Espreso from '../assets/espreso.png';
import Cafe from '../assets/cafe.png';
import Mocka from '../assets/mocka.png';
import Tinto from '../assets/tinto.png';
import Carga from '../assets/espreso.png';
import Macchiato from '../assets/macchiato.png';
import Bombon from '../assets/Bombon.png';
import Te from '../assets/te.png';
import Chai from '../assets/Chai.png';
import Infusion from '../assets/infusion.png';
import Frutas from '../assets/frutas.png';
import Caliente from '../assets/milocaliente.png';
import Chocolate from '../assets/Chocolate.png';
import Cafecito from '../assets/Cafecito.png';

const Beverages = () => {
    return (
        <div id='Beverages' className='container m-x-auto bg-slate-600 rounded-2xl w-11/12 mt-10 pb-5 '>
            <div className='flex justify-center col-span-1 md:col-span-2 lg:col-span-4'>
                <h1 className='text-5xl font-Bebas pt-10 text-white'>Bebidas</h1>
            </div>


            {/*----------------------------COLD DRINKS----------------------- */}
            <div className='flex justify-start pl-10 md:pl-12 lg:pl-20 font-Bebas mt-5'>
                <h3 className='text-3xl text-white'>Bebidas Frias</h3>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 m-6'>
                <div className='bg-black col-start-1 rounded-2xl'>
                    <h3 className='text-2xl p-3 text-center font-Bebas text-white'>Macadamia o Crema Irlandesa</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Macadamia} alt='Img del producto' />
                    <p className='font-Abel text-base p-5 text-white'>Solo pruébalo! Nunca probarás algo similar. </p>
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg text-white ml-10 font-Bebas'>$10.500</p>
                        <IoBagAddOutline className='text-2xl ml-24 text-white' />
                    </div>
                </div>

                <div className='bg-black rounded-2xl'>
                    <h3 className='text-2xl p-3 text-center font-Bebas text-white'>Tea Monkey</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Monkey} alt='Img del producto' />
                    <p className='font-Abel text-base p-5 text-white'>Deliciosos y refrescantes aguas gasificadas saborizadas con tes completamente naturales</p>
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg text-white ml-10 font-Bebas'>$8.200</p>
                        <IoBagAddOutline className='text-2xl ml-24 text-white' />
                    </div>
                </div>

                <div className='bg-black rounded-2xl'>
                    <h3 className='text-2xl p-3 text-center font-Bebas text-white'>Frappe</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Frape} alt='Img del producto' />
                    <p className='font-Abel text-base p-5 text-white'>Frappes refrescantes con sabores al estilo Tik Tak </p>
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg text-white ml-10 font-Bebas'>$9.800</p>
                        <IoBagAddOutline className='text-2xl ml-24 text-white' />
                    </div>
                </div>

                <div className='bg-black  rounded-2xl'>
                    <h3 className='text-2xl p-3 text-center font-Bebas text-white'>Monkey Soda</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Soda} alt='Img del producto' />
                    <p className='font-Abel text-base p-5 text-white'>Solo pruébalo! Nunca probarás algo similar, Bebida de la casa.</p>
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg text-white ml-10 font-Bebas'>$8.000</p>
                        <IoBagAddOutline className='text-2xl ml-24 text-white' />
                    </div>
                </div>

                <div className='bg-black rounded-2xl'>
                    <h3 className='text-2xl p-3 text-center font-Bebas text-white'>Limonadas</h3>
                    <img className='rounded-2xl h-56 w-11/12 m-auto scale-90' src={Limonada} alt='Img del producto' />
                    <p className='font-Abel text-base p-5 text-white'>Solo pruébalo! Nunca probarás algo similar,esta limonada te resfrescara al instante. </p>
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg text-white ml-10 font-Bebas'>$7.000</p>
                        <IoBagAddOutline className='text-2xl ml-24 text-white' />
                    </div>
                </div>

                <div className='bg-black  rounded-2xl'>
                    <h3 className='text-2xl p-3 text-center font-Bebas text-white'>Cold Brew</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Cold} alt='Img del producto' />
                    <p className='font-Abel text-base p-5 text-white'>Bebida de especialidad por medio de una infusión fría de café. Tómala pura o acompañala con un shot de leche de tu preferencia.</p>
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg text-white ml-10 font-Bebas'>$7.000</p>
                        <IoBagAddOutline className='text-2xl ml-24 text-white' />
                    </div>
                </div>

                <div className='bg-black rounded-2xl'>
                    <h3 className='text-2xl p-3 text-center font-Bebas text-white'>Milo Frio</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Milo} alt='Img del producto' />
                    <p className='font-Abel text-base p-5 text-white'>El milo te resfresca al instate, hecho con los mejores productos ¡Pruebalo ya!.</p>
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg text-white ml-10 font-Bebas'>$7.000</p>
                        <IoBagAddOutline className='text-2xl ml-24 text-white' />
                    </div>
                </div>

                <div className='bg-black rounded-2xl'>
                    <h3 className='text-2xl p-3 text-center font-Bebas text-white'>Latte Frio</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Frio} alt='Img del producto' />
                    <p className='font-Abel text-base p-5 text-white'>El latte frio café es una deliciosa bebida preparada con leche y café espresso, su sabor es inigualable y se puede disfrutar a cualquier hora y día.</p>
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg text-white ml-10 font-Bebas'>$7.500</p>
                        <IoBagAddOutline className='text-2xl ml-24 text-white' />
                    </div>
                </div>
            </div>


            {/*------------------------HOT DRINKS-------------- */}

            <div className='flex justify-center pt-10'>
                <h3 className='text-white text-4xl font-Bebas '>Bebidas Caliente</h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 m-6'>
                <div className='bg-white col-start-1 rounded-2xl'>
                    <h3 className='text-2xl p-3 text-center font-Bebas text-black'>Cappuccino Macadamia</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Capuchino} alt='Img del producto' />
                    <p className='font-Abel text-base p-5 text-black'>Bebida nacida en Italia, preparada con café expreso y leche montada con vapor para darle cremosidad.</p>
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg text-black ml-10 font-Bebas'>$6.500</p>
                        <IoBagAddOutline className='text-2xl ml-24 text-black' />
                    </div>
                </div>

                <div className='bg-white rounded-2xl'>
                    <h3 className='text-2xl p-3 text-center font-Bebas text-black'>Latte Macadamia</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Latte} alt='Img del producto' />
                    <p className='font-Abel text-base p-5 text-black'>Bebida clásica italiana compuesta por expresso de café Tik Tak y leche fresca.</p>
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg text-black ml-10 font-Bebas'>$6.600</p>
                        <IoBagAddOutline className='text-2xl ml-24 text-black' />
                    </div>
                </div>

                <div className='bg-white rounded-2xl'>
                    <h3 className='text-2xl p-3 text-center font-Bebas text-black'>Cappuccino Crema Irlandesa</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Crema} alt='Img del producto' />
                    <p className='font-Abel text-base p-5 text-black'>Bebida nacida en Italia, preparada con café expreso y leche montada con vapor para darle cremosidad.</p>
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg text-black ml-10 font-Bebas'>$6.200</p>
                        <IoBagAddOutline className='text-2xl ml-24 text-black' />
                    </div>
                </div>

                <div className='bg-white rounded-2xl'>
                    <h3 className='text-2xl p-3 text-center font-Bebas text-black'>Latte de Crema Irlandesa</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Irlandesa} alt='Img del producto' />
                    <p className='font-Abel text-base p-5 text-black'>Bebida clásica italiana compuesta por expresso de café Tik Tak y leche fresca.</p>
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg text-black ml-10 font-Bebas'>$6.500</p>
                        <IoBagAddOutline className='text-2xl ml-24 text-black' />
                    </div>
                </div>

                <div className='bg-white rounded-2xl'>
                    <h3 className='text-2xl p-3 text-center font-Bebas text-black'>Espreso</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Espreso} alt='Img del producto' />
                    <p className='font-Abel text-base p-5 text-black'>Preparación tradicional italiana. Se caracteriza por su rápida preparación a una alta presión y por un sabor y textura más concentrados.</p>
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg text-black ml-10 font-Bebas'>$3.200</p>
                        <IoBagAddOutline className='text-2xl ml-24 text-black' />
                    </div>
                </div>

                <div className='bg-white rounded-2xl'>
                    <h3 className='text-2xl p-3 text-center font-Bebas text-black'>Latte</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Cafe} alt='Img del producto' />
                    <p className='font-Abel text-base p-5 text-black'>Bebida clásica italiana compuesta por expresso de café Tik Tak y leche fresca.</p>
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg text-black ml-10 font-Bebas'>$6.600</p>
                        <IoBagAddOutline className='text-2xl ml-24 text-black' />
                    </div>
                </div>

                <div className='bg-white rounded-2xl'>
                    <h3 className='text-2xl p-3 text-center font-Bebas text-black'>Cappuccino </h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Cafe} alt='Img del producto' />
                    <p className='font-Abel text-base p-5 text-black'>Bebida nacida en Italia, preparada con café expreso y leche montada con vapor para darle cremosidad.</p>
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg text-black ml-10 font-Bebas'>$6.000</p>
                        <IoBagAddOutline className='text-2xl ml-24 text-black' />
                    </div>
                </div>

                <div className='bg-white rounded-2xl'>
                    <h3 className='text-2xl p-3 text-center font-Bebas text-black'>Mocka</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Mocka} alt='Img del producto' />
                    <p className='font-Abel text-base p-5 text-black'>Un tercio de espresso y dos tercios de leche vaporizada, pero se añade una parte de chocolate.</p>
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg text-black ml-10 font-Bebas'>$6.200</p>
                        <IoBagAddOutline className='text-2xl ml-24 text-black' />
                    </div>
                </div>

                <div className='bg-white rounded-2xl'>
                    <h3 className='text-2xl p-3 text-center font-Bebas text-black'>Mono (Tinto)</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Tinto} alt='Img del producto' />
                    <p className='font-Abel text-base p-5 text-black'>Preparación típica colombiana. Café espresso en agua caliente.</p>
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg text-black ml-10 font-Bebas'>$3.000</p>
                        <IoBagAddOutline className='text-2xl ml-24 text-black' />
                    </div>
                </div>

                <div className='bg-white rounded-2xl'>
                    <h3 className='text-2xl p-3 text-center font-Bebas text-black'>Mono Grande (Doble carga de cafe)</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Carga} alt='Img del producto' />
                    <p className='font-Abel text-base p-5 text-black'>Preparación típica colombiana. Café espresso en agua caliente.</p>
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg text-black ml-10 font-Bebas'>$3.500</p>
                        <IoBagAddOutline className='text-2xl ml-24 text-black' />
                    </div>
                </div>

                <div className='bg-white rounded-2xl'>
                    <h3 className='text-2xl p-3 text-center font-Bebas text-black'>Macchiato</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Macchiato} alt='Img del producto' />
                    <p className='font-Abel text-base p-5 text-black'>Excelsa preparación. Espresso con una pequeña cantidad de leche caliente y espumada.</p>
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg text-black ml-10 font-Bebas'>$6.500</p>
                        <IoBagAddOutline className='text-2xl ml-24 text-black' />
                    </div>
                </div>

                <div className='bg-white rounded-2xl'>
                    <h3 className='text-2xl p-3 text-center font-Bebas text-black'>Bombon de Cafè</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Bombon} alt='Img del producto' />
                    <p className='font-Abel text-base p-5 text-black'>Base de leche condensada con una extracción doble de café y espuma de leche.</p>
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg text-black ml-10 font-Bebas'>$7.000</p>
                        <IoBagAddOutline className='text-2xl ml-24 text-black' />
                    </div>
                </div>

                <div className='bg-white rounded-2xl'>
                    <h3 className='text-2xl p-3 text-center font-Bebas text-black'>Tè Chai</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Te} alt='Img del producto' />
                    <p className='font-Abel text-base p-5 text-black'>Las especias del Chai combinadas con el té, son una buena fuente de polifenoles, que regulan los niveles de grasas sanguíneas e impiden la adhesión de las mismas en las arterias.</p>
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg text-black ml-10 font-Bebas'>$6.500</p>
                        <IoBagAddOutline className='text-2xl ml-24 text-black' />
                    </div>
                </div>

                <div className='bg-white rounded-2xl'>
                    <h3 className='text-2xl p-3 text-center font-Bebas text-black'>Chai Espresso</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Chai} alt='Img del producto' />
                    <p className='font-Abel text-base p-5 text-black'>Las especias del Chai combinadas con el té, son una buena fuente de polifenoles, que regulan los niveles de grasas sanguíneas e impiden la adhesión de las mismas en las arterias.</p>
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg text-black ml-10 font-Bebas'>$6.000</p>
                        <IoBagAddOutline className='text-2xl ml-24 text-black' />
                    </div>
                </div>

                <div className='bg-white rounded-2xl'>
                    <h3 className='text-2xl p-3 text-center font-Bebas text-black'>Te Matcha Blue/Green</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Te} alt='Img del producto' />
                    <p className='font-Abel text-base p-5 text-black'>TE MATCHA GREEN: Acelera el metabolismo, te da energia para tu dia.
                    TÉ MATCHA BLUE: Te ayuda a relajarte</p>
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg text-black ml-10 font-Bebas'>$6.800</p>
                        <IoBagAddOutline className='text-2xl ml-24 text-black' />
                    </div>
                </div>

                <div className='bg-white rounded-2xl'>
                    <h3 className='text-2xl p-3 text-center font-Bebas text-black'>Tè Infusiòn</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Infusion} alt='Img del producto' />
                    <p className='font-Abel text-base p-5 text-black'>agua caliente con infusión de té frutos rojos y hierbabuena.</p>
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg text-black ml-10 font-Bebas'>$4.200</p>
                        <IoBagAddOutline className='text-2xl ml-24 text-black' />
                    </div>
                </div>

                <div className='bg-white rounded-2xl'>
                    <h3 className='text-2xl p-3 text-center font-Bebas text-black'>Tè de Frutas</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Frutas} alt='Img del producto' />
                    <p className='font-Abel text-base p-5 text-black'>Un te de frutas,endulsado natural con la mejor calidad y muy delicioso.</p>
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg text-black ml-10 font-Bebas'>$6.200</p>
                        <IoBagAddOutline className='text-2xl ml-24 text-black' />
                    </div>
                </div>

                <div className='bg-white rounded-2xl'>
                    <h3 className='text-2xl p-3 text-center font-Bebas text-black'>Milo Caliente</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Caliente} alt='Img del producto' />
                    <p className='font-Abel text-base p-5 text-black'>Bebida tradicional, perfecta para climas frios ¡Pruebalo!.</p>
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg text-black ml-10 font-Bebas'>$6.500</p>
                        <IoBagAddOutline className='text-2xl ml-24 text-black' />
                    </div>
                </div>

                <div className='bg-white rounded-2xl'>
                    <h3 className='text-2xl p-3 text-center font-Bebas text-black'>Chocolate Caliente</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Chocolate} alt='Img del producto' />
                    <p className='font-Abel text-base p-5 text-black'>Bebida tradicional, perfecta para climas frios ¡Pruebalo!.</p>
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg text-black ml-10 font-Bebas'>$6.500</p>
                        <IoBagAddOutline className='text-2xl ml-24 text-black' />
                    </div>
                </div>

                <div className='bg-white rounded-2xl'>
                    <h3 className='text-2xl p-3 text-center font-Bebas text-black'>Cafè Irlandes</h3>
                    <img className='rounded-2xl h-56 w-full m-auto scale-90' src={Cafecito} alt='Img del producto' />
                    <p className='font-Abel text-base p-5 text-black'>Base de whisky caramelizado con una extracción de café, espuma de leche y crema chantilly.</p>
                    <div className='grid grid-cols-2 pb-3 '>
                        <p className='text-lg text-black ml-10 font-Bebas'>$7.500</p>
                        <IoBagAddOutline className='text-2xl ml-24 text-black' />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Beverages
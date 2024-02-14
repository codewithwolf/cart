import React, { useState } from 'react'
import Product from '../Componentes/Product'
import Data from '../Data'

const Home = () => {
    const [sizes] = useState(["XS", "S", "M", "L", "XL", "XXL"])
    return (
        <div>
            <section className="p-16 justify-center items-center">
                <div className="container mx-auto flex  justify-around gap-6 ">
                    <div>
                        <div className='font-bold'>Sizes</div>
                        <div className='  grid lg:grid-cols-4 md:grid-cols-1 gap-3 mt-3  text-center'>
                            {
                                sizes.map((item) => (
                                    <button className='bg-slate-400 rounded-full p-2 text-white cursor-pointer hover:bg-yellow-500  '>{item}</button>
                                ))
                            }
                        </div>
                    </div>
                    <div className="  grid  lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2  items-center gap-6" >
                        {
                            Data.map((item) => (
                                <div className=""><Product item={item} /></div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
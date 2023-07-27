import React, { useEffect, useState } from 'react'
import SHop from './SHop';
import ShoppinCard from './ShoppinCard';
const Cards = ({ fake, addToCart }) => {




    return (

        <>


            <div className='container mx-auto py-8 grid grid-cols'>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {fake.map((values) => (
                        <ShoppinCard key={values.id} values={values} addToCart={addToCart} />

                    ))}
                </div>
            </div>



        </>
    )
}

export default Cards
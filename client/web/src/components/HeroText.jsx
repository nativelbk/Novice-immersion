import { Button } from '@nextui-org/react'
import React from 'react'

const HeroText = () => {
    return (
        <div className='flex flex-col gap-5'>
            <h1 className=' text-[52px] leading-tight text-white gradient_violet font-bold'>
                ENI GUIDE NOVICES EMERSSION
            </h1>
            <h2 className='text-white'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos tenetur accusamus ex repudiandae dolore
            </h2>
            <Button color="secondary" variant="bordered" className='w-[100px]'>
                Get started
            </Button>
        </div>
    )
}

export default HeroText

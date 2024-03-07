import React from 'react'
import { LampDemo } from './LampDemo'
import { CardHoverEffectDemo } from './CardHoverEffect'
import { HeroScrollDemo } from './HeroScrollDemo'
import { SparklesPreview } from './SpartkleText'
import { BentoGridDemo } from './BendoDemo'
// import Spar
import { BackgroundGradientDemo } from './BgDemo'
import Roadmp from './community/Roadmp'
const Orientation = () => {
    return (
        <div className='col-span-3 h-screen overflow-y-auto'>
            <SparklesPreview />
            <HeroScrollDemo />
            <h1 className='text-[32px] text-white border-b-1 w-fit'>Apprendre a specialiser</h1>
            <div className='flex flex-wrap gap-5 mt-5'>
                <Roadmp specilisation ="AI "  prerequis="Python ,math,probabilite"/>
                <Roadmp specilisation ="Web developper" prerequis="Html,css,Js,..."/>
                <Roadmp specilisation ="Data scientist" prerequis="Python,R"/>
                <Roadmp specilisation ="ASR" prerequis="Linux ,..."/>
                <Roadmp specilisation ="Devops" prerequis="Docker,Python,Java,Js"/>
                {/* <Roadmp/> */}


            </div>

        </div>
    )
}

export default Orientation

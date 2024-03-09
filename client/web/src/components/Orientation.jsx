import React from 'react'
import { LampDemo } from './LampDemo'
import { CardHoverEffectDemo } from './CardHoverEffect'
import { HeroScrollDemo } from './HeroScrollDemo'
import { SparklesPreview } from './SpartkleText'
import { BentoGridDemo } from './BendoDemo'
// import Spar
import { BackgroundGradientDemo } from './BgDemo'
import Roadmp from './community/Roadmp'
import AdvancedComputerScience from './advanced.computer.science'
import Roadmap from './roadmap'
const Orientation = () => {
    return (
        <div className='col-span-4 h-screen overflow-y-auto px-12 mt4'>
            <SparklesPreview />
            <AdvancedComputerScience/>
            <HeroScrollDemo />
            <h1 className='text-[32px] mt-8 w-fit'>RoadMap</h1>
            <Roadmap/>

        </div>
    )
}

export default Orientation

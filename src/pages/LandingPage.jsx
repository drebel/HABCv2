import React from 'react'

import Hero from '../components/Hero'
import Feature1 from '../components/Feature1'
import Feature2 from '../components/Feature2'
import IconGrid from '../components/IconGrid'
import FeatureWithIcons from '../components/FeatureWithIcons'
import CenteredHero from '../components/CenteredHero'

export default function LandingPage(){

    return (
        <>
            <Hero />
            <FeatureWithIcons />
            <Feature1 />
            <Feature2 />
            {/* <IconGrid /> */}
            <CenteredHero />
        </>
    )
}
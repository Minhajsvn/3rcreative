import React from 'react'
import versace from '../assets/bannerLogo/verace.svg'
import zara from '../assets/bannerLogo/zara-logo.svg'
import gucci from '../assets/bannerLogo/gucci-logo.svg'
import prada from '../assets/bannerLogo/prada-logo.svg'
import calvin from '../assets/bannerLogo/calvin-logo.svg'

export default function Banner() {
    return (
        <section className='flex flex-wrap justify-center lg:justify-around items-center bg-black gap-6 lg:gap-0 py-8'>
            <img src={versace} alt="versace-logo" />
            <img src={zara} alt="zara-logo" />
            <img src={gucci} alt="gucci-logo" />
            <img src={prada} alt="prada-logo" />
            <img src={calvin} alt="calvin-logo" />
        </section>
    )
}

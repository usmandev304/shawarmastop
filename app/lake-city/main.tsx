import Image from 'next/image'
import img1 from '../../images/lakecity/img1.png'
import CallToAction from '../home/components/callToAction'
import FastDelivery from '../../images/home-mainSection/FastDelivery.png'
import QualityFood from '../../images/home-mainSection/QualityFood.png'
import CashbyHand from '../../images/home-mainSection/CashbyHand.png'
import smImage from '../../images/lakecity/smImage.png'
import GoogleMap from './googleMap'

export default function MainSection() {
    return (
        <>
        <div className='mx-auto flex max-w-[1387px] flex-col items-center px-4'>
            <Image src={img1} alt='img1' className='hidden md:block' />
            <Image src={smImage} alt='img1' className='block md:hidden mt-8' />
            <CallToAction 
             badges={[
                { image: FastDelivery, alt: 'Fast Delivery', label: 'Fast Delivery' },
                { image: QualityFood, alt: 'Quality Food', label: 'Quality Food' },
                { image: CashbyHand, alt: 'Cash By Hand', label: 'Cash By Hand' },
            ]}
            buttonText="View more on Instagram"
            buttonHref="https://www.instagram.com/shawarmastop/"
            />
        </div>
        <GoogleMap />
    </>
    )
}
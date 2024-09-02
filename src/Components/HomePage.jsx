import React from 'react'
import HOC from './HOC'
import HomeAboutus from './HomeAboutus'
import "../Assets/Css/HomePage.css"
import HomeChooseus from './HomeChooseus'
import Counter from './Counter'
import Highlightmachinery from './Highlightmachinery'
import HomeTestimonial from './HomeTestimonial'
import HomeContactPage from './HomeContactPage'
import ClientLogorun from './ClientLogorun'
import EquipmentProduct from './EquipmentProduct'
import Slider from './Slider'

function HomePage() {
    return (
        <>
            <Slider />
            <HomeAboutus />
            <EquipmentProduct />
            <Counter />
            <HomeChooseus />
            <HomeTestimonial />
            <HomeContactPage />
            <ClientLogorun />
        </>
    )
}

export default HOC(HomePage)
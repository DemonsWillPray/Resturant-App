// RAFCE
import React, {useState} from 'react'
import Navbar from '../Navbar'
import {HeroContainer, 
HeroContent,
HeroItems, 
HeroH1, 
HeroP, 
HeroBtn } from './hitmanElements'
import SideBar from '../SideBar'


const Hitman = () => {
    const[isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <HeroContainer>
            <Navbar toggle=  {toggle}/>
            <SideBar isOpen = {isOpen} toggle ={toggle}/>
            <HeroContent>
                <HeroItems>
                    <HeroH1>Best Ada Resturant</HeroH1>
                    <HeroP>Order in 60 seconds</HeroP>
                    <HeroBtn>Place Order</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hitman

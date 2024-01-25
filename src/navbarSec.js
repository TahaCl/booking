import React, { useState } from 'react'
import { IoBedOutline, IoCarOutline } from "react-icons/io5";
import { PiAirplaneInFlight, PiTaxiLight } from "react-icons/pi";
import {  MdUnfoldLess } from "react-icons/md";
import { GiDefenseSatellite } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import './navbar.css'
const NavbarSec = () => {
    const navigate = useNavigate();
    const [activeBtn,setActiveBtn] = useState(true);
    const [activeBtn2,setActiveBtn2] = useState(false);
    const [activeBtn3,setActiveBtn3] = useState(false);
    const [activeBtn4,setActiveBtn4] = useState(false);
    const [activeBtn5,setActiveBtn5] = useState(false);
    const [activeBtn6,setActiveBtn6] = useState(false);
    const handleClick = (value, setValue) => {
        setActiveBtn(false);
        setActiveBtn2(false);
        setActiveBtn3(false);
        setActiveBtn4(false);
        setActiveBtn5(false);
        setActiveBtn6(false);
        setValue(value)
    }
  return (
    <main className='navbarSec'>
        <section onClick={() => {
            handleClick(true, setActiveBtn);
            navigate('/');
            }} className={activeBtn ? 'staysActive' : 'stays'}>
            <IoBedOutline style={{
                fontSize:'25px',
                marginRight:'0.4rem'
            }} />
            <p>stays</p>
        </section>
        <section onClick={() => {
            handleClick(true, setActiveBtn2);
            navigate('/flights');
            }} className={activeBtn2 ? 'flightsActive' : 'flights'}>
            <PiAirplaneInFlight style={{
                fontSize:'25px',
                marginRight:'0.4rem'
            }} />
            <p>flights</p>
        </section>
        <section onClick={() => {
            handleClick(true, setActiveBtn3);
            navigate('/carrental')
            }} className={activeBtn3 ? 'carRentalActive' : 'carRental'}>
            <IoCarOutline style={{
                fontSize:'25px',
                marginRight:'0.4rem'
            }}/>
            <p>Car rentals</p>
        </section>
                <section onClick={() => handleClick(true, setActiveBtn4)} className={activeBtn4 ? 'attractionActive' : 'attraction'}>
            <GiDefenseSatellite style={{
                fontSize:'25px',
                marginRight:'0.4rem'
            }}/>
            <p>attractions</p>
        </section>
        <section onClick={() => handleClick(true, setActiveBtn5)} className={activeBtn5 ? 'taxiLightActive' : 'taxiLight'}>
            <PiTaxiLight style={{
                fontSize:'25px',
                marginRight:'0.4rem'
            }}/>
            <p>airport taxis</p>
        </section>
                <section onClick={() => handleClick(true, setActiveBtn6)} className={activeBtn6 ? 'moreActive' : 'more'}>
            <MdUnfoldLess style={{
                fontSize:'25px',
                marginRight:'0.2rem'
            }} />
            <p>more</p>
        </section>
    </main>
  )
}

export default NavbarSec;
import React from 'react'
import { IoBedOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { FiMinus } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import DataPicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import './home.css'

var ValuePiece = Date | null;

var Value = ValuePiece | [ValuePiece, ValuePiece];

const Home = () => {
     const [value, onChange] = React.useState(new Date());
  return (
    <main className='home'>
        <section className='homeSlogan'>
            <h2 style={{
                fontSize: "45px",
                letterSpacing:'1.5px',
                paddingTop:'3.5rem'
            }}>Find your next stay</h2>
            <p style={{
                fontSize:'23px'
            }}>Search deals on hotels, homes, and much more...</p>
        </section>
        <div className='homeSearchInfoCont'>
        <section className='homeInfo'>
            <article className='destination'>
                <IoBedOutline style={{
                fontSize:'25px',
                marginRight:'0.4rem',
                marginLeft:'0.8rem'
            }}/>
                <p>Where are you going ?</p>
            </article>
            <article onClick={()=><DataPicker onChange={onChange} value={value}/>} className='checkDate'>
                <SlCalender style={{
                fontSize:'20px',
                marginRight:'0.4rem',
                marginLeft:'0.9rem'
            }}/>
            <p>Check-in-Date <FiMinus/> Check-out-Date</p>
            </article>
            <article className='peopleInfo'>
                <div style={{
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center'
                }}>
                <GoPerson style={{
                fontSize:'21px',
                marginRight:'0.4rem',
                marginLeft:'0.85rem'
            }}/>
            <p style={{paddingRight:'1.5rem'}}>2 adults . 0 children . 1 room</p>
            </div>
            <div className='peopleInfoToggle'>
                <IoIosArrowDown style={{
                fontSize:'17px',
                marginRight:'0.8rem',
                display:'flex',
                alignContent:'center',
                justifyContent:'center',
                // paddingLeft:'1rem'
            }}/>
            </div>
            </article>
            <article className='homeSearchBtn'>Search</article>
        </section>
        </div>
        <section className='homeCheckbox'>
            <article className='houseApart'>
                <input type='checkbox' style={{
                    marginRight:'0.4rem',
                    height:'20px',
                    width:'20px',
                }}/>
                <p>I'm looking for an entire house or apartment</p>
            </article>
            <article className='travelWork'>
                <input type='checkbox' style={{
                    marginRight:'0.4rem',
                    marginLeft:'1.3rem',
                    height:'20px',
                    width:'20px'
                }}/>
                <p>I'm traveling for work</p>
            </article>
        </section>
    </main>
  )
}

export default Home;
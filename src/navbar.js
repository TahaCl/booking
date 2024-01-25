import React, { useState } from 'react'
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { IoReorderFourOutline } from "react-icons/io5";
import './navbar.css';

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}
const Navbar = () => {
  const [navbarToggle,setNavbarToggle] = useState(false);
  return (
    <main className='navbar'>
    <section className='logo'>
        <h4>Booking.com</h4>
    </section>
     <div className={navbarToggle ? 'navbarComponentsToggle' : 'navbarComponents'}>
     <button className='currency'>PKR</button>   
     {/* <button className='country'></button>    */}
     <div className='country'>
        <span className='fi-pk' style={{
            width:'25px',
            height:'25px',
            backgroundSize:'contain',
            backgroundRepeat:'no-repeat',
            backgroundPosition:'50%',
            borderRadius: '50%',
        }}></span>
     </div>
     <button className='customerService'>?</button>  
     <button className='listYourProperty'>list your property</button>   
     <button className='register'>register</button>
     <button className='signin'>sign in</button> 
     </div>
     <section className='responsiveComponents'>
     <button className='signinOutside'>Sign in</button> 
     {/* <div class="g-signin2" data-onsuccess="onSignIn" style={{
      height: '10px',
      width: '20px',
      backgroundColor: 'yellow',
     }}></div> */}
     <article className='navbarToggleCont'>
     <IoReorderFourOutline onClick={() => setNavbarToggle(!navbarToggle)} className='navbarToggle' />
     </article>
     </section>
    </main>
  )
}

export default Navbar;
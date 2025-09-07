import React from 'react';
import Faq from './Faq';
//import {supabase} from '../supabaseClient';
import Appoinment from './appoinment';
export default function LandingPage(props){
    return(
        <div className='landing-container'>
                {/*header*/}
                <header className='header-container'>
                     <h1>Roy Musicals</h1>
                    <div className='logo'>
                        <img src='Roy Musicals logo.png' alt='logo'></img>
                    </div>
                    {/*<nav>
                        <a href='#About'>About</a>
                        <a href='#About'>Contact</a>
                        <a href='#About'>Visit</a>
                    </nav>*/}
                </header>

                {/*Hero section*/ }
                <section className='hero-section'>
                    <div>
                        <p>
                           Located in the heart of Bangalore, our Musical Electronic Instrument's Service Centre is your 
                           one-stop destination for expert instrument repair, precision tuning, 
                           and professional sound and lighting equipments. With a team of certified technicians 
                           and luthiers, we specialize in servicing a wide range of musical instruments
                            — from acoustic and electric guitars to keyboards,electronic piano's and studio equipment. 
                            Whether you're a touring artist, a music educator, or a passionate hobbyist, 
                            we ensure your gear performs at its best with meticulous care and industry-grade tools.
                             Experience reliable craftsmanship, quick turnaround times, and a commitment to sonic excellence 
                             — because your music deserves nothing less.
                        </p>
                    </div>
                {/*Services done*/}
                <section id='services_offered'>
                    <div className='services-offered-navigation'>
                    <nav>
                        <h4>Our Services</h4>
                        {/**services links to be added */}
                    </nav>
                    </div>
                    <hr></hr>
                    <div className='services'>
                        <img src={props.keyboardimage} alt={props.keyboard}></img>
                        <h5>{props.keyboard}</h5>
                        <img src={props.guitar_image} alt={props.electric_guitar}></img>
                        <h5>{props.electric_guitar}</h5>
                        <img src={props.speaker_img} alt={props.Speakers}></img>
                        <h5>{props.Speakers}</h5>
                        <img src={props.amp_img} alt={props.Amplifiers}></img>
                        <h5>{props.Amplifiers}</h5>
                        <img src={props.elec_drumimg} alt={props.Electronic_drums}></img>
                        <h5>{props.Electronic_drums}</h5>
                        <img src={props.djmix_img} alt={props.Dj_mix}></img>
                        <h5>{props.Dj_mix}</h5>
                        <img src={props.mic_img} alt={props.Mic}></img>
                        <h5>{props.Mic}</h5>
                    </div>
                    <button className='CTA' onClick={()=>{window.location.href='#Book_appoinment'}}>Book a service</button>
                </section> 
                <hr></hr>
                <section className='services-offered-container'>
                    {/**this section explains what kind of services we offer for instruments*/}
                    <div className='service-types' id='Amp_service'>
                        <div className='service-item left'>
                            <img className='service-img' src={props.amp_img} alt={props.Amplifiers}/>
                            <p>This is a amplifier</p>
                        </div>
                        <div className='service-item right' id='Keyboard_service'>
                            <img className='service-img' src='keyboard_img2.png' alt={props.keyboard}/>
                            <p>This is a keyboard</p>
                        </div>
                        <div className='service-item left' id='Electric_guitar_service'>
                            <img className='service-img' src='./yamaha_elec.png' alt={props.electric_guitar}/>
                            <p>This is a electric guitar</p>
                        </div>
                        <div className='service-item right' id='Speaker_service'>
                            <img className='service-img' src='./fender.png' alt={props.electric_guitar}/>
                            <p>This is a electric speaker</p>
                        </div>
                        <div className='service-item left' id='piano_service'>
                            <img className='service-img' src='./casio_piano.png' alt={props.electric_guitar}/>
                            <p>This is a electric electric piano</p>
                        </div>
                    </div>
                </section>
                {/**Booking appoinment */}
                <section className='Appoinment-container' id='Book_appoinment'>
                    <div className='appoinment-form'>
                        <h1>Book an Appoinment now!</h1>
                        <Appoinment />
                    </div>
                </section>
                </section>
                <section>
                     {/*FaQ section */}
                     <div className='Faq'>
                        <Faq/>
                     </div>
                </section>
                <hr></hr>
                <section className='Footer-container'>
                    <footer>
                        <div className='about-us'>
                            <h3>About us</h3>
                            <a href='#About'>Contact us</a>
                            <a href='#About'>Privacy policy</a>
                            <a href='#About'>Terms of service</a>
                        </div>
                        <div className='services_offered'>
                            <h3>Service offered</h3>
                            <a href='#Keyboard_service'>Keyboard keys changing</a>
                            <a href='#Electric_guitar_service'>Electric guitar knob change</a>
                            <a href='#Amp_service'>Amplifiers internal service</a>
                            <a href='#About'>Drum pads service</a>
                        </div>
                        <div className='services_offered'>
                            <h3>Brands we service</h3>
                            <a href='#Keyboard_service'>Yamaha</a>
                            <a href='#Speaker_service'>Fender</a>
                            <a href='#Amp_service'>StudioMaster</a>
                            <a href='#About'>Roland</a>
                            <a href='#piano_service'>Korg</a>
                            <a href='#piano_service'>Casio</a>
                            <a href='#Electric_guitar_service'>Ibanez</a>
                        </div>
                        <div className='social_media'>
                            <h3>Follow us:</h3>
                            <img src='./instagramicon.jpeg' alt='instagram'></img>
                            <a href='#About'>Instagram</a>
                            <img src='./fb_icon.jpg' alt='Facebook'></img>
                            <a href='#About'>Facebook</a>
                            <br></br>
                        </div>
                        <div className='location-details'>
                            <h3>Address:
                                <a href='https://maps.app.goo.gl/zC9zqw5HUGD1qe2k6' target='_blank'>ROY MUSICALS
                                Imperial Shopping Centre, 88/5, Residency Rd, near Brigade Road, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560025</a>
                                </h3>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.010069462384!2d77.60326120826181!3d12.971207314838919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17d31c433243%3A0xf3fa1f9cbc9f21b8!2sROY%20MUSICALS!5e0!3m2!1sen!2sin!4v1756822629372!5m2!1sen!2sin"
                             title='location'
                             width="370" 
                             height="250" 
                             allowfullscreen="" 
                             loading="lazy" 
                             referrerpolicy="no-referrer-when-downgrade"
                             alt="map"></iframe>
                        </div>
                        <div className='Contact-details'>
                            <img src='./email.png' alt='email'></img>
                            <p><strong>Email:example1@gmail.com</strong></p>
                            <img src='./telephone.png' alt='phone'></img>
                            <p><strong>Phone:1234567890</strong></p>
                            <img src='./clock.png' alt='timing'></img>
                            <p><strong>Working hours:11:30AM-7:30PM</strong></p>
                            <img src='./calendar.png' alt='woringhours'></img>
                            <p><strong>Working days:Monday-Saturday</strong></p>
                        </div>
                        <div>
                        </div>
                    </footer>
                    <p>&copy;2025 RoyMusicals All rights reserved.</p>
                </section>
        </div>
    );
}

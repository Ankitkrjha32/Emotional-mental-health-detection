import React from 'react'
import lgsmallpic from '../images/lgsmallpic.png'
import '../styles/hero.css'
import { Link } from 'react-router-dom'
import '../../src/App.css'
import pic from '../images/Untitled design.png'

const Hero = () => {
    return (
        <div>
            <section className='banner_wrapper'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-6 header-img-section'>
                            <img src={pic} alt='Hello Carwale' />
                        </div>
                        <div className="col-md-6 my-5 my-md-0 text-center text-md-start">
                            <p className="banner-subtitle">Online Safety is Our Priority</p>
                            <h1 className="banner-title">Join us in fighting<span > online harassment,</span>  cyber threats, and deepfake abuse-everywhere, every day.</h1>
                            <div className="learn-more-btn-section" >
                                <Link to='/emergency' style={{backgroundColor:" rgb(216, 15, 15)"}} className="learn-more-btn btn-header " href="#car">Report</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="custom-shape-divider-bottom-1695048439">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
        </div>
    )
}

export default Hero
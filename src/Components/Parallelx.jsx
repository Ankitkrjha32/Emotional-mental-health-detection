import React from 'react'
import '../styles/parallelx.css'
import { Link } from 'react-router-dom'

const Parallelx = () => {
    return (
        <div>
            <section class="more-info-section bg-color">
                <section class="container ">
                    <div class="row">
                        <div class="col-xl-6 xol-lg-6 col-md-12 col-12  d-flex flex-column justify-content-center align-items-start ">
                            <h1 class="common-heading text-capitalize fw-bolder text-white">
                               Online Safety is Our Priority
                            </h1>
                            <p class="mt-3 mb-5 para-width text-white" style={{ textAlign: 'justify' }}>
                            We Shield For She protects users from cyber threats, harassment, and deepfake abuse with AI-driven monitoring, legal support, and mental health assistance. Our real-time content filtering and blockchain-secured evidence storage ensure a safer digital space for all.                            </p>
                            <Link to='/contact' class="btn learn-more-btn">Contact</Link>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Parallelx

import React from 'react'
import "./Service.css"
import { FaPaintBrush } from 'react-icons/fa';
import { BsCodeSquare } from 'react-icons/bs';
import { TfiWrite } from 'react-icons/tfi';

const Services = () => {
    return (
        <section id='services'>
            <div className="section__wrapper services__wrapper">
                <div className="section__header center">
                    <h2 className="primary__title">Services</h2>
                    <p className="text__muted description">
                        I transform your ideas, and consequently your desires, into a
                        distinctive web project that both inspires you and captivates your customers.
                    </p>
                </div>

                <div className="services__group">
                    <article className="service" style= {{"--color-primary":"blueviolet"}}>
                        <div className="service__top">
                            <div className="icon__container">
                                <FaPaintBrush  className='icon'/>
                            </div>
                            <h3 className="title">UI/UX Design</h3>
                        </div>
                        <div className="service__middle">
                            <p className="text__muted description">
                            I offer user-centric UI/UX design services focused on creating intuitive, responsive, and visually appealing digital experiences. 
                            From wireframing and prototyping to usability testing and interaction design, my goal is to enhance user engagement and deliver seamless,
                             accessible solutions that meet both business and user needs.
                            </p>
                        </div>
                        <div className='service__bottom'>
                          <button className='btn btn__primary'>Read More</button>
                        </div>
                    </article>
                    {/* ui end */}

                    <article className="service" style= {{"--color-primary":"green "}}>
                        <div className="service__top">
                            <div className="icon__container">
                                <BsCodeSquare className='icon'/>
                            </div>
                            <h3 className="title">Frontend</h3>
                        </div>
                        <div className="service__middle">
                            <p className="text__muted description">
                            I provide frontend development services aimed at building fast, responsive, and visually engaging web applications.
                             Using modern technologies like React, Tailwind CSS, and JavaScript, I transform designs into pixel-perfect, scalable,
                              and user-friendly interfaces that enhance functionality and improve user experience across all devices.
                            </p>
                        </div>
                        <div className='service__bottom'>
                          <button className='btn btn__primary'>Read More</button>
                        </div>
                    </article>

                    {/* ui ends */}



<article className="service" style= {{"--color-primary":"blueviolet"}} >
                        <div className="service__top">
                            <div className="icon__container">
                                <TfiWrite className='icon' />
                            </div>
                            <h3 className="title">backend</h3>
                        </div>
                        <div className="service__middle">
                            <p className="text__muted description">
                            I offer backend development services focused on building secure, efficient, and scalable server-side solutions. 
                            By leveraging technologies like Node.js, Express, and MongoDB, I create robust APIs, manage databases,
                             and ensure seamless data flow to power high-performance web applications that meet complex business needs.
                            </p>
                        </div>
                        <div className='service__bottom'>
                          <button className='btn btn__primary'>Read More</button>
                        </div>
                    </article>





                </div>
            </div>
        </section>
    );
}

export default Services;

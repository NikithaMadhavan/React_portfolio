import React, { useEffect, useRef, useState } from 'react';
import AOS from "aos";
import Glide from "@glidejs/glide";
import 'aos/dist/aos.css';
import 'aos/dist/aos.js';
import TypeIt from "typeit-react";
import gsap from 'gsap';
import download from '../Assets/images/resume.jpg'
// import 'glide/dist/css/glide.core.min.css';
// import 'glide/dist/css/glide.theme.min.css';

import './Portfolio.css';
import bg from '../../src/Assets/images/bg.jpg';
import cancer from '../../src/Assets/images/cancer.jpeg';

import drumkit from '../../src/Assets/images/drumkit.png';
import image from '../../src/Assets/images/image.jpeg';
import profile1 from '../../src/Assets/images/profile1.jpg';
import signup from '../../src/Assets/images/signup.png';
import tindog from '../../src/Assets/images/tindog.png';
import todolist from '../../src/Assets/images/todolist.png';


const Portfolio = () => {


    useEffect(() => {
        AOS.init();


    // ... other GSAP animations
    gsap.from(".logo", { opacity: 1, duration: 1, delay: 0.5, y: -10 });
    gsap.from(".banner", { opacity: 1, duration: 1, delay: 1.5, x: -200 });
    gsap.from(".hero h3", { opacity: 1, duration: 1, delay: 2, y: -50 });
    gsap.from(".hero h1", { opacity: 1, duration: 1, delay: 2.5, y: -45 });
    gsap.from(".hero h4", { opacity: 1, duration: 1, delay: 3, y: -30 });
    gsap.from(".hero a", { opacity: 1, duration: 1, delay: 3.5, y: 50 });
    gsap.from(".nav-item", {
        opacity: 1,
        duration: 1,
        delay: 1.2,
        y: 30,
        stagger: 0.2,
    });
    gsap.from(".icons span", {
        opacity: 1,
        duration: 1,
        delay: 4,
        x: -30,
        stagger: 0.2,
    });

    const glide = new Glide('.glide', {
        type: "carousel",
        startAt: 0,
        perView: 3,
        gap: 30,
        hoverpause: true,
        autoplay: 2000,
        animationDuration: 800,
        animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
        breakpoints: {
            996: {
                perView: 2,
            },
            768: {
                perView: 1,
            },
        },
    });
    glide.mount();

}, []);

return (
    <>


        <header id="home" className="header">

           

            <div className="hero" data-aos="fade-in" data-aos-duration="2000">
                <h3>Hello,My name is</h3>
                <h1>Nikitha.M</h1>
                <h4>And I'm a 
                    
                    <TypeIt options={{
                        speed: 120,
                        loop: true,
                        waitUntilVisible: true,
                    }}
                    getBeforeInit={(instance:any) => {
                        instance
                        .type("Student", { delay: 400 })
                        .pause(500)
                        .delete(9)
                        .type("Developer", { delay: 400 })
                        .pause(500)
                        .delete(9)
                        .go();
                
                        
                        return instance;
                    }}
                    >

                    </TypeIt>
                </h4>
                <a href='https://www.linkedin.com/in/nikitha-madhavan-777718248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target="_blank" className="btn">Hire me</a>
            </div>
            <div>
                <img className="banner" data-aos="fade-right" data-aos-duration="1000" src={bg} alt="" />
            </div>

        </header>

        {/* <!-- Main --> */}
        <section className="section about" id="about">
            <div className="title">
                <h1>About me</h1>
            </div>
            <div className="row col-lg-12 container">
                <div className="col-lg-6" data-aos="fade-right" data-aos-duration="2000">
                    <img className="img2" src={profile1} alt="" />
                </div>
                <div className="col-lg-6" data-aos="fade-left" data-aos-duration="2000">
                    <h1>I'm Nikitha! A </h1>
                        {/* <span id="type2"></span></h1> */}
                        <TypeIt options={{
                        speed: 120,
                        loop: true,
                        waitUntilVisible: true,
                    }}
                    getBeforeInit={(instance:any) => {
                        instance
                        .type("Student", { delay: 400 })
                        .pause(500)
                        .delete(9)
                        .type("Developer", { delay: 400 })
                        .pause(500)
                        .delete(9)
                        .go();
                        return instance;
                    }}
                    >

                    </TypeIt>
                
                    <p>
                        I like to get a challenging career, where I can enhance my professional experience and contribute significantly by using my skills and knowledge to add value to the organization.
                    </p>
                    <a href={download} target="_blank" className="btn">View Resume</a>
                </div>
            </div>
        </section>



        {/* <!-- Education --> */}
        <section className="section theme" id="education">
            <div className="title">
                <h1>My Education</h1>
            </div>

            <div className="edu-center">
                <div className="education" data-aos="fade-down" data-aos-duration="2000">
                    <h2>Master of Computer Application</h2>
                    <h4>Calicut University </h4>
                    {/* <!-- <h4>Computer Science Engineering</h4> --> */}
                    <h4>2020 - 2022 </h4>
                    {/* <!-- <h4> GPA – 9.39</h4> --> */}
                </div>
                <div className="education" data-aos="fade-up" data-aos-duration="2000">
                    <h2>Bsc Computer Science</h2>
                    <h4>University of Calicut</h4>
                    {/* <!-- <h4>MPC</h4> --> */}
                    <h4>2017-2020</h4>
                    {/* <!-- <h4> 98.5% </h4> --> */}
                </div>

                <div className="education" data-aos="fade-down" data-aos-duration="2000">
                    <h2>GMMGHSS Palakkad</h2>
                    <h4>Board of Secondary Education </h4>
                    <h4>Class - XI</h4>
                    <h4>2015-2017</h4>
                    {/* <!-- <h4> GPA - 10</h4> --> */}
                </div>
            </div>
        </section>

        {/* <!-- Skills --> */}
        <section className="section skills" id="skills">
            <div className="title">
                <h1>My Skills</h1>
            </div>
            <div className="skills-center">
                <div className="skills-left" data-aos="fade-right" data-aos-duration="2000">
                    <div className="skills-box">
                        <h4>HTML5</h4>
                        <div className="skills-ilt">
                            <div className="skills-bar html"></div>
                            <span>95%</span>
                        </div>
                    </div>
                    <div className="skills-box">
                        <h4>CSS</h4>
                        <div className="skills-ilt">
                            <div className="skills-bar css"></div>
                            <span>85%</span>
                        </div>
                    </div>

                    <div className="skills-box">
                        <h4>Bootstrap4</h4>
                        <div className="skills-ilt">
                            <div className="skills-bar bootstrap"></div>
                            <span>90%</span>
                        </div>
                    </div>
                    <div className="skills-box">
                        <h4>JavaScript</h4>
                        <div className="skills-ilt">
                            <div className="skills-bar javascript"></div>
                            <span>90%</span>
                        </div>
                    </div>
                    <div className="skills-box">
                        <h4>React</h4>
                        <div className="skills-ilt">
                            <div className="skills-bar nodejs"></div>
                            <span>80%</span>
                        </div>
                    </div>
                </div>
{/* skills */}

                <div className="skills-right" data-aos="fade-left" data-aos-duration="2000">
                    <div className="skills-box">
                        <h4>Python</h4>
                        <div className="skills-ilt">
                            <div className="skills-bar python"></div>
                            <span>80%</span>
                        </div>
                    </div>
                    <div className="skills-box">
                        <h4>MySql</h4>
                        <div className="skills-ilt">
                            <div className="skills-bar mysql"></div>
                            <span>75%</span>
                        </div>
                    </div>
                    {/* <!-- <div class="skills-box">
                    <h4>MongoDB</h4>
                    <div class="skills-ilt">
                        <div class="skills-bar mongodb"></div>
                        <span>80%</span>
                    </div> -->
                <!-- </div> --> */}
                    <div className="skills-box">
                        <h4>Git</h4>
                        <div className="skills-ilt">
                            <div className="skills-bar git"></div>
                            <span>95%</span>
                        </div>
                    </div>
                    {/* <!-- <div class="skills-box">
                    <h4>AWS</h4>
                    <div class="skills-ilt">
                        <div class="skills-bar aws"></div>
                        <span>80%</span>
                    </div>
                </div> --> */}
                </div>
            </div>


        </section>

        {/* // <!-- Projects --> */}
        <section className="section theme" id="projects">
            <div className="title">
                <h1>My Projects</h1>
            </div>

            <div className="projects-center container">
                <div className="glide">
                    <div className="glide__track" data-glide-el="track">
                        <ul className="glide__slides">
                            <li className="glide__slide">
                                <div className="project">
                                    <div className="img-cover">
                                        <img src={todolist} alt="" />
                                    </div>
                                    <h3>CRUD Project</h3>
                                    <p>
                                        Using HTML5,CSS,Bootstrap4 and Python django
                                    </p>
                                    <a href="https://github.com/NikithaMadhavan/CRUD-project" target="_blank">
                                        <span className="link"></span>
                                    </a>
                                </div>
                            </li>
                            <li className="glide__slide">
                                <div className="project">
                                    <div className="img-cover">
                                        <img src={tindog} alt="" />
                                    </div>
                                    <h3>Ecommerce</h3>
                                    <p>
                                        Responsive site using HTML5, CSS and Bootstrap4,python Django
                                    </p>
                                    <a href="https://github.com/NikithaMadhavan/Ecommerce" target="_blank">
                                        <span className="link"></span>
                                    </a>
                                </div>
                            </li>
                            <li className="glide__slide">
                                <div className="project">
                                    <div className="img-cover">
                                        <img src={signup} alt="" />
                                    </div>
                                    <h3>Travel Website</h3>
                                    <p>
                                        Using HTML, CSS, JavaScript, Bootstrap and Python 
                                    </p>
                                    <a href="https://github.com/NikithaMadhavan/DemoTravel" target="_blank">
                                        <span className="link"></span>
                                    </a>
                                </div>
                            </li>
                            <li className="glide__slide">
                                <div className="project">
                                    <div className="img-cover">
                                        <img src={cancer} alt="" />
                                    </div>
                                    <h3>Website of food</h3>
                                    <p>
                                        Using Python, HTML5, CSS, Bootstrap and Python Django
                                    </p>
                                    <a href="https://github.com/NikithaMadhavan/DemoFood" target="_blank">
                                        <span className="link"></span>
                                    </a>
                                </div>
                            </li>
                            <li className="glide__slide">
                                <div className="project">
                                    <div className="img-cover">
                                        <img src={drumkit} alt="" />
                                    </div>
                                    <h3>Todo Project</h3>
                                    <p>
                                        Using HTML5, CSS, Bootstrap and Python django
                                    </p>
                                    <a href="https://github.com/NikithaMadhavan/demopython" target="_blank">
                                        <span className="link"></span>
                                    </a>
                                </div>
                            </li>
                            <li className="glide__slide">
                                <div className="project">
                                    <div className="img-cover">
                                        <img src={image} alt="" />
                                    </div>
                                    <h3>Demo Ecommerce</h3>
                                    <p>
                                        Using Python, HTML5,CSS, Bootstrap and Django.
                                    </p>
                                    <a href="https://github.com/NikithaMadhavan/Demoecommerce" target="_blank">
                                        <span className="link"></span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section className='container'>
        <footer>
            <p>Created By <span>Nikitha</span> | &copy; 2023 All rights reserved.</p>
        </footer>
        </section>



       
        
        






    </>
);
};
export default Portfolio;


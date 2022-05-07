import React from 'react';
import about from '../../Images/akash.png';
import './About.css'

const About = () => {
    return (
        <div>
            <div className="about-area container">
                <div className="about-img ">
                    <img src={about} alt="" />
                </div>
                <div className="about-content">
                    <h2>About me</h2>
                    <p>Hi i am Alex Akash
                        My present goal is to be a skilled full stack web developer. For this reason I always try to study and practice web related technology like javascript, ReactJs, firebase, Nodejs, MongoDB etc. Also take some sort courses to improve my knowledge.
                    </p>    
                    <p>By the year of 2022, My target is not only to become a Full Stack Web Developer but also ending with few months professional full stack web developer experiences! Regarding this, I'm fully working to enhance my skills in MERN Stack</p>
                </div>
            </div>
        </div>
    );
};

export default About;
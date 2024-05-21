import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import ProfilePic from "../assets/Pravesh.png";
import { Particles } from 'react-tsparticles';
import "../styles/heroSection.css";
import Button from '../Elements/downloadResumeButton';
import SectionButton from '../Elements/sectionButton.jsx';
import { useEffect } from 'react';
const HeroSection = () => {

    useEffect(() => {
        const canvas = document.querySelector('canvas[data-generated="false"]');

        if (canvas) {
            canvas.style.height = '75vh'; // Adjust the desired height value
            canvas.style.position = 'absolute'; // Adjust the desired position value
        }
    }, []);
    const skills = [
        'Front-end development',
        'Back-end development',
        'Cloud platforms (AWS, GCP, Azure)',
        'Database management',
        'API design and development',
        'Version control (Git, SVN)',
        'Testing and debugging',
        'Agile methodologies',
        'UI/UX design'
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="hero-section"
        >
            {/* Particle background */}
            <Particles
                id="tsparticles"
                options={{
                    background: {
                        color: {
                            value: "#282C30"
                        },
                        opacity: -16
                    },
                    fpsLimit: 80,

                    particles: {
                        color: {
                            value: "black"
                        },
                        links: {
                            color: "#D3D3D3",
                            distance: 170,
                            enable: true,
                            opacity: 0.6,
                            width: 3
                        },
                        collisions: {
                            enable: false
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 1,
                            straight: false
                        },
                        number: {
                            density: {
                                enable: true,
                                value_area: 900
                            },
                            value: 90
                        },
                        opacity: {
                            value: 0.1
                        },
                        shape: {
                            type: "circle"
                        },
                        size: {
                            random: true,
                            value: 4
                        }
                    },
                    detectRetina: true
                }}
            />


            <div className="container">
                <div className="content">
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="hi-im"
                    >
                        Hi, I'm
                    </motion.h1>
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="pravesh"
                    >
                        Pravesh Rathore
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.9 }}
                        className="intro-text"
                    >
                        <span style={{ display: 'inline' }}>
                            I'm a developer passionate about crafting user-centric web experiences. With expertise in{' '}
                        </span>
                        <div className='type-writer'>

                            <Typewriter
                                options={{
                                    strings: skills,
                                    autoStart: true,
                                    loop: true,
                                    delay: 50,
                                    deleteSpeed: 15
                                }}

                            />
                        </div>
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.1 }}
                        className="build-together"
                    >
                        Let's build something amazing together!
                    </motion.p>


                    <div className="buttons">
                        <div>
                            <Button />
                        </div>
                        <div>
                            <SectionButton />
                        </div>
                    </div>
                </div>
                {/* Animated profile picture */}
                <div className="profile">
                    <motion.img
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 1 }}
                        src={ProfilePic}
                        alt="Pravesh"
                        className="profile-pic"
                    />
                     <div className="profile-background"></div>
                </div>
            </div>
        </motion.div>
    );
};

export default HeroSection;

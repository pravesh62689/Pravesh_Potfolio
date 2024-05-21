// aboutSection.jsx

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';
import '../styles/aboutSection.css';
import AboutImg from "../assets/aboutImg.png"
const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const { top, height } = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const isVisible = top + height * 0.4 < windowHeight;
      setIsVisible(isVisible);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Parallax blur={10} bgImage="path_to_your_background_image.jpg" strength={200}>
      <div className="about-container" ref={sectionRef}>
        <div className="content-wrapper">
          <div className="animation">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1 }}
            >
              <img src={AboutImg} 
              className='about-Img' alt="Animation" />
            </motion.div>
          </div>
          <div className="content">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h2>
                <motion.span
                  initial={{ opacity: 0, y: -20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 1, delay: 1 }}
                >
                 Welcome to My Corner of the Web!
                </motion.span>
              </h2>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 1.5 }}
              >
                <p>
                  I'm <strong className='strong-word'>Pravesh Rathore</strong>, a highly motivated Web Developer with a Bachelor's degree in Computer Science. I possess a fervent passion for crafting exceptional digital experiences.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 2 }}
              >
                <p>
                  With a strong foundation in <strong className='strong-word'>React</strong>, <strong className='strong-word'>Node.js</strong>, and <strong className='strong-word'>MongoDB</strong>, I thrive on solving complex problems through innovative solutions. My approach blends technical expertise with a keen eye for design, resulting in polished and user-friendly applications.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 2.5 }}
              >
                <p>
                  Continual learning is at the core of my ethos. I actively seek out opportunities to expand my skill set, recently completing certifications such as <strong className='strong-word'>AWS Cloud Practitioner</strong> and a <strong className='strong-word'>Full Stack Web Development Course</strong>.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </Parallax>
  );
}

export default AboutSection;

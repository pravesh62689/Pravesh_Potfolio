import React,{useRef} from 'react'
import "../styles/sectionButton.css";
const SectionButton = () => {

    const aboutRef = useRef(null);
    const scrollToAbout = () => {
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
      };

  return (
    <>
        <button className="sectionButton learn-more" 
              onClick={scrollToAbout}>
  <span className="circle" aria-hidden="true">
  <span className="icon arrow"></span>
  </span>
  <span className="button-text">Learn More</span>
</button>
    </>
  )
}

export default SectionButton
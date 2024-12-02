import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  // const [activeItem, setActiveItem] = useState(0);
  // const carouselRef = useRef();

  // const scroll = (node, left) => {
  //   return node.scrollTo({ left, behavior: 'smooth' });
  // }

  // const handleClick = (e, i) => {
  //   e.preventDefault();

  //   if (carouselRef.current) {
  //     const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
  //     scroll(carouselRef.current, scrollLeft);
  //   }
  // }

  // const handleScroll = () => {
  //   if (carouselRef.current) {
  //     const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

  //     setActiveItem(index);
  //   }
  // }

  // // snap back to beginning of scroll when window is resized
  // // avoids a bug where content is covered up if coming from smaller screen
  // useEffect(() => {
  //   const handleResize = () => {
  //     scroll(carouselRef.current, 0);
  //   }

  //   window.addEventListener('resize', handleResize);
  // }, []);

  return (
    <Section nopadding id="about">
      <SectionTitle>
        About Me
      </SectionTitle>
      <SectionText>
      Hi! I'm Edwin Dang, a Technical Product Manager with a passion for creating impactful data-driven solutions and innovative applications. With a strong background 
      in computer science, artificial intelligence, and behavioral science, I pring a unique perspecctive to product development. Currently at Optum, I lead cross-functional 
      teams to deliver cutting-edge enhancements to healthcare payments and security platforms, generating millions in revenue while improving operational efficiency. 
      My experiese spans product management, full stack engineering, and data science. I've a proven track record of optimizing workflows, launching scalable applications, and 
      collaborating across teams to drive measurable results. Outside of work, I enjoy exploring creative technology projects, like TrackTap, a collaborative music sharing 
      app I co-founded. Welcome to my portfolio - let's build something extraordinary together.
      </SectionText>
    </Section>
  
  );
};

export default Timeline;

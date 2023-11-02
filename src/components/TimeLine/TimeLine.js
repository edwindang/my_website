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
      My name is Edwin Dang and I am a Technical Product Manager and Software Engineer who is extremely interested in building technology for prctical,
      user-centerd business solutions. I have done this from both a software engineer's perspetive as well as a 
      technical product manager's perspective. I currently work as a Technical Product Manager at Optum to build technology 
      in Payments Integrity. As a software engineer, I have built fullstack cybersecurity applications, and 
      machine learning data pipelines for predictive analytics.
      I'm extremely interested in building Artificial Intelligence tools for business needs, specifically the areas of deep 
      learning, machine learning, and general artificial intelligence. My background in technical product management and 
      fullstack software engineering has crafted me into a critical thinker who considers all angles of a product. I am 
      able to cut through the noise and the hype to build effective, user-centric tools with a relentless focus on 
      the consumer.
      </SectionText>
    </Section>
  
  );
};

export default Timeline;

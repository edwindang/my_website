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
      My name is Edwin Dang and I am an aspiring software engineer who is passionate about healthcare technology and software solutions. 
      I am currently a senior at the University of Rochester, where I study Computer Science and Neuroscience. I've worked 
      extensively with human healthcare data as a medical scribe, a clinical volunteer, and a data analyst for a stroke rehabilitation lab at the 
      University of Rochester Medical Center. I often work as a bridge between clinical and technology teams, which requires me 
      to have excellent communication skills, a voracious appetite to contribute and learn, as well as a genuine passion for everything that I do.
      My diverse background has given me the opportunity to bring interpersonal skills into a technical world and tackle both human and technical 
      components of problem solving.
      </SectionText>
    </Section>
  
  );
};

export default Timeline;

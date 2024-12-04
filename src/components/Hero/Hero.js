import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section $row $nopadding>
    <LeftSection>
      <SectionTitle $main $center>
        Hi!<br />
        I am Edwin Dang
      </SectionTitle>
      <SectionText>
        I'm a Technical Product Manager with a background in software development and data analytics. Welcome to my Portfolio!
      </SectionText>
      <Button 
      onClick={() => {
                    if (typeof window!=="undefined") {
                      window.open("https://drive.google.com/file/d/146mXIHJp15fVl_m0EPE9E68z3vWQ9vSA/view?usp=sharing", "_blank");
                    }
                  }}>
        Resume
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
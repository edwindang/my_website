import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi,<br />
        I'm Edwin!
      </SectionTitle>
      <SectionText>
        Technical Product Manager | Software Developer | Problem Solver
      </SectionText>
      <Button onClick={() => window.open("https://drive.google.com/file/d/1FflAinl4u3fIUHJ5Ocx2NzacOq8KAKMt/view?usp=drive_link", "_blank")}>
        Resume
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
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
        Technical Product Manager | Software Developer | Critical Thinker
      </SectionText>
      <Button onClick={() => window.open("https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:baa9054c-70ec-44d7-a09d-cf126c363ed7", "_blank")}>
        Resume
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
 <section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      Welcome To <br />
      My Personal Portfolio
    </SectionTitle>
    <SectionText>
      I'm a member of  web app developer.
    </SectionText>
  </LeftSection>
  <Button onClick={() => window.location ='https://google.com'}>
    Learn More
  </Button>
 </section>
  );

export default Hero;
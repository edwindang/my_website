import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>
            <LinkItem href = 'tel: 7135407031'>713-540-7031</LinkItem>
          </LinkTitle>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>
            <LinkItem href = "mailto: edwin.dang88@gmail.com">edwin.dang88@gmail.com</LinkItem>
          </LinkTitle>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Xaipe</Slogan>
        </CompanyContainer>
        <SocialIcons href = "https://github.com/edwindang" target = "blank">
          <AiFillGithub size = "3rem"/>      
      </SocialIcons>
      <SocialIcons href = "https://www.linkedin.com/in/edwin-d-651997177/" target = "blank">
          <AiFillLinkedin size = "3rem"/>      
      </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;

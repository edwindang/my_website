import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span} from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
        <a style = {{display: "flex", alignItems: "center", color: "white", marginBottom: "20px"}} href="/">
          <DiCssdeck size="3rem" /> <Span> Porfolio</Span>
        </a>
    </Div1>
    <Div2>
      <li>
        <a href = "#projects">
          <NavLink>Projects</NavLink>
        </a>
      </li>
      <li>
        <a href = "#tech">
          <NavLink>Technology</NavLink>
        </a>
      </li>
      <li>
        <a href = "#about">
          <NavLink>About</NavLink>
        </a>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href = "https://github.com/edwindang" target = "blank">
          <AiFillGithub size = "3rem"/>
      </SocialIcons>
      <SocialIcons href = "https://www.linkedin.com/in/edwin-d-651997177/" target = "blank">
          <AiFillLinkedin size = "3rem"/>      
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;

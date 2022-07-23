import Link from 'next/link';
import React from 'react';
import {FaDiscord} from 'react-icons/fa';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { SocialContainer, SocialIconsContainer } from '../../components/Footer/FooterStyles';
import { Container, Span, Div1, Div2, Div3, NavLink, SocialIcons, } from './HeaderStyles';

const Header = () =>  (
  <container style={{ display: 'flex', justifyContent: "space-between", paddingTop: '10px' }}>
    <Div1>
      <Link href={"/"}>
        <a style={{display:"flex", alignItems:"center", color:"white",marginBottom:`20px`}}>
          <DiCssdeck size={'3rem'}/><Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2 >
      <li style={{paddingRight:"8rem" }}>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li style={{ paddingRight: "8rem" }}>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li style={{ paddingRight: "8rem" }}>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
    <SocialIconsContainer >
        <SocialContainer>
          <SocialIcons href='https://github.com'>
            <AiFillGithub size={'3rem'} />
          </SocialIcons>
          <SocialIcons href='https://linkedin.com'>
            <AiFillLinkedin size={'3rem'} />
          </SocialIcons>
          <SocialIcons href='https://instagram.com'>
            <AiFillInstagram size={'3rem'} />
          </SocialIcons>
          <SocialIcons href='https://twitter.com'>
            <AiFillTwitterCircle size={'3rem'} />
          </SocialIcons>
          <SocialIcons href='https://facebook.com'>
            <AiFillFacebook size={'3rem'} />
          </SocialIcons>
          <SocialIcons href='https://discord.com'>
            <FaDiscord size={'3rem'} />
          </SocialIcons>
          
        </SocialContainer>
    </SocialIconsContainer>
     
    </Div3>
  </container>
);

export default Header;

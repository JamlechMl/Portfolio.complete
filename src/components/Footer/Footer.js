import React from 'react';
import { FaDiscord } from 'react-icons/fa';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel: +254 741702589'>+254 741702589</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto: jamlechmukavana601@gmail.com'> jamlechmukavana601@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Never Give Up In Life.</Slogan>
        </CompanyContainer>
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
      
    </FooterWrapper>
  );
};

export default Footer;

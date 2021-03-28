import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinkTitle,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from './FooterElements';
import { data } from './Data';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper className='first'>
            <FooterLinkItems>
              <FooterLinkTitle>{data.col1.title}</FooterLinkTitle>
              <FooterLink to='/signin'>{data.col1.links.link1}</FooterLink>
              <FooterLink to='/signin'>{data.col1.links.link2}</FooterLink>
              <FooterLink to='/signin'>{data.col1.links.link3}</FooterLink>
              <FooterLink to='/signin'>{data.col1.links.link4}</FooterLink>
              <FooterLink to='/signin'>{data.col1.links.link5}</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>{data.col2.title}</FooterLinkTitle>
              <FooterLink to='/signin'>{data.col2.links.link1}</FooterLink>
              <FooterLink to='/signin'>{data.col2.links.link2}</FooterLink>
              <FooterLink to='/signin'>{data.col2.links.link3}</FooterLink>
              <FooterLink to='/signin'>{data.col2.links.link4}</FooterLink>
              <FooterLink to='/signin'>{data.col2.links.link5}</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>{data.col3.title}</FooterLinkTitle>
              <FooterLink to='/signin'>{data.col3.links.link1}</FooterLink>
              <FooterLink to='/signin'>{data.col3.links.link2}</FooterLink>
              <FooterLink to='/signin'>{data.col3.links.link3}</FooterLink>
              <FooterLink to='/signin'>{data.col3.links.link4}</FooterLink>
              <FooterLink to='/signin'>{data.col3.links.link5}</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>{data.col4.title}</FooterLinkTitle>
              <FooterLink to='/signin'>{data.col4.links.link1}</FooterLink>
              <FooterLink to='/signin'>{data.col4.links.link2}</FooterLink>
              <FooterLink to='/signin'>{data.col4.links.link3}</FooterLink>
              <FooterLink to='/signin'>{data.col4.links.link4}</FooterLink>
              <FooterLink to='/'>{data.col4.links.link5}</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              romblr
            </SocialLogo>
            <WebsiteRights>
              romblr © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='#' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='#' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href='#' target='_blank' aria-label='Youtube'>
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href='#' target='_blank' aria-label='Twitter'>
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href='#' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;

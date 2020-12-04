import React from 'react'
import {
  FooterContainer,
  FooterWrapper,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink
} from './footer';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinksContainer>
        <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Link Title</FooterLinkTitle>
              <FooterLink to='/signin'>Link2</FooterLink>
              <FooterLink to='/signin'>Link3</FooterLink>
              <FooterLink to='/signin'>Link4</FooterLink>
              <FooterLink to='/signin'>Link5</FooterLink>
              <FooterLink to='/signin'>Link6</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Link Title</FooterLinkTitle>
              <FooterLink to='/signin'>Link7</FooterLink>
              <FooterLink to='/signin'>Link8</FooterLink>
              <FooterLink to='/signin'>Link9</FooterLink>
              <FooterLink to='/signin'>Link10</FooterLink>
              <FooterLink to='/signin'>Link11</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Link Title</FooterLinkTitle>
              <FooterLink to='/signin'>Link2</FooterLink>
              <FooterLink to='/signin'>Link3</FooterLink>
              <FooterLink to='/signin'>Link4</FooterLink>
              <FooterLink to='/signin'>Link5</FooterLink>
              <FooterLink to='/signin'>Link6</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Link Title</FooterLinkTitle>
              <FooterLink to='/signin'>Link7</FooterLink>
              <FooterLink to='/signin'>Link8</FooterLink>
              <FooterLink to='/signin'>Link9</FooterLink>
              <FooterLink to='/signin'>Link10</FooterLink>
              <FooterLink to='/signin'>Link11</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer

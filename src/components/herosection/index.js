import React, { useState } from 'react'
import Video from '../../videos/video.mp4';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight
} from './herosection';
import { Button } from '../buttonstyle';

const HeroSection = () => {
  const [ hover, setHover ] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={ Video } type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Full Stack Developer</HeroH1>
        <HeroP>
          A glance into a developers mindset.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to='projects'
            onMouseEnter={ onHover }
            onMouseLeave={ onHover }
          >
            View Projects { hover ? <ArrowForward /> : <ArrowRight /> }
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
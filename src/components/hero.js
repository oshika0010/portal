import React from 'react'
import styled from 'styled-components'
import video from "../videos/Network.mp4"

const Hero = () => {
    return (
        <HeroWrapper>
            <div>
                <Heading>Welcome!</Heading>
                <TagLine>This is my first blog powered by GatsbyJs</TagLine>
            </div>
            <BackGroundVideo src={video} autoPlay loop muted/>
        </HeroWrapper>
    )
}

const BackGroundVideo = styled.video`
  position: absolute;
  top: 0;
  z-index: -1;
`

const HeroWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  font-size: 1.2rem;
`

const Heading = styled.h1`
  font-weight: 600;
  color: white;
`

const TagLine = styled.h3`
  font-size: 1rem;
  font-weight: 300;
  color: white;
`

export default Hero;
import React from 'react'
import styled from 'styled-components'
import squareBackGround from '../images/repeated-square.png'

const HeroWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  font-size: 1.2rem;
  background-image: url(${squareBackGround});
`

const Heading = styled.h1`
  font-weight: 600;
`

const TagLine = styled.h3`
  font-size: 1rem;
  font-weight: 300;
`

const Hero = () => (
    <HeroWrapper>
        <div>
            <Heading>Welcome!</Heading>
            <TagLine>This is my first blog powered by GatsbyJs</TagLine>
        </div>
    </HeroWrapper>
)

export default Hero;
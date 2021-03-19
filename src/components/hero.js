import React from "react"
import styled from "styled-components"

const Hero = styled.section`
  height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: var(--grayLight);

  h1 {
    margin-bottom: 16px;

    @media (min-width: 768px) {
      margin-bottom: 24px;
    }
  }

  @media (min-width: 768px) {
    height: 100vh;
  }

  span {
    color: var(--accent);
  }
`

const hero = () => {
  return (
    <Hero>
      <div className="container">
        <h1>Robert Winterstein</h1>

        <p className="subheading">
          Front End Developer <span>+</span> UI Designer
        </p>
      </div>
    </Hero>
  )
}

export default hero

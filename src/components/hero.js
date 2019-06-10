import React from "react"
import styled from "styled-components"

import "../colors.css"
import "../global.scss"

const Hero = styled.div`
  height: 100vh;
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
`

function hero() {
  return (
    <Hero>
      <div className="container">
        <h1>Robert Winterstein</h1>

        <p className="subheading">
          a UX/UI designer who
          <br />
          loves to code
        </p>
      </div>
    </Hero>
  )
}

export default hero

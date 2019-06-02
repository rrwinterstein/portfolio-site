import React from "react"
import styled from "styled-components"

import "../colors.css"
import "../global.scss"

const About = styled.section`
  display: block;
  background: var(--white);
  padding-top: 120px;
  padding-bottom: 120px;

  .section:nth-child(1) {
    margin-bottom: 120px;
  }

  h2 {
    margin-bottom: 8px;
  }

  h4 {
    margin-bottom: 16px;
  }

  p {
    margin-bottom: 0;
  }

  span {
    color: var(--accent);
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    height: 100vh;
    min-height: 900px;
    padding-top: 160px;
    padding-bottom: 160px;

    .section {
      width: 45%;

      &:nth-child(1) {
        align-self: flex-start;
        margin-bottom: 0;
      }

      &:nth-child(2) {
        align-self: flex-end;
      }
    }

    h4 {
      margin-bottom: 24px;
    }
  }
`

function about() {
  return (
    <About className="container">
      <div className="section">
        <h2>What I do</h2>

        <h4>
          UX/UI Designer <span>&</span> Developer
          <br />
          from Orlando Florida.
        </h4>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>

      <div className="section">
        <h2>Where I've worked</h2>

        <h4>
          UX/UI Design Internship
          <br />
          Apple <span>|</span> Jan 19 – Jun 19
        </h4>

        <p>
          On the AI/Machine Learning team, I worked on design and development
          for internal software platforms, application that utilize machine
          learning, the team’s design system, and some websites. A large portion
          of the design team’s effort was around redesigning and building the
          internal software platforms with the recently created design system.
        </p>
      </div>
    </About>
  )
}

export default about

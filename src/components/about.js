import React from "react"
import styled from "styled-components"

import "../global.scss"

const About = styled.section`
  display: flex;
  justify-content: space-between;
  background: #fff;
  padding-top: 160px;
  padding-bottom: 160px;

  .section {
    width: 45%;

    &:nth-child(2) {
      margin-top: 240px;
    }
  }

  h4 {
    margin-top: 8px;
  }

  .paragraph {
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 30px;
    color: #272d39;
    margin-top: 24px;
    margin-bottom: 0;
  }
`

function about() {
  return (
    <About className="container">
      <div className="section">
        <h2>What I do</h2>

        <h4>
          UX/UI Designer & Developer
          <br />
          from Orlando Florida.
        </h4>

        <p className="paragraph">
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
          Apple<span style={{ color: "#B1B8BB" }}> | Jan 19 – Jun 19</span>
        </h4>

        <p className="paragraph">
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

import React from "react"
import styled from "styled-components"

import "../global.scss"

const About = styled.section`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding-top: 160px;
  padding-bottom: 160px;

  .section-heading {
    width: fit-content;
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
    background: -webkit-linear-gradient(260deg, #f4510b 20%, #c9004b 80%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h2 {
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 54px;
    color: #272d39;
    margin-top: 24px;
    margin-bottom: 0;
  }

  .paragraph {
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 30px;
    color: #272d39;
    padding-left: 120px;
    margin-top: 24px;

    p {
      margin-bottom: 0;
    }
  }
`

function about() {
  return (
    <About className="container">
      <div style={{ marginBottom: "120px" }}>
        <p className="section-heading">— ABOUT ME</p>

        <h2>
          UX/UI Designer & Developer
          <br />
          from Orlando Florida.
        </h2>

        <div className="paragraph">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div>

      <div>
        <p className="section-heading">— WORK EXPERIENCE</p>

        <h2>UX/UI Design Internship</h2>

        <div className="paragraph">
          <p>
            On the AI/Machine Learning team, I worked on design and development
            for internal software platforms, application that utilize machine
            learning, the team’s design system, and some websites. A large
            portion of the design team’s effort was around redesigning and
            building the internal software platforms with the recently created
            design system.
          </p>
        </div>
      </div>
    </About>
  )
}

export default about

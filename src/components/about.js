import React from "react"
import styled from "styled-components"

// Stylesheets
import "../styles/colors.css"
import "../styles/global.scss"

const About = styled.section`
  display: block;
  background: var(--white);
  padding-top: 80px;
  padding-bottom: 80px;

  .section:nth-child(1) {
    margin-bottom: 80px;
  }

  h2 {
    color: var(--grayDark);
    margin-bottom: 8px;
  }

  h4 {
    color: var(--grayDark);
    margin-bottom: 16px;
  }

  p {
    color: var(--gray);
    margin-bottom: 40px;
  }

  p:last-child {
    margin-bottom: 0;
  }

  span {
    color: var(--accent);
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    height: 1400px;
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

const about = () => {
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
          I create minimal websites and applications that are easy to use by
          focusing on the content, respecting margins, and adding subtle
          interactions that engage the user.
        </p>

        <p>
          My passion for design sparked when I was approaching graduation at
          Florida Atlantic University. After receiving my degree, I decided to
          pursue my passion by joining Bloc’s Designer Track. Then I landed an
          internship at Apple as a UX/UI Designer working on internal websites
          and platforms. I've recently starting working with React (this site is
          my first project{" "}
          <span role="img" aria-label="grinning face with squinting eyes">
            😄
          </span>
          ) and knowing front-end development has made me a stronger designer.
        </p>

        <p>
          <em>Fun facts:</em> I'm a sucker for great branding (almost bought a
          brand of almond milk just because of it), cookies & cream flavored
          anything, and craft beer.
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
          learning, the team’s design system, websites, and demo applications
          for WWDC 2019.
        </p>

        <h4>
          Technical Expert, Operation, and Sales
          <br />
          Apple Retail <span>|</span> Aug 13 – Current
        </h4>

        <p>
          I’ve had the opportunity to impact multiple areas of Apple Retail
          during my six years here while working across three different stores.
          I started in sales, then moved to operations, and now I currently work
          at the Genius Bar as a Technical Expert. My current role involves
          troubleshooting hardware and software, repairing devices, and training
          new hires.
        </p>
      </div>
    </About>
  )
}

export default about

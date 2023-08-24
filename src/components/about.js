import React from "react"
import styled from "styled-components"

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
    padding-top: 160px;
    padding-bottom: 160px;

    .section {
      width: 45%;
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
        <h2>What I Do</h2>

        <h4>
          <span>UI Designer</span>
          <br />
          from Orlando, Florida.
        </h4>

        <p>
          I design and build websites and applications that are easy to use by
          focusing on content, respecting margins, and adding subtle
          interactions that engage the user.
        </p>

        <p>
          My passion for design sparked when I was approaching graduation at
          Florida Atlantic University. After receiving my degree, I decided to
          pursue my passion by joining a design bootcamp with Thinkful (formerly
          Bloc). During the bootcamp, we also learned front end development, and
          I quickly started loving the problem-solving aspects of it and seeing
          my designs turn into a real-world product. After completing the
          bootcamp in 2019, I landed my first internship at Apple as a UX/UI
          Designer working on internal websites and platforms. In September of
          2020, I got another internship with Apple as a Web Developer working
          on email templates, websites, and some UI design.
        </p>

        <p>
          <em>Some fun facts:</em> I'm a sucker for great branding — almost
          bought a brand of almond milk just because of it — cookies & cream
          flavored anything, and craft beer.
        </p>
      </div>

      <div className="section">
        <h2>Where I've Worked</h2>

        <h4>
          UI Designer
          <br />
          RealTime Services <span>|</span> Apr 2022 – Current
        </h4>

        <p>
          As the first designer at RealTime Services, I've had the opportunity
          to create a design system and style guide from scratch as a guide for
          our design language and a source of truth for handoff to developers.
          After creating our styles and assets, one of our largest tasks was
          developing a new version of our PEO software platform where I created
          design mockups to give it a refresh, modern look and feel while also
          prioritizing functionality. In addition to the designs, I also assist
          our development team in implementation using Angular, Material Design,
          HTML, and SCSS.
        </p>

        <h4>
          Web Developer Internship
          <br />
          Apple <span>|</span> Sept 2020 – Apr 2021
        </h4>

        <p>
          With the Retail People Communications team, I worked on both design
          and development to create email templates, websites, and implemented a
          GitHub solution to host a podcast. The main technologies and tools I
          used during the internship include HTML, CSS, Stylus, Kit, Gulp,
          Sketch, and Figma.
        </p>

        <h4>
          UX/UI Design Internship
          <br />
          Apple <span>|</span> Jan 2019 – Jun 2019
        </h4>

        <p>
          On the AI/Machine Learning team, I worked on design and development
          for internal software platforms, an application that utilizes machine
          learning, the team’s design system, websites, and demo applications
          for WWDC 2019.
        </p>
      </div>
    </About>
  )
}

export default about

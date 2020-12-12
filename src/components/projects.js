import React from "react"
import LazyLoad from "react-lazyload"
import styled from "styled-components"

// Images
import ciscoserrano from "../images/ciscoserrano.png"
import afbendana from "../images/afbendana.png"
import wintersteinwedding from "../images/wintersteinwedding.png"
import gradeML from "../images/grademl.png"
import tapmap from "../images/tapmap.png"
import cloudSpace from "../images/cloud-space.png"

const Section = styled.section`
  background: var(--grayDark);
`

const SectionHeading = styled.div`
  padding-top: 80px;
  padding-bottom: 120px;

  h2 {
    color: var(--grayLight);
    margin-bottom: 16px;
  }

  p {
    max-width: 400px;
    border-left: 1px solid;
    border-color: var(--grayLight);
    color: var(--grayLight);
    padding-left: 16px;
  }

  @media (min-width: 768px) {
    padding-top: 120px;
    padding-bottom: 160px;

    h2 {
      margin-bottom: 24px;
    }

    p {
    }
  }

  @media (min-width: 1024px) {
    padding-top: 160px;
  }
`

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: content-box;
  padding-bottom: 25vh;

  .title {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;

    h3 {
      text-align: center;
      color: var(--grayLight);
      margin-bottom: 8px;
    }

    p {
      text-align: center;
      color: var(--grayLight);
      margin-bottom: 16px;
    }

    span {
      font-family: "Nunito";
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      letter-spacing: 0.05em;
      text-align: center;
      color: var(--accent);
      margin-bottom: 24px;
    }

    .btn {
      align-self: center;
    }
  }

  img {
    width: 80%;
    object-fit: contain;
    margin: 0;
  }

  @media (min-width: 768px) {
    height: 75vh;
    min-height: 500px;
    flex-direction: row;
    justify-content: space-between;

    &:nth-child(n) {
      .title {
        width: 30%;
        align-self: center;
        margin-bottom: 0;

        h3 {
          text-align: left;
          color: var(--grayLight);
        }

        p {
          text-align: left;
        }

        span {
          text-align: left;
        }

        .btn {
          align-self: flex-start;
        }
      }

      img {
        height: 100%;
        max-height: 800px;
        width: 60%;
      }
    }
  }
`

const Button = styled.a`
  width: fit-content;
  font-family: "Nunito";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  text-decoration: none;
  color: var(--grayLight);
  background-color: transparent;
  border: 1px solid var(--gray);
  border-radius: 4px;
  padding: 8px 16px;
  -webkit-transition: all 200ms ease-in-out;
  -mox-transition: all 200ms ease-in-out;
  -o-transition: all 200ms ease-in-out;
  transition: all 200ms ease-in-out;

  &:hover {
    background-color: var(--grayDarker);
    border-color: var(--grayLight);
    -webkit-transition: all 200ms ease-in-out;
    -mox-transition: all 200ms ease-in-out;
    -o-transition: all 200ms ease-in-out;
    transition: all 200ms ease-in-out;
  }

  &:disabled,
  &[disabled] {
    cursor: not-allowed;
    color: var(--disabled);
    border-color: var(--disabled);
  }

  @media (min-width: 1024px) {
    font-size: 18px;
    line-height: 25px;
    padding: 10px 24px;
  }
`

const projects = () => {
  return (
    <Section className="container">
      <SectionHeading>
        <h2>
          Projects &<br />
          Case Studies
        </h2>
        <p>
          A collection of my work and the tools and technologies I used in the
          process
        </p>
      </SectionHeading>

      <Item>
        <div className="title">
          <h3>Francisco Serrano</h3>
          <p>Single page, resume website with dark mode functionality</p>
          <span>Figma | React | Gatsby | Netlify</span>
          <Button
            className="btn"
            href="https://ciscoserrano.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit
          </Button>
        </div>
        <LazyLoad offset={2000} once>
          <img src={ciscoserrano} alt="Francisco Serrano" />
        </LazyLoad>
      </Item>

      <Item>
        <div className="title">
          <h3>Alex Felix Bendaña</h3>
          <p>A portfolio website for a screenwriter/producer</p>
          <span>Figma | React | Gatsby | Netlify</span>
          <Button
            className="btn"
            href="https://afbendana.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit
          </Button>
        </div>
        <LazyLoad offset={2000} once>
          <img src={afbendana} alt="Alex Felix Bendaña" />
        </LazyLoad>
      </Item>

      <Item>
        <div className="title">
          <h3>Wedding Website</h3>
          <p>
            My wedding website, designed and built from the ground up. I've also
            worked on print design for our wedding stationary.
          </p>
          <span>
            Figma | React | Gatsby | Netlify | Affinity Designer & Photo
          </span>
          <Button
            className="btn"
            href="https://wintersteinwedding.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit
          </Button>
        </div>
        <LazyLoad offset={2000} once>
          <img src={wintersteinwedding} alt="Winterstein Wedding" />
        </LazyLoad>
      </Item>

      <Item>
        <div className="title">
          <h3>GradeML</h3>
          <p>
            A demo application for the iPad to showcase machine learning
            features
          </p>
          <span>Sketch</span>
          <Button
            className="btn"
            href="https://medium.com/@rwinterstein/case-study-grademl-for-wwdc-2019-ec0237248b12?sk=8aaf6a1b36e21985171de8dd2c33758a"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </Button>
        </div>
        <LazyLoad offset={2000} once>
          <img src={gradeML} alt="GradeML" />
        </LazyLoad>
      </Item>

      <Item>
        <div className="title">
          <h3>Tapmap</h3>
          <p>
            Find businesses that accept Apple Pay all in a single, easy to
            navigate application
          </p>
          <span>Figma</span>
          <Button
            className="btn"
            href="https://medium.com/@rwinterstein/case-study-tapmap-7d3ef2acf26f?source=friends_link&sk=0cf91e946d40fef191a249e186e8df0c"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </Button>
        </div>
        <LazyLoad offset={2000} once>
          <img src={tapmap} alt="Tapmap" />
        </LazyLoad>
      </Item>

      <Item>
        <div className="title">
          <h3>Cloud Space</h3>
          <p>
            A simple way to save information and collaborate with others all in
            one easy-to-use environment
          </p>
          <span>Sketch | Illustrator | HTML/CSS</span>
          <Button
            className="btn"
            href="https://medium.com/@rwinterstein/case-study-cloud-space-27f19b66a9f1?source=friends_link&sk=9c938f208300134104f77995900095f3"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </Button>
        </div>
        <LazyLoad offset={2000} once>
          <img src={cloudSpace} alt="Cloud Space" />
        </LazyLoad>
      </Item>
    </Section>
  )
}

export default projects

import React from "react"
import styled from "styled-components"
import tapmap from "../images/tapmap.png"
import cloudSpace from "../images/cloud-space.png"

import "../colors.css"
import "../global.scss"

const Work = styled.section`
  background: var(--grayDark);
  padding-top: 80px;
  padding-bottom: 120px;

  h2 {
    color: var(--grayLight);
    text-align: center;
    margin-bottom: 120px;
  }

  @media (min-width: 768px) {
    padding-top: 96px;
    padding-bottom: 160px;

    h2 {
      margin-bottom: 160px;
    }
  }

  @media (min-width: 1024px) {
    padding-top: 120px;
    padding-bottom: 200px;

    h2 {
      margin-bottom: 200px;
    }
  }

  @media (min-width: 1280px) {
    padding-bottom: 240px;

    h2 {
      margin-bottom: 240px;
    }
  }
`

const CaseStudy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  &:nth-child(n) {
    .title {
      display: flex;
      flex-direction: column;
      margin-bottom: 40px;

      h3 {
        color: var(--grayLight);
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
  }

  &:nth-child(2) {
    margin-bottom: 120px;
  }

  .img--cloud-space {
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
  }

  @media (min-width: 768px) {
    flex-direction: row;

    &:nth-child(n) {
      justify-content: space-around;

      .title {
        align-self: center;
        margin-bottom: 0;

        h3 {
          color: var(--grayLight);
          margin-bottom: 24px;
        }

        .btn {
          align-self: flex-start;
        }
      }

      img {
        height: 50%;
        width: 50%;
      }
    }

    &:nth-child(2) {
      margin-bottom: 160px;

      .title {
        order: 2;
      }
    }
  }

  @media (min-width: 1024px) {
    &:nth-child(2) {
      justify-content: flex-start;
      margin-bottom: 200px;

      .title {
        margin-left: 120px;
      }
    }

    &:last-child {
      justify-content: flex-end;

      .title {
        margin-right: 120px;
      }
    }
  }

  @media (min-width: 1280px) {
    &:nth-child(2) {
      margin-bottom: 240px;
    }
  }
`

const Button = styled.a`
  width: fit-content;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  text-decoration: none;
  color: var(--grayLight);
  background-color: transparent;
  border: 1px solid var(--grayLight);
  border-radius: 4px;
  padding: 8px 16px;
  -webkit-transition: all 200ms ease-in-out;
  -mox-transition: all 200ms ease-in-out;
  -o-transition: all 200ms ease-in-out;
  transition: all 200ms ease-in-out;

  &:hover {
    background-color: var(--grayDarker);
    -webkit-transition: all 200ms ease-in-out;
    -mox-transition: all 200ms ease-in-out;
    -o-transition: all 200ms ease-in-out;
    transition: all 200ms ease-in-out;
  }

  &:disabled,
  &[disabled] {
    cursor: not-allowed;
    color: #696969;
    border-color: #696969;
  }

  @media (min-width: 1024px) {
    font-size: 18px;
    line-height: 25px;
    padding: 10px 24px;
  }
`

function work() {
  return (
    <Work className="container">
      <h2>Case Studies</h2>

      <CaseStudy>
        <div className="title">
          <h3>Tapmap</h3>
          <Button
            className="btn"
            href="https://medium.com/@rwinterstein/case-study-tapmap-7d3ef2acf26f"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </Button>
        </div>
        <img src={tapmap} alt="Tapmap" />
      </CaseStudy>

      <CaseStudy>
        <div className="title">
          <h3>Cloud Space</h3>
          <Button
            className="btn"
            href="https://medium.com/@rwinterstein/case-study-cloud-space-27f19b66a9f1"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </Button>
        </div>
        <img className="img--cloud-space" src={cloudSpace} alt="Cloud Space" />
      </CaseStudy>
    </Work>
  )
}

export default work

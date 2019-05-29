import React from "react"
import styled from "styled-components"
import tapmap from "../images/tapmap.png"
import cloudSpace from "../images/cloud-space.png"

import "../global.scss"

const Work = styled.section`
  background: #f7f8f9;
  padding-top: 120px;
  padding-bottom: 200px;
  padding-left: 12%;
  padding-right: 12%;

  h2 {
    text-align: center;
    margin-bottom: 200px;
  }
`

const CaseStudy = styled.div`
  display: flex;

  h3 {
    margin-bottom: 24px;
  }

  img {
    height: 50%;
    width: 50%;
    object-fit: contain;
  }

  .img--cloud-space {
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
  }

  @media (min-width: 800px) {
    &:nth-child(2) {
      justify-content: space-around;
      margin-bottom: 200px;
    }

    &:nth-child(3) {
      justify-content: space-around;
    }

    .desktop--reverse {
      order: 2;
    }
  }

  @media (min-width: 1024px) {
    &:nth-child(2) {
      justify-content: flex-start;
      margin-bottom: 200px;

      div {
        margin-left: 120px;
      }
    }

    &:nth-child(3) {
      justify-content: flex-end;

      div {
        margin-right: 120px;
      }
    }

    .desktop--reverse {
      order: 2;
    }
  }
`

const Button = styled.a`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  text-decoration: none;
  color: #272d39;
  background-color: transparent;
  border: 1px solid #272d39;
  border-radius: 4px;
  padding: 10px 24px;
  -webkit-transition: all 200ms ease-in-out;
  -mox-transition: all 200ms ease-in-out;
  -o-transition: all 200ms ease-in-out;
  transition: all 200ms ease-in-out;

  &:hover {
    background-color: #edeeef;
    -webkit-transition: all 200ms ease-in-out;
    -mox-transition: all 200ms ease-in-out;
    -o-transition: all 200ms ease-in-out;
    transition: all 200ms ease-in-out;
  }
`

function work() {
  return (
    <Work className="container">
      <h2>Case Studies</h2>

      <CaseStudy className="case-study">
        <div className="desktop--reverse">
          <h3>Tapmap</h3>
          <Button href="#">Case Study</Button>
        </div>
        <img src={tapmap} alt="Tapmap" />
      </CaseStudy>

      <CaseStudy className="case-study">
        <div>
          <h3>Cloud Space</h3>
          <Button href="#">Case Study</Button>
        </div>
        <img className="img--cloud-space" src={cloudSpace} alt="Cloud Space" />
      </CaseStudy>
    </Work>
  )
}

export default work

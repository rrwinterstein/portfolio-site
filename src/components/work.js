import React from "react"
import styled from "styled-components"
import tapmap from "../images/tapmap.png"
import cloudSpace from "../images/cloud-space.png"

import "../global.scss"

const Work = styled.section`
  background: #f7f8f9;
  padding-top: 200px;
  padding-bottom: 200px;

  .case-study {
    display: flex;

    img {
      height: 50%;
      width: 50%;
      object-fit: contain;
    }

    .img--tapmap {
    }

    .img--cloud-space {
      box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.25);
      border-radius: 8px;
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
      <div className="case-study">
        <div>
          <h3>Tapmap</h3>
          <Button href="#">Case Study</Button>
        </div>
        <img src={tapmap} alt="Tapmap" />
      </div>
      <div className="case-study">
        <div>
          <h3>Cloud Space</h3>
          <Button href="#">Case Study</Button>
        </div>
        <img className="img--cloud-space" src={cloudSpace} alt="Cloud Space" />
      </div>
    </Work>
  )
}

export default work

import React from "react"
import styled from "styled-components"

import "../global.scss"

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  background: #272d39;

  h1 {
    padding-top: 25vh;
  }
`

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 48px;
  .btn {
    display: block;
    float: right;
  }

  .btn:nth-child(1) {
    margin-right: 16px;

    @media (min-width: 800px) {
      margin-right: 24px;
    }
  }

`

const Button = styled.a`
  display: inline-block;
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background: linear-gradient(185.56deg, #f4510b -0.01%, #c9004b 102.44%);
  border-radius: 4px;
  padding: 1px;

  .btn-inner {
    background: #272d39;
    border-radius: 3px;
    padding: 8px 24px;
    -webkit-transition: all 200ms ease-in-out;
    -mox-transition: all 200ms ease-in-out;
    -o-transition: all 200ms ease-in-out;
    transition: all 200ms ease-in-out;

    &:hover {
      background: #1f242e;
      -webkit-transition: all 200ms ease-in-out;
      -mox-transition: all 200ms ease-in-out;
      -o-transition: all 200ms ease-in-out;
      transition: all 200ms ease-in-out;
    }

    @media (min-width: 1024px) {
      font-size: 18px;
    }
  }

  @media (min-width: 1024px) {
    .btn-inner {
      padding: 12px 40px;
    }
  }
`

function hero() {
  return (
    <Hero>
      <div className="container">
        <Nav>
          <Button className="btn btn-primary" href="#">
            <div className="btn-inner">Work</div>
          </Button>
          <Button className="btn btn-primary" href="#">
            <div className="btn-inner">Contact</div>
          </Button>
        </Nav>

        <h1>
          <span>Hello,</span>
          <br />
          I'm Robert Winterstein
        </h1>
      </div>
    </Hero>
  )
}

export default hero

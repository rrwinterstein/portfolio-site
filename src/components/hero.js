import React from "react"
import styled from "styled-components"

import "../global.scss"

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  background: #272d39;

  h1 {
    font-family: "Abril Fatface", serif;
    font-style: normal;
    font-weight: normal;
    font-size: 96px;
    line-height: 74px;
    color: #ffffff;
    margin-top: 200px;
    margin-bottom: 0;

    span {
      line-height: 180px;
    }

    @media (max-width: 1223px) {
      font-size: 72px;
      line-height: 54px;

      span {
        line-height: 120px;
      }
    }
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

  .btn:first-child {
    margin-right: 24px;
  }
`

const Button = styled.a`
  display: inline-block;
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background: linear-gradient(185.56deg, #f4510b -0.01%, #c9004b 102.44%);
  border-radius: 4px;
  padding: 1px;

  .btn-inner {
    background: #272d39;
    border-radius: 3px;
    padding: 12px 40px;
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

import React from "react"
import styled from "styled-components"

import "../global.scss"

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  background: #f7f8f9;

  h1 {
    margin-top: 48px;
    margin-bottom: 24px;
  }

  p {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 300;
    font-size: 36px;
    line-height: 49px;
    color: #272d39;
    margin-bottom: 48px;
  }
`

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 48px;

  .btn {
    &:nth-child(1) {
      margin-right: 16px;

      @media (min-width: 800px) {
        margin-right: 24px;
      }
    }
  }
`

const Button = styled.a`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  text-decoration: none;
  color: #272d39;
  background-color: transparent;
  border: 1px solid #b1b8bb;
  border-radius: 4px;
  padding: 8px 16px;
  -webkit-transition: all 200ms ease-in-out;
  -mox-transition: all 200ms ease-in-out;
  -o-transition: all 200ms ease-in-out;
  transition: all 200ms ease-in-out;

  &:hover {
    background: #edeeef;
    border-color: #272d39;
    -webkit-transition: all 200ms ease-in-out;
    -mox-transition: all 200ms ease-in-out;
    -o-transition: all 200ms ease-in-out;
    transition: all 200ms ease-in-out;
  }

  @media (min-width: 1024px) {
    font-size: 18px;
    line-height: 25px;
    padding: 10px 24px;
  }
`

function hero() {
  return (
    <Hero>
      <div className="container">
        <Nav>
          <Button className="btn" href="#">
            Work
          </Button>
          <Button className="btn" href="#">
            Contact
          </Button>
        </Nav>

        <h1>
          Robert
          <br />
          Winterstein
        </h1>

        <p>
          a UX/UI designer who
          <br />
          loves to code
        </p>
      </div>
    </Hero>
  )
}

export default hero

import React from "react"
import styled from "styled-components"

import "../colors.css"
import "../global.scss"

const Hero = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: var(--grayLight);

  h1 {
    margin-bottom: 16px;

    @media (min-width: 768px) {
      margin-bottom: 24px;
    }
  }
`

const Nav = styled.nav`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  float: right;
  flex-direction: column;
  justify-content: space-between;
  height: 26px;
  width: 40px;
  padding: 5px;
  cursor: pointer;

  span {
    -webkit-transition: all 200ms ease-in-out;
    -mox-transition: all 200ms ease-in-out;
    -o-transition: all 200ms ease-in-out;
    transition: all 200ms ease-in-out;
  }

  span:nth-child(1) {
    position: relative;
    left: 7px;
    display: block;
    height: 2px;
    width: 20px;
    background-color: var(--grayDark);
    border-radius: 1px;
  }

  span:nth-child(2) {
    position: relative;
    left: 0px;
    display: block;
    height: 2px;
    width: 24px;
    background-color: var(--grayDark);
    border-radius: 1px;
  }

  span:nth-child(3) {
    position: relative;
    left: 12px;
    display: block;
    height: 2px;
    width: 18px;
    background-color: var(--grayDark);
    border-radius: 1px;
  }

  :hover {
    span:nth-child(1) {
      width: 22px;
      left: 8px;
    }

    span:nth-child(2) {
      width: 20px;
      left: 10px;
    }

    span:nth-child(3) {
      width: 24px;
      left: 6px;
    }
  }

  :active {
    span:nth-child(1) {
      width: 6px;
      left: 24px;
    }

    span:nth-child(2) {
      width: 6px;
      left: 24px;
    }

    span:nth-child(3) {
      width: 6px;
      left: 24px;
    }
  }

  @media (min-width: 768px) {
    top: 2rem;
    right: 4rem;
  }

  @media (min-width: 1280px) {
    right: 6rem;
  }
`

function hero() {
  return (
    <Hero>
      <div className="container">
        <Nav>
          <span />
          <span />
          <span />
        </Nav>

        <h1>Robert Winterstein</h1>

        <p className="subheading">
          a UX/UI designer who
          <br />
          loves to code
        </p>
      </div>
    </Hero>
  )
}

export default hero

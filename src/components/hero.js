import React from 'react';
import styled from 'styled-components';

import '../global.scss';


const Hero = styled.div `
  display: flex;
  flex-direction: column;
  background: #272D39;

  h1 {
    font-family: 'Abril Fatface', serif;
    font-style: normal;
    font-weight: normal;
    font-size: 96px;
    line-height: 74px;
    color: #FFFFFF;
    margin-top: 160px;
    margin-bottom: 0;

    span {
      line-height: 180px;
    }
  }
`;

const Nav = styled.nav `
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

  .btn-primary {
    display: inline-block;
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    text-decoration: none;
    color: #FFFFFF;
    background: linear-gradient(185.56deg, #F4510B -0.01%, #C9004B 102.44%);
    border-radius: 4px;
    padding: 1px;
  }

  .btn-inner {
    background: #272D39;
    border-radius: 3px;
    padding: 12px 40px;
  }
`;


function index() {
  return (
    <Hero>
      <div className="container">
        <Nav>
          <a className="btn btn-primary" href="#">
            <div className="btn-inner">
              Work
            </div>
          </a>
          <a className="btn btn-primary" href="#">
            <div className="btn-inner">
              Contact
            </div>
          </a>
        </Nav>

        <h1><span>Hello,</span><br/>I'm Robert Winterstein</h1>
      </div>
    </Hero>
  )
}

export default index

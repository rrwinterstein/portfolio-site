import React from 'react';
import styled from 'styled-components';


const Footer = styled.footer `
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #272D39;
  
  span {
    color: #B1B8BB;
  }
`;


function index() {
  return (
    <Footer>
      © {new Date().getFullYear()} - Robert Winterstein <span><span style={{ margin: 8 }}>|</span> Thanks for visiting 😁</span>
    </Footer>
  )
}

export default index

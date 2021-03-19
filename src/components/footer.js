import React from "react"
import styled from "styled-components"
import SocialLinks from "../components/socialLinks"

const Footer = styled.footer`
  background: var(--white);
  padding-top: 40px;
  padding-bottom: 16px;

  h2 {
    color: var(--grayDark);
    margin-bottom: 40px;
  }

  .contact {
    display: flex;
    flex-direction: column;
    margin-bottom: 120px;
  }

  .methods {
    display: flex;
    flex-direction: column;
  }

  .copyright {
    font-family: "Nunito";
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 14px;
    color: var(--gray);

    span {
      color: var(--accent);
    }
  }

  @media (min-width: 768px) {
    padding-top: 80px;

    .copyright {
      font-size: 12px;
      line-height: 16px;
    }
  }

  @media (min-width: 1024px) {
    padding-top: 120px;

    .contact {
      margin-bottom: 180px;
    }

    .copyright {
      font-size: 14px;
      line-height: 19px;
    }
  }
`

const Button = styled.a`
  width: fit-content;
  font-family: "Nunito", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  text-decoration: none;
  color: var(--gray);
  background-color: transparent;
  border: 1px solid var(--gray);
  border-radius: 4px;
  padding: 8px 16px;
  -webkit-transition: all 200ms ease-in-out;
  -mox-transition: all 200ms ease-in-out;
  -o-transition: all 200ms ease-in-out;
  transition: all 200ms ease-in-out;

  &:hover {
    color: var(--accent);
    background-color: var(--grayLight);
    border-color: var(--accent);
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

const footer = () => {
  return (
    <Footer className="container">
      <div className="contact">
        <h2>Get in touch</h2>

        <div className="methods">
          <SocialLinks />
          <Button href="mailto:hello@rwinterstein.com?subject=Hello!">
            Email
          </Button>
        </div>
      </div>

      <div className="copyright">
        © {new Date().getFullYear()} - Robert Winterstein{" "}
        <span style={{ margin: 8 }}>|</span> Thanks for visiting!
      </div>
    </Footer>
  )
}

export default footer

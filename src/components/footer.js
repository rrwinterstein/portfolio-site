import React from "react"
import styled from "styled-components"

import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fab } from "@fortawesome/free-brands-svg-icons"

library.add(fab)

const Footer = styled.footer`
  padding-top: 80px;
  padding-bottom: 16px;
  padding-left: 12%;
  padding-right: 12%;

  .contact {
    display: block;
    margin-bottom: 120px;

    .contact-methods {
      padding-top: 40px;

      .social {
        display: flex;
        align-items: center;
        margin-bottom: 32px;

        a {
          margin-right: 40px;
        }
      }

      @media (min-width: 1024px) {
        padding-top: 16px;
        padding-left: 80px;
      }
    }

    @media (min-width: 1024px) {
      display: flex;
      margin-bottom: 180px;
    }
  }

  FontAwesomeIcon {
    display: flex;
  }

  .copyright {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #272d39;

    span {
      color: #b1b8bb;
    }
  }

  @media (min-width: 1024px) {
    padding-top: 120px;
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

function footer() {
  return (
    <Footer className="container">
      <div className="contact">
        <h2>Get in touch</h2>

        <div className="contact-methods">
          <div className="social">
            <a
              href="https://dribbble.com/rwinterstein"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={["fab", "dribbble"]}
                color="#B1B8BB"
                size="2x"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/wintersteinrobert/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={["fab", "linkedin-in"]}
                color="#B1B8BB"
                size="2x"
              />
            </a>
            <a
              href="https://www.instagram.com/robwinterstein/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={["fab", "instagram"]}
                color="#B1B8BB"
                size="2x"
              />
            </a>
            <a
              href="https://github.com/rwinterstein"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={["fab", "github-alt"]}
                color="#B1B8BB"
                size="2x"
              />
            </a>
            <a
              href="https://www.behance.net/rrwinterstcf2a"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={["fab", "behance"]}
                color="#B1B8BB"
                size="2x"
              />
            </a>
            <a
              href="https://twitter.com/rrwinterstein"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={["fab", "twitter"]}
                color="#B1B8BB"
                size="2x"
              />
            </a>
          </div>

          <Button
            className="btn btn-primary"
            href="mailto:rrwinterstein@gmail.com?subject=Hello!"
          >
            Email
          </Button>
        </div>
      </div>

      <div className="copyright">
        © {new Date().getFullYear()} - Robert Winterstein{" "}
        <span>
          <span style={{ margin: 8 }}>|</span> Thanks for visiting 😁
        </span>
      </div>
    </Footer>
  )
}

export default footer

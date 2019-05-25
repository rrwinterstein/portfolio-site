import React from "react"
import styled from "styled-components"

import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fab } from "@fortawesome/free-brands-svg-icons"

library.add(fab)

const Footer = styled.footer`
  padding-top: 120px;
  padding-bottom: 16px;

  .contact {
    display: flex;
    margin-bottom: 180px;

    .contact-methods {
      padding-top: 16px;
      margin-left: 80px;

      .social {
        display: flex;
        align-items: center;

        a {
          margin-right: 40px;
        }
      }

      .btn {
        margin-top: 32px;
      }
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
  color: #272d39;
  background: linear-gradient(185.56deg, #f4510b -0.01%, #c9004b 102.44%);
  border-radius: 4px;
  padding: 1px;

  .btn-inner {
    background: #fff;
    border-radius: 3px;
    padding: 12px 40px;
    -webkit-transition: all 200ms ease-in-out;
    -mox-transition: all 200ms ease-in-out;
    -o-transition: all 200ms ease-in-out;
    transition: all 200ms ease-in-out;

    &:hover {
      background: #f7f8f9;
      -webkit-transition: all 200ms ease-in-out;
      -mox-transition: all 200ms ease-in-out;
      -o-transition: all 200ms ease-in-out;
      transition: all 200ms ease-in-out;
    }
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

          <Button className="btn btn-primary" href="#">
            <div className="btn-inner">Email</div>
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

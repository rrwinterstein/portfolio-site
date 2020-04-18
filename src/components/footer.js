import React from "react"
import styled from "styled-components"

// Stylesheets
import "../styles/colors.css"
import "../styles/global.scss"

// Fontawesome icons
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fab } from "@fortawesome/free-brands-svg-icons"
library.add(fab)

const Footer = styled.footer`
  background: var(--white);
  padding-top: 40px;
  padding-bottom: 16px;

  h2 {
    color: var(--grayDark);
    margin-bottom: 32px;
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

  .social {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    margin-bottom: 16px;

    a {
      color: var(--gray);
      margin-right: 16px;
    }
  }

  FontAwesomeIcon {
    display: flex;
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

    h2 {
      margin-bottom: 40px;
    }

    .social {
      margin-bottom: 24px;
      margin-left: -10px;
      font-size: 1.75rem;

      a {
        height: 36px;
        width: 36px;
        display: flex;
        justify-content: center;
        box-sizing: content-box;
        border-radius: 10px;
        padding: 8px 10px;
        margin-right: 8px;
        -webkit-transition: all 200ms ease-in-out;
        -mox-transition: all 200ms ease-in-out;
        -o-transition: all 200ms ease-in-out;
        transition: all 200ms ease-in-out;

        :hover {
          color: var(--grayDark);
          background-color: var(--grayLight);
          -webkit-transition: all 200ms ease-in-out;
          -mox-transition: all 200ms ease-in-out;
          -o-transition: all 200ms ease-in-out;
          transition: all 200ms ease-in-out;
        }
      }
    }

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

    .social {
      font-size: 2rem;

      a {
        margin-right: 16px;
      }
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
    background-color: var(--grayLight);
    border-color: var(--grayDark);
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
          <div className="social">
            <a
              href="https://dribbble.com/rwinterstein"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dribbble"
            >
              <FontAwesomeIcon icon={["fab", "dribbble"]} />
            </a>
            <a
              href="https://www.linkedin.com/in/wintersteinrobert/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
            </a>
            <a
              href="https://www.instagram.com/robwinterstein/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </a>
            <a
              href="https://github.com/rwinterstein"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={["fab", "github-alt"]} />
            </a>
          </div>

          <Button
            className="btn btn-primary"
            href="mailto:hello@rwinterstein.com?subject=Hello!"
          >
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

import React from "react"
import styled from "styled-components"

// Fontawesome icons
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fab } from "@fortawesome/free-brands-svg-icons"
library.add(fab)

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.75rem;
  margin-bottom: 24px;

  a {
    color: var(--gray);
    margin-right: 16px;
  }

  FontAwesomeIcon {
    display: flex;
  }

  @media (min-width: 768px) {
    margin-left: -10px;

    a {
      height: fit-content;
      width: fit-content;
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

  @media (min-width: 1024px) {
    font-size: 2rem;

    a {
      margin-right: 16px;
    }
  }
`

const socialLinks = () => {
  return (
    <SocialLinks>
      <a
        href="https://www.linkedin.com/in/wintersteinrobert/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
      </a>
      <a
        href="https://github.com/rwinterstein"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FontAwesomeIcon icon={["fab", "github-alt"]} />
      </a>
      <a
        href="https://dribbble.com/rwinterstein"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Dribbble"
      >
        <FontAwesomeIcon icon={["fab", "dribbble"]} />
      </a>
      <a
        href="https://www.instagram.com/robwinterstein/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <FontAwesomeIcon icon={["fab", "instagram"]} />
      </a>
    </SocialLinks>
  )
}

export default socialLinks

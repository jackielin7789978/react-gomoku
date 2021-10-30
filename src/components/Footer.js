import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 20px 0px;
  text-align: center;
  font-size: 18px;
  letter-spacing: 1.5px;
  a {
    color: #8398a3;
    transition: ease 0.2s;
    margin: 0 4px;
    &:hover {
      color: #41548b;
    }
    cursor: pointer;
  }
  a:last-child {
    margin: 0;
  }
`

export default function Footer() {
  return (
    <FooterContainer>
      © Copyright 2021. Made by
      <a
        href='https://github.com/jackielin7789978'
        target='_blank'
        rel='noreferrer'
      >
        Jackie Lin
      </a>
      <a
        href='https://github.com/jackielin7789978/react-gomoku'
        target='_blank'
        rel='noreferrer'
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </FooterContainer>
  )
}

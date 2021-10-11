import styled from 'styled-components'

const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 30px 0px;
  text-align: center;
  font-size: 18px;
  letter-spacing: 1.5px;
  a {
    color: #8398a3;
    transition: ease 0.2s;
    &:hover {
      color: #41548b;
    }
  }
`

export default function Footer() {
  return (
    <FooterContainer>
      © Copyright 2021. Made by {'  '}
      <a
        href='https://github.com/jackielin7789978'
        target='_blank'
        rel='noreferrer'
      >
        Jackie Lin
      </a>
    </FooterContainer>
  )
}

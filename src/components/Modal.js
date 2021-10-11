import styled from 'styled-components'

const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(25, 25, 30, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
`
const EndingMsg = styled.div`
  font-size: 120px;
  margin-bottom: 50px;
  color: #e5e5e5;
`
const Restart = styled.a`
  font-size: 30px;
  background: transparent;
  cursor: pointer;
  margin-bottom: 20px;
  transition: ease 0.1s;
  color: #d5d5d5;
  &:hover {
    color: #fff;
  }
`

export default function Modal({ winner }) {
  return (
    <ModalContainer>
      <EndingMsg>Winner is {winner}</EndingMsg>
      <Restart href='/'>Play Again</Restart>
    </ModalContainer>
  )
}

import { useState, useContext } from 'react'
import { GameContext } from '../context'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useSounds } from '../utils'

const Wrapper = styled.div`
  margin-left: 20px;
  font-size: 18px;
  h3 {
    margin-left: 10px;
  }
`
const Menu = styled.div`
  width: 150px;
  padding: 8px;
  margin: 10px 10px 0px 10px;
  position: relative;
  background: #fcfcfc;
`
const Chevron = styled(FontAwesomeIcon)`
  position: absolute;
  right: 10px;
  font-size: 16px;
  cursor: pointer;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0)')};
`
const MenuList = styled.div`
  width: 150px;
  margin: 0px 10px 10px 10px;
  background: #fcfcfc;

  ${({ $isOpen }) => ($isOpen ? 'display: block' : 'display: none')};
  div {
    padding: 2px 8px;
    cursor: pointer;
    &:hover {
      background: #e7e7e7;
    }
  }
`

export default function Info() {
  const { steps, setSteps, isBlackNext, setIsBlackNext, history, setHistory } =
    useContext(GameContext)
  const [isOpen, setIsOpen] = useState(false)
  const moves = Array.from(Array(steps).keys())
  const { playClicked } = useSounds()

  const jumpTo = (step) => {
    setHistory(history.slice(0, step + 1))
    setSteps(Number(step) + 1)
    setIsBlackNext(step % 2 ? false : true)
  }

  return (
    <Wrapper>
      <h3>Next Player: {isBlackNext ? 'Black' : 'White'}</h3>
      <Menu $isOpen={isOpen}>
        Go Back
        <Chevron
          icon={faChevronUp}
          $isOpen={isOpen}
          onClick={() => {
            setIsOpen(!isOpen)
          }}
        />
      </Menu>
      <MenuList $isOpen={isOpen}>
        {moves.map((move) => {
          const desc = move ? `Go to step ${move}` : `Go to game start`
          return (
            <div
              key={move}
              value={move}
              onClick={() => {
                jumpTo(move)
                playClicked()
                setIsOpen(!isOpen)
              }}
            >
              {desc}
            </div>
          )
        })}
      </MenuList>
    </Wrapper>
  )
}

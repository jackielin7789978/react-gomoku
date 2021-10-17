import { useContext } from 'react'
import { SoundContext, GameContext } from '../context'
import styled from 'styled-components'
import { useSounds } from '../utils'

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
  color: #eee;
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
const StartGame = styled(Restart)`
  font-size: 54px;
`

export default function Modal() {
  const { playStart, playClicked } = useSounds()
  const { isSoundOn } = useContext(SoundContext)
  const {
    setIsPlaying,
    winner,
    history,
    setHistory,
    setIsBlackNext,
    setSteps
  } = useContext(GameContext)

  return (
    <ModalContainer>
      {!winner && (
        <StartGame
          onClick={() => {
            setIsPlaying(true)
            isSoundOn && playStart()
          }}
        >
          Start Game
        </StartGame>
      )}
      {winner && (
        <>
          <EndingMsg>Winner is {winner}</EndingMsg>
          <Restart
            onClick={() => {
              isSoundOn && playClicked()
              setIsPlaying(true)
              isSoundOn && playStart()
              setHistory(history.slice(0, 1))
              setSteps(0)
              setIsBlackNext(true)
            }}
          >
            Play Again
          </Restart>
        </>
      )}
    </ModalContainer>
  )
}

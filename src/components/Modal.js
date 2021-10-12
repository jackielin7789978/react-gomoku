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

export default function Modal({
  setIsPlaying,
  playStart,
  playClicked,
  winner,
  setBoard
}) {
  return (
    <ModalContainer>
      {!winner && (
        <StartGame
          onClick={() => {
            setIsPlaying(true)
            playStart()
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
              playClicked()
              setIsPlaying(true)
              playStart()
              setBoard({
                squares: Array(19)
                  .fill(0)
                  .map(() => Array(19).fill(null)),
                coordinates: [null, null]
              })
            }}
          >
            Play Again
          </Restart>
        </>
      )}
    </ModalContainer>
  )
}

import { useEffect, useState } from 'react'
import useSound from 'use-sound'
import { gamestart, blackchess, whitechess, winning, click } from '../sounds'
import GlobalStyle from '../constants/GlobalStyle'
import Board from './Board'
import Info from './Info'
import Modal from './Modal'
import Footer from './Footer'
import { calculateWinner } from '../utils'
import styled from 'styled-components'

const MainSection = styled.section`
  display: flex;
  justify-content: center;
  min-width: 50vw;
  max-width: 90vw;
  margin: 80px auto;
`
const Title = styled.div`
  font-size: 48px;
  color: #222;
  text-align: center;
  letter-spacing: 1.5px;
  margin: 5vh auto;
`

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isSoundOn, setIsSoundOn] = useState(true)
  const [isBlackNext, setIsBlackNext] = useState(true)
  const [history, setHistory] = useState([
    {
      squares: Array(19)
        .fill(0)
        .map(() => Array(19).fill(null)),
      coordinates: [null, null]
    }
  ])
  const [steps, setSteps] = useState(0)
  const currentSquares = history[history.length - 1].squares
  const currentX = history[history.length - 1].coordinates[0]
  const currentY = history[history.length - 1].coordinates[1]
  const [playStart] = useSound(gamestart, { volume: 1 })
  const [playBlack] = useSound(blackchess, { volume: 1 })
  const [playWhite] = useSound(whitechess, { volume: 1 })
  const [playWinning] = useSound(winning, { volume: 1 })
  const [playClicked] = useSound(click, { volume: 1 })

  useEffect(() => {
    if (calculateWinner(currentSquares, currentX, currentY)) {
      setIsPlaying(false)
      isSoundOn && playWinning()
    }
  }, [currentSquares, currentX, currentY, playWinning, isSoundOn, history])

  const jumpTo = (step) => {
    setHistory(history.slice(0, step + 1))
    setSteps(Number(step) + 1)
  }

  const handleClick = (x, y) => {
    if (
      calculateWinner(currentSquares, currentX, currentY) ||
      currentSquares[x][y]
    )
      return
    const newRow = currentSquares[x].map((square, index) => {
      if (index !== y) return square
      return isBlackNext ? 'Black' : 'White'
    })
    setHistory(
      history.concat([
        {
          squares: currentSquares.map((row, index) => {
            if (index !== x) return row
            return newRow
          }),
          coordinates: [x, y]
        }
      ])
    )
    setIsBlackNext(!isBlackNext)
    setSteps(steps + 1)
  }

  const handleSound = ($isBlackNext) => {
    if (!isSoundOn) return
    $isBlackNext ? playBlack() : playWhite()
  }

  const toggleSoundSetting = () => {
    setIsSoundOn(!isSoundOn)
  }
  return (
    <>
      <GlobalStyle />
      <Title>Gomoku Game</Title>
      <MainSection>
        <Board
          currentSquares={currentSquares}
          handleClick={handleClick}
          handleSound={handleSound}
          playClicked={playClicked}
          $isBlackNext={isBlackNext}
          toggleSoundSetting={toggleSoundSetting}
          isSoundOn={isSoundOn}
        />
        <Info
          steps={steps}
          jumpTo={jumpTo}
          isBlackNext={isBlackNext}
          playClicked={playClicked}
        />
      </MainSection>
      {!isPlaying && (
        <Modal
          setIsPlaying={setIsPlaying}
          isSoundOn={isSoundOn}
          playStart={playStart}
          playClicked={playClicked}
          history={history}
          setHistory={setHistory}
          winner={calculateWinner(currentSquares, currentX, currentY)}
          setIsBlackNext={setIsBlackNext}
        />
      )}
      <Footer />
    </>
  )
}

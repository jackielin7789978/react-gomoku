import { useEffect, useState } from 'react'
import { GameContext, SoundContext } from '../context'
import styled from 'styled-components'
import GlobalStyle from '../constants/GlobalStyle'
import Board from './Board'
import Info from './Info'
import Modal from './Modal'
import Footer from './Footer'
import { calculateWinner, useSounds } from '../utils'

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
  const { playWinning } = useSounds()
  const winner = calculateWinner(currentSquares, currentX, currentY)
  const [isSoundOn, setIsSoundOn] = useState(true)

  useEffect(() => {
    if (winner) {
      setIsPlaying(false)
      isSoundOn && playWinning()
    }
  }, [isSoundOn, playWinning, winner])

  return (
    <SoundContext.Provider value={{ isSoundOn, setIsSoundOn }}>
      <GameContext.Provider
        value={{
          currentSquares,
          isBlackNext,
          setIsBlackNext,
          setIsPlaying,
          history,
          setHistory,
          winner,
          steps,
          setSteps
        }}
      >
        <GlobalStyle />
        <Title>Gomoku Game</Title>
        <MainSection>
          <Board />
          <Info />
        </MainSection>
        {!isPlaying && <Modal />}
        <Footer />
      </GameContext.Provider>
    </SoundContext.Provider>
  )
}

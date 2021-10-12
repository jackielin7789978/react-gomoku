import { useEffect, useState } from 'react'
import useSound from 'use-sound'
import { gamestart, blackchess, whitechess, winning, click } from '../sounds'
import styled from 'styled-components'
import GlobalStyle from '../constants/GlobalStyle'
import Board from './Board'
import Info from './Info'
import Modal from './Modal'
import Footer from './Footer'
import { calculateWinner } from '../utils'

const Title = styled.div`
  font-size: 48px;
  color: #222;
  width: 500px;
  text-align: center;
  margin: 80px auto 40px auto;
  letter-spacing: 1.5px;
`

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isBlackNext, setIsBlackNext] = useState(true)
  const [board, setBoard] = useState({
    squares: Array(19)
      .fill(0)
      .map(() => Array(19).fill(null)),
    coordinates: [null, null]
  })

  const currentSquares = board.squares
  const currentX = board.coordinates[0]
  const currentY = board.coordinates[1]
  const [playStart] = useSound(gamestart, { volume: 2 })
  const [playBlack] = useSound(blackchess, { volume: 2 })
  const [playWhite] = useSound(whitechess, { volume: 2 })
  const [playWinning] = useSound(winning, { volume: 2 })
  const [playClicked] = useSound(click, { volume: 2 })

  const handleClick = (x, y) => {
    if (
      calculateWinner(currentSquares, currentX, currentY) ||
      board.squares[x][y]
    )
      return
    const newRow = board.squares[x].map((square, index) => {
      if (index !== y) return square
      return isBlackNext ? 'Black' : 'White'
    })
    setBoard({
      squares: board.squares.map((row, index) => {
        if (index !== x) return row
        return newRow
      }),
      coordinates: [x, y]
    })
    setIsBlackNext(!isBlackNext)
  }

  const handleSound = ($isBlackNext) => {
    $isBlackNext ? playBlack() : playWhite()
  }

  useEffect(() => {
    if (calculateWinner(currentSquares, currentX, currentY)) {
      setIsPlaying(false)
      playWinning()
    }
  }, [currentSquares, currentX, currentY, playWinning])
  return (
    <>
      <GlobalStyle />
      <Title>Gomoku Game</Title>
      <Board
        board={board}
        handleClick={handleClick}
        handleSound={handleSound}
        $isBlackNext={isBlackNext}
      />
      <Info />
      {!isPlaying && (
        <Modal
          setIsPlaying={setIsPlaying}
          playStart={playStart}
          playClicked={playClicked}
          winner={calculateWinner(currentSquares, currentX, currentY)}
        />
      )}
      <Footer />
    </>
  )
}

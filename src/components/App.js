import { useState } from 'react'
import styled from 'styled-components'
import GlobalStyle from '../constants/GlobalStyle'
import Board from './Board'
import Info from './Info'
import Modal from './Modal'
import Footer from './Footer'
import { calculateWinner } from '../utils'

const Title = styled.div`
  font-size: 36px;
  color: #222;
  width: 500px;
  text-align: center;
  margin: 80px auto 40px auto;
`

export default function App() {
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
  const winner = calculateWinner(currentSquares, currentX, currentY)

  function handleClick(x, y) {
    console.log(x, y)
    if (winner || board.squares[x][y]) return
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

  return (
    <>
      <GlobalStyle />
      <Title>Gomoku Game</Title>
      <Board board={board} handleClick={handleClick} />
      <Info />
      {winner && <Modal winner={winner} />}
      <Footer />
    </>
  )
}

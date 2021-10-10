import { useState } from 'react'
import styled from 'styled-components'
import GlobalStyle from '../constants/GlobalStyle'
import Board from './Board'
import Info from './Info'
import Modal from './Modal'
import Footer from './Footer'

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
      .map(() => Array(19).fill(null))
  })
  function handleClick(x, y) {
    if (board.squares[x][y] !== null) return
    const newRow = board.squares[x].map((square, index) => {
      if (index !== y) return square
      return isBlackNext ? true : false
    })
    setBoard({
      squares: board.squares.map((row, index) => {
        if (index !== x) return row
        return newRow
      })
    })
    setIsBlackNext(!isBlackNext)
  }

  return (
    <>
      <GlobalStyle />
      <Title>Gomoku Game</Title>
      <Board board={board} handleClick={handleClick} />
      <Info />
      <Modal />
      <Footer />
    </>
  )
}

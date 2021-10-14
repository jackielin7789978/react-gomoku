import { useEffect, useState } from 'react'
import useSound from 'use-sound'
import { gamestart, blackchess, whitechess, winning, click } from '../sounds'
import GlobalStyle from '../constants/GlobalStyle'
import Board from './Board'
import Info from './Info'
import Modal from './Modal'
import Footer from './Footer'
import { calculateWinner } from '../utils'

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isSoundOn, setIsSoundOn] = useState(true)
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
  const [playStart] = useSound(gamestart, { volume: 1 })
  const [playBlack] = useSound(blackchess, { volume: 1 })
  const [playWhite] = useSound(whitechess, { volume: 1 })
  const [playWinning] = useSound(winning, { volume: 1 })
  const [playClicked] = useSound(click, { volume: 1 })

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
    if (!isSoundOn) return
    $isBlackNext ? playBlack() : playWhite()
  }

  const toggleSoundSetting = () => {
    setIsSoundOn(!isSoundOn)
  }

  useEffect(() => {
    if (calculateWinner(currentSquares, currentX, currentY)) {
      setIsPlaying(false)
      isSoundOn && playWinning()
    }
  }, [currentSquares, currentX, currentY, playWinning, isSoundOn])
  return (
    <>
      <GlobalStyle />
      <Board
        board={board}
        handleClick={handleClick}
        handleSound={handleSound}
        playClicked={playClicked}
        $isBlackNext={isBlackNext}
        toggleSoundSetting={toggleSoundSetting}
        isSoundOn={isSoundOn}
      />
      <Info />
      {!isPlaying && (
        <Modal
          setIsPlaying={setIsPlaying}
          isSoundOn={isSoundOn}
          playStart={playStart}
          playClicked={playClicked}
          setBoard={setBoard}
          winner={calculateWinner(currentSquares, currentX, currentY)}
        />
      )}
      <Footer />
    </>
  )
}

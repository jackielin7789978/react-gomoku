import useSound from 'use-sound'
import { gamestart, blackchess, whitechess, winning, click } from './sounds'

export const useSounds = () => {
  const [playStart] = useSound(gamestart, { volume: 1 })
  const [playBlack] = useSound(blackchess, { volume: 1 })
  const [playWhite] = useSound(whitechess, { volume: 1 })
  const [playWinning] = useSound(winning, { volume: 1 })
  const [playClicked] = useSound(click, { volume: 1 })

  return { playStart, playBlack, playWhite, playWinning, playClicked }
}

export const calculateWinner = (squares, currentX, currentY) => {
  if (!currentX && !currentY) return

  function countConsecutives(x, y, dx, dy) {
    let color = squares[x][y]
    let tempX = x
    let tempY = y
    let consecutiveCount = 0
    do {
      tempX += dx
      tempY += dy
      // 超出棋盤範圍的就不檢查
      if (tempX < 0 || tempY < 0) break
      if (tempX > 18 || tempY > 18) break
      if (squares[tempX][tempY] === color) {
        consecutiveCount++
      } else {
        break
      }
    } while (consecutiveCount < 5)
    return consecutiveCount
  }

  if (
    countConsecutives(currentX, currentY, 1, 1) +
      countConsecutives(currentX, currentY, -1, -1) >=
      4 ||
    countConsecutives(currentX, currentY, 1, 0) +
      countConsecutives(currentX, currentY, -1, 0) >=
      4 ||
    countConsecutives(currentX, currentY, 0, 1) +
      countConsecutives(currentX, currentY, 0, -1) >=
      4 ||
    countConsecutives(currentX, currentY, 1, -1) +
      countConsecutives(currentX, currentY, -1, 1) >=
      4
  ) {
    return squares[currentX][currentY]
  }
  return null
}

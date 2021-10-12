import styled from 'styled-components'

const ChessBoard = styled.div`
  background: #b89874;
  width: 570px;
  height: 570px;
  box-shadow: 4px 8px 12px 1px rgba(60, 60, 60, 0.5);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  border-radius: 2px;
`
const ChessBorder = styled.div`
  position: absolute;
  background: #b89874;
  z-index: 1;

  &:first-child {
    width: 100%;
    height: 14px;
    top: 0;
  }
  &:nth-child(2) {
    width: 100%;
    height: 14px;
    bottom: 0;
  }
  &:nth-child(3) {
    width: 14px;
    height: 100%;
    left: 0;
  }
  &:nth-child(4) {
    width: 14px;
    height: 100%;
    right: 0;
  }
`
const Row = styled.div`
  height: 30px;
  width: 570px;
  position: relative;
`
const Grid = styled.div`
  position: relative;
  display: inline-block;
  top: 0;
  left: 0px;
  width: 30px;
  height: 30px;
  border: 1px solid #413320dd;
  transform: translate(-50%, -50%);
`
const Square = styled.div`
  cursor: pointer;
  position: relative;
  display: inline-block;
  left: 0px;
  width: 30px;
  height: 30px;
  transform: translate(0, -2000%);
  z-index: 2;
  span {
    width: 19px;
    height: 19px;
    border-radius: 50%;
    background: transparent;
    border: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-55%, -60%);
    transition: linear 0.1s;
    z-index: 5;
    &:hover {
      background: ${({ $isBlackNext }) =>
        $isBlackNext ? 'rgba(80, 80, 80, 0.8)' : 'rgba(200, 200, 200, 0.8)'};
      box-shadow: 2px 2px 3px 0px rgba(90, 90, 90, 0.7);
    }
  }
`
const Black = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #111;
  border: 1px solid #333;
  z-index: 5;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 2px 2px 2px 0px rgba(30, 30, 30, 0.7);
`
const White = styled(Black)`
  background: #eee;
  border: 1px solid #ddd;
`

export default function Board({
  handleClick,
  handleSound,
  board,
  $isBlackNext
}) {
  const grids = Array(20)
    .fill(0)
    .map(() => Array(20).fill(null))

  return (
    <ChessBoard>
      <ChessBorder />
      <ChessBorder />
      <ChessBorder />
      <ChessBorder />
      {grids.map((grid, index) => (
        <Row key={index} style={{ width: '600px' }}>
          {grid.map((row, i) => (
            <Grid key={index[i]} />
          ))}
        </Row>
      ))}
      {board.squares.map((col, x) => {
        return (
          <Row key={x}>
            {col.map((row, y) => {
              return (
                <>
                  <Square
                    key={col[y]}
                    $isBlackNext={$isBlackNext}
                    onClick={(e) => {
                      e.stopPropagation()
                      handleClick(x, y)
                      handleSound($isBlackNext)
                    }}
                  >
                    <span></span>
                    {!board.squares[x][y] ? (
                      <></>
                    ) : board.squares[x][y] === 'Black' ? (
                      <Black />
                    ) : (
                      <White />
                    )}
                  </Square>
                </>
              )
            })}
          </Row>
        )
      })}
    </ChessBoard>
  )
}

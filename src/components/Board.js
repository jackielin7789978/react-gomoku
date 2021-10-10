import styled from 'styled-components'

const ChessBoard = styled.div`
  background: #bb9966;
  width: 580px;
  height: 580px;
  margin: 0 auto;
  padding-top: 16px;
  padding-left: 14px;
  box-shadow: 4px 8px 12px 1px rgba(80, 80, 80, 0.5);
  border-radius: 2px;
`
const Square = styled.div`
  cursor: pointer;
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 1px solid #4a260f;
  background: #bb9966;
  margin-top: -1px;
  margin-right: -1px;
  line-height: 30px;
  text-align: center;
  position: relative;
`
const Row = styled.div`
  height: 30px;
  width: 570px;
  margin-top: -1px;
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

export default function Board({ handleClick, board }) {
  return (
    <ChessBoard>
      {board.squares.map((col, x) => {
        return (
          <Row key={x}>
            {col.map((row, y) => {
              return (
                <Square
                  key={y}
                  onClick={() => {
                    handleClick(x, y)
                  }}
                >
                  {board.squares[x][y] === null ? (
                    <></>
                  ) : board.squares[x][y] ? (
                    <Black />
                  ) : (
                    <White />
                  )}
                </Square>
              )
            })}
          </Row>
        )
      })}
    </ChessBoard>
  )
}

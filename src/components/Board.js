import styled from 'styled-components'

const ChessBoard = styled.div`
  background: #bb9966;
  width: 570px;
  height: 570px;
  margin: 0 auto;
  box-shadow: 4px 8px 12px 1px rgba(60, 60, 60, 0.5);
  border-radius: 2px;
  border: 1px solid transparent;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
`
const CoverBars = styled.div`
  position: absolute;
  background: #bb9966;
  z-index: 2;

  &:first-child {
    width: 100%;
    height: 14px;
  }
  &:nth-child(2) {
    width: 100%;
    height: 13px;
    bottom: 0;
  }
  &:nth-child(3) {
    width: 14px;
    height: 100%;
    left: 0;
  }
  &:nth-child(4) {
    width: 12px;
    height: 100%;
    right: 0;
  }
`
const Wrapper = styled.div`
  width: 541px;
  height: 541px;
  position: relative;
  top: 14px;
  left: 15px;
  border-right: 1px solid #4a260f;
`
const Row = styled.div`
  height: 30px;
  width: 570px;
  position: relative;
`
const Square = styled.div`
  cursor: pointer;
  display: inline-block;
  width: 30px;
  height: 30px;
  position: relative;
  right: 15px;
  bottom: 15px;
`
const Cross = styled.div`
  background: #4a260f;
  height: 30px;
  width: 1px;
  position: relative;
  left: -16px;

  &:after {
    background: #4a260f;
    content: '';
    width: 30px;
    height: 1px;
    position: absolute;
    top: 50%;
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

export default function Board({ handleClick, board }) {
  return (
    <ChessBoard>
      <CoverBars />
      <CoverBars />
      <CoverBars />
      <CoverBars />
      <Wrapper>
        {board.squares.map((col, x) => {
          return (
            <Row key={x}>
              {col.map((row, y) => {
                return (
                  <Square
                    key={y}
                    onClick={(e) => {
                      e.stopPropagation()
                      handleClick(x, y)
                    }}
                  >
                    <Cross />
                    {!board.squares[x][y] ? (
                      <></>
                    ) : board.squares[x][y] === 'Black' ? (
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
      </Wrapper>
    </ChessBoard>
  )
}

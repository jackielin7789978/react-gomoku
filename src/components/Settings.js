import { useContext } from 'react'
import { SoundContext } from '../context'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons'
import { faVolumeMute } from '@fortawesome/free-solid-svg-icons'
import { useSounds } from '../utils'

const Container = styled.div`
  position: absolute;
  width: 50px;
  top: 20px;
  right: 30px;
`
const Bar = styled.div`
  display: inline-block;
  width: 100%;
  height: 20px;
  background: #aab4be;
  border-radius: 20px;
`
const Circle = styled.span`
  position: absolute;
  left: ${({ $isSoundOn }) => ($isSoundOn ? '40%' : '0')};
  top: -6px;
  width: 30px;
  height: 30px;
  background: #001e3c;
  border-radius: 50%;
  cursor: pointer;
`
const iconStyles = {
  color: '#f5f5f5',
  position: 'absolute',
  top: '6px',
  right: '7px'
}

export default function Settings() {
  const { playClicked } = useSounds()
  const { isSoundOn, setIsSoundOn } = useContext(SoundContext)
  return (
    <Container>
      <Bar />
      <Circle
        onClick={() => {
          setIsSoundOn(!isSoundOn)
          playClicked()
        }}
        $isSoundOn={isSoundOn}
      >
        {isSoundOn ? (
          <FontAwesomeIcon icon={faVolumeUp} style={iconStyles} />
        ) : (
          <FontAwesomeIcon icon={faVolumeMute} style={iconStyles} />
        )}
      </Circle>
    </Container>
  )
}

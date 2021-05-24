import Head from 'next/head'
import ReactPlayer from 'react-player'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import styled from 'styled-components'

const StyledBox = styled(Box)`
  position: relative;
  min-height: calc(100vh - 20vh);
  width: 100%;

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
  }
`

const VideoPlayer = () => {
  return (
    <Container mawWidth="md">
      <StyledBox>
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/watch?v=XdvdLo3IC8s&list=UUaUPjphSCehRXTnGvgmaOZA&index=2s://www.youtube.com/watch?v=XdvdLo3IC8s&list=UUaUPjphSCehRXTnGvgmaOZA&index=2"
          controls
          playing
        />
      </StyledBox>
    </Container>
  )
}

export default VideoPlayer

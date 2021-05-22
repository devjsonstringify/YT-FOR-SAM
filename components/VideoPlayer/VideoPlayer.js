import Head from 'next/head'
import ReactPlayer from 'react-player'
import Box from '@material-ui/core/Box'
import styled from 'styled-components'

const StyledBox = styled(Box)`
  position: relative;
  padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
    width: 100% !important;
    height: calc(100% - 20%) !important;
  }
`

const VideoPlayer = () => {
  return (
    <StyledBox>
      <ReactPlayer
        className="react-player"
        url="https://www.youtube.com/watch?v=XdvdLo3IC8s&list=UUaUPjphSCehRXTnGvgmaOZA&index=2s://www.youtube.com/watch?v=XdvdLo3IC8s&list=UUaUPjphSCehRXTnGvgmaOZA&index=2"
        controls
        playing
      />
    </StyledBox>
  )
}

export default VideoPlayer

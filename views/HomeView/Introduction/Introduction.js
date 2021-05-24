import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import CardMedia from '@material-ui/core/CardMedia'
import Container from '@material-ui/core/Container'
import Grow from '@material-ui/core/Grow'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import styled from 'styled-components'
import useToggle from 'hooks/useToggle'
import VideoPlayer from 'components/VideoPlayer'
import { DEFAULT_VIDEO } from './data'

const Introduction = () => {
  console.log(DEFAULT_VIDEO)
  const [isWatchNowCick, setIsWatchNowCick] = useToggle(false)
  return (
    <Box margin="2rem auto" padding="2rem">
      <Container maxWidth="md">
        {isWatchNowCick ? (
          <Grow in={isWatchNowCick}>
            <VideoPlayer data={DEFAULT_VIDEO} />
          </Grow>
        ) : (
          <Paper>
            <Box
              padding="5rem"
              boxShadow="-10px 17px 0px 0px rgba(0,41,158,0.3)"
            >
              <Box position="abosolute" width="100%">
                <Typography variant="h2" color="secondary" align="center">
                  "Lets build the future together with kids."
                </Typography>
                <Typography paragraph align="center">
                  Watch video of choice, play it here.
                </Typography>
                <Box display="flex">
                  <Box margin="3rem auto 0">
                    <Button
                      variant="contained"
                      size="large"
                      color="secondary"
                      onClick={() => setIsWatchNowCick()}
                    >
                      Watch now
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Paper>
        )}
      </Container>
    </Box>
  )
}

export default Introduction

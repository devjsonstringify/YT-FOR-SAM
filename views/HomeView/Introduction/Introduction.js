import { useState, useContext, useRef } from 'react'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grow from '@material-ui/core/Grow'
import Grid from '@material-ui/core/Grid'
import Zoom from '@material-ui/core/Zoom'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import isEmpty from 'lodash/isEmpty'
import styled from 'styled-components'
import { Form, Field } from 'react-final-form'
import useToggle from 'hooks/useToggle'
import VideoPlayer from 'components/VideoPlayer'
import { DEFAULT_VIDEO } from './data'
import PreselectedVideosList from '../PreselectedVideosList/PreselectedVideosList'
import HomeContext from '../HomeContext'

const Introduction = () => {
  const { videoPlayerState, showOnlyOnceRef } = useContext(HomeContext)
  const [isWatchNowCick, setIsWatchNowCick] = useToggle(false)
  const [isFormVisible, setIsFormVisible] = useToggle(false)
  const reference = useRef(false)

  const onSubmit = (values) => {
    window.alert(JSON.stringify(values, 0, 2))
  }

  const onHandleFindVideo = () => {
    setIsFormVisible()
  }

  return (
    <Box padding="2rem">
      <Container maxWidth="lg">
        {(isWatchNowCick || showOnlyOnceRef.current) && (
          <Grow in={isWatchNowCick || showOnlyOnceRef.current}>
            <Grid container spacing={5}>
              <Grid item md={3}>
                <PreselectedVideosList />
              </Grid>
              <Grid item md={9}>
                <VideoPlayer data={videoPlayerState} />
              </Grid>
            </Grid>
          </Grow>
        )}

        {showOnlyOnceRef.current ? null : (
          <Paper ref={reference}>
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
                      onClick={() => {
                        showOnlyOnceRef.current = true
                        setIsWatchNowCick()
                      }}
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

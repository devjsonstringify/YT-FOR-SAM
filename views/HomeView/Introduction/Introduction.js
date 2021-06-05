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
import { breakpoints } from 'utils/breakpoints'

const StyledGridContainer = styled(Grid)`
  .MuiGrid-item:first-child {
    ${breakpoints('order', '', [{ 959: 1 }])}
  }
  .MuiGrid-item:last-child {
    ${breakpoints('order', '', [{ 959: 0 }])}
  }
`

const Introduction = () => {
  const { videoPlayerState, showOnlyOnceRef } = useContext(HomeContext)
  const [isWatchNowCick, setIsWatchNowCick] = useToggle(false)
  const [isFormVisible, setIsFormVisible] = useToggle(false)
  const reference = useRef(false)

  return (
    <Box padding="2rem">
      <Box>
        {(isWatchNowCick || showOnlyOnceRef.current) && (
          <Grow in={isWatchNowCick || showOnlyOnceRef.current}>
            <PreselectedVideosList />
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
      </Box>
    </Box>
  )
}

export default Introduction

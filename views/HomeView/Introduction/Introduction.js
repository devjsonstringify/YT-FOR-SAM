import { useState, useContext, useRef, useEffect } from 'react'
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
  const { videoPlayerState, showOnlyOnceRef, setIsHomeView } =
    useContext(HomeContext)
  const [isWatchNowCick, setIsWatchNowCick] = useToggle(false)
  const [isFormVisible, setIsFormVisible] = useToggle(false)
  const reference = useRef(false)

  return (
    <Box padding={reference ? '0' : '2rem'} height="100%">
      <Box height="100%">
        {(isWatchNowCick || showOnlyOnceRef.current) && (
          <Grow in={isWatchNowCick || showOnlyOnceRef.current}>
            <PreselectedVideosList />
          </Grow>
        )}

        {showOnlyOnceRef.current ? null : (
          <Box
            ref={reference}
            height="100%"
            marginTop="calc(100vh / 4)"
            padding="0 2rem"
          >
            <Box height="100%">
              <Box position="abosolute" width="100%">
                <Typography variant="h3" color="secondary" align="center">
                  "Lets build the future together with kids."
                </Typography>
                <Typography variant="h6" align="center">
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
                        setIsHomeView(false)
                      }}
                    >
                      Watch now
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default Introduction

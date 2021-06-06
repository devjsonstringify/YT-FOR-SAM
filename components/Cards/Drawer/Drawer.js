import { useState, useContext } from 'react'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Card from 'components/Card'
import CancelIcon from '@material-ui/icons/Cancel'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'
import { breakpoints } from 'utils/breakpoints'
import format from 'date-fns/format'
import CardsContext from '../CardsContext'

const StyedBoxContent = styled(Box)`
  color: #ffffff;
  box-sizing: border-box;
  display: grid;
  height: 100%;
  padding: 1rem;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  grid-template-rows: 1fr;
  overflow-x: auto;
  width: 100%;
  word-break: break-word;
`
const StyledBoxClose = styled(Box)`
  .MuiSvgIcon-root {
    cursor: pointer;
    fill: #ffffff;
    width: 1.5em;
    height: 1.5em;
  }
`

const ContentDrawer = () => {
  const {
    showItemDetails,
    setShowItemDetails,
    toggleDrawer,
    setVideoDetails,
    videoDetails,
  } = useContext(CardsContext)

  const { id, description, name, date } = videoDetails
  return (
    <Box>
      <Drawer
        anchor="bottom"
        open={showItemDetails}
        onClose={toggleDrawer}
        PaperProps={{
          style: {
            backgroundColor: '#002547',
            padding: '1rem 2rem',
            borderRadius: '10px 10px 0 0',
          },
        }}
      >
        <Box
          height="calc(100vh / 3)"
          id="drawer_inner"
          display="flex"
          margin="2rem 0"
        >
          <StyedBoxContent>
            <Box
              display="grid"
              gridTemplateColumns="3fr 1fr"
              gridColumnGap="2rem"
            >
              <Box>
                <Typography variant="h6">{name}</Typography>
                <Typography variant="button" paragraph>
                  {format(new Date(date), 'MM/dd/yyyy')}
                </Typography>
                <Typography paragraph>{description}</Typography>
              </Box>
              <StyledBoxClose display="flex" justifyContent="flex-end">
                <Box>
                  <IconButton onClick={toggleDrawer}>
                    <CancelIcon />
                  </IconButton>
                </Box>
              </StyledBoxClose>
            </Box>
            <Box margin="1rem 0">
              <Button
                size="medium"
                variant="contained"
                color="secondary"
                onClick={toggleDrawer}
              >
                <PlayArrowIcon />
                Watch
              </Button>
            </Box>
          </StyedBoxContent>
        </Box>
      </Drawer>
    </Box>
  )
}

export default ContentDrawer

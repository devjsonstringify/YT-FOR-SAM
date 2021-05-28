import { useState, Fragment } from 'react'
import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'
import { SETTINGS } from './data'

const StyledList = styled(List)`
  .MuiListItem-root {
    &:hover {
      .MuiSvgIcon-root {
        fill: #002547;
      }
    }
  }
`

const CallToAction = () => {
  return (
    <Box>
      <Typography align="center">Settings</Typography>
      <StyledList dense>
        {SETTINGS.map(({ id, name, icon }) => (
          <Fragment key={id}>
            <ListItem>
              <ListItemIcon>
                <IconButton>{icon}</IconButton>
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItem>
            <Divider />
          </Fragment>
        ))}
      </StyledList>
    </Box>
  )
}

export default CallToAction

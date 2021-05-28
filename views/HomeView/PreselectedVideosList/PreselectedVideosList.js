import { useContext, useState, useEffect } from 'react'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied'
import styled from 'styled-components'
import isEmpty from 'lodash/isEmpty'
import HomeContext from 'views/HomeView/HomeContext'
import GetLocalStorageByItem from 'utils/getLocalStorageItem'

const StyledListItemText = styled(ListItemText)`
  color: #806200;
  background-color: #ffcf33;
  padding: 0.5em;
  transition: 0.2s border ease-in-out, 0.2s box-shadow ease-in-out;
  border: 1px solid #ffc300;
  text-align: center;
  transition: opacity 1s 0s linear;
  border-radius: 11px;
  word-break: break-all;

  &:hover {
    background-color: #003566;
    border: 1px solid #003566;
    color: #ffffff;
  }
`
const StyledButton = styled(Button)`
  padding: 0;
  min-height: auto;
  &:hover {
    background-color: rgba(0, 0, 0, 0);
  }
`

const PreselectedVideosList = () => {
  const { OnHandleSetPlayerVideo, onHandleClickToggleForm } =
    useContext(HomeContext)
  const nodes = GetLocalStorageByItem('nodes')

  return (
    <Paper>
      <Box padding="1rem" maxHeight="calc(100vh - 30vh)" overflow="auto">
        <Box>
          <Typography variant="h6" align="center">
            Your saved items
          </Typography>
          <Box display="flex">
            <Box margin="1rem auto">
              <Button
                color="secondary"
                variant="contained"
                onClick={onHandleClickToggleForm}
              >
                add
              </Button>
            </Box>
          </Box>
        </Box>
        <List dense>
          {/* localstorage data */}
          {isEmpty(nodes) ? (
            <Box display="flex">
              <Box margin="auto">
                <Typography>
                  No saved item yet <SentimentDissatisfiedIcon />
                </Typography>
              </Box>
            </Box>
          ) : (
            nodes.map(({ id, name, link, description }) => (
              <ListItem key={id} dense>
                <StyledButton
                  onClick={() =>
                    OnHandleSetPlayerVideo({ link, name, description })
                  }
                  variant="text"
                  fullWidth
                >
                  <StyledListItemText primary={name} />
                </StyledButton>
              </ListItem>
            ))
          )}
        </List>
      </Box>
    </Paper>
  )
}

export default PreselectedVideosList

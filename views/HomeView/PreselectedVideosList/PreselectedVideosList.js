import { useContext } from 'react'
import { Typography } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Paper from '@material-ui/core/Paper'
import styled from 'styled-components'
import { LOCAL_STORAGE_VIDEOS_LIST } from './data'
import HomeContext from 'views/HomeView/HomeContext'

const StyledListItemText = styled(ListItemText)`
  color: #806200 !important;
  background-color: #ffcf33;
  padding: 0.5em;
  transition: 0.2s border ease-in-out, 0.2s box-shadow ease-in-out;
  border: 1px solid #ffc300;
  text-align: center;
  border-radius: 11px;
`
const StyledButton = styled(Button)`
  padding: 0;
  min-height: auto;
  &:hover {
    background-color: rgba(0, 0, 0, 0);
  }
`

const PreselectedVideosList = () => {
  const { OnHandleSetPlayerVideo } = useContext(HomeContext)
  return (
    <Paper>
      <Box padding="1rem">
        <Box marginBottom="2rem">
          <Typography variant="h6">
            Locally saved videos on your machine
          </Typography>
        </Box>
        <List dense>
          {LOCAL_STORAGE_VIDEOS_LIST.map(({ id, name, link }) => (
            <ListItem key={id} dense>
              <StyledButton
                onClick={() => OnHandleSetPlayerVideo({ link, name })}
                variant="text"
                fullWidth
              >
                <StyledListItemText primary={name} />
              </StyledButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Paper>
  )
}

export default PreselectedVideosList

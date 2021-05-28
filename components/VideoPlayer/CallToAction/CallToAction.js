import { useState, Fragment, useEffect, useContext } from 'react'
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
import useLocalStorage from 'hooks/useLocalStorage'
import GetLocalStorageByItem from 'utils/getLocalStorageItem'
import HomeContext from 'views/HomeView/HomeContext'

const StyledList = styled(List)`
  .MuiListItem-root {
    &:hover {
      .MuiSvgIcon-root {
        fill: #002547;
      }
    }
  }
`

const CallToAction = ({ deleteByID }) => {
  // const { setVideoPlayerState } = useContext(HomeContext)
  const nodes = GetLocalStorageByItem('nodes')
  const [, setSaveVideo] = useLocalStorage('nodes', [])
  const [settingsState, setSettingsState] = useState({
    loading: 'idle',
    error: false,
  })
  const isLoading = settingsState.loading === 'loading'

  useEffect(() => {
    setSaveVideo(nodes)
  }, [nodes])

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
  const onDeleteLocalStorageItem = async (idToRemove) => {
    setSettingsState((prev) => ({
      ...prev,
      loading: 'loading',
    }))

    try {
      await sleep(1000)
      const newList = nodes.filter((node) => node.id !== idToRemove)
      setSaveVideo(newList)
      setSettingsState((prev) => ({
        ...prev,
        loading: 'idle',
      }))
      window.location.reload()
    } catch (error) {
      setSettingsState((prev) => ({
        ...prev,
        error: true,
      }))
    }
  }
  return (
    <Box>
      <Typography align="center">Settings</Typography>
      <StyledList dense>
        {SETTINGS.map(({ id, name, icon }) => (
          <Fragment key={id}>
            <ListItem>
              <ListItemIcon>
                <IconButton
                  onClick={() => onDeleteLocalStorageItem(deleteByID)}
                >
                  {icon}
                </IconButton>
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItem>
            <Divider />
          </Fragment>
        ))}
      </StyledList>
      <Box position="relative" display="flex" height="100%" width="100%">
        <Box margin="2rem auto 0">
          {isLoading && <Typography>Loading..</Typography>}
          {settingsState.error && <Typography>Error...</Typography>}
        </Box>
      </Box>
    </Box>
  )
}

export default CallToAction

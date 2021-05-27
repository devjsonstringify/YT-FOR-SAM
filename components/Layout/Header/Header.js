import { useContext } from 'react'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import LockIcon from '@material-ui/icons/Lock'
import styled from 'styled-components'
import HomeContext from 'views/HomeView/HomeContext'

const StyledBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
const StyledButtonWatch = styled(Button)`
  .MuiSvgIcon-root {
    margin-right: 0.7rem;
  }
`

const Header = () => {
  const { onHandleClickToggleForm } = useContext(HomeContext)
  return (
    <StyledBox>
      <Box display="flex" alignItems="center">
        <Typography variant="h6" noWrap>
          save-and-watch-videos
        </Typography>
      </Box>
      <Box>
        <StyledButtonWatch
          variant="contained"
          color="secondary"
          onClick={onHandleClickToggleForm}
        >
          <LockIcon /> Parent access
        </StyledButtonWatch>
      </Box>
    </StyledBox>
  )
}

export default Header

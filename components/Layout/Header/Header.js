import { useContext } from 'react'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import PageviewRoundedIcon from '@material-ui/icons/PageviewRounded'
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
          youtube only for Sam
        </Typography>
      </Box>
      <Box>
        <StyledButtonWatch
          variant="contained"
          color="secondary"
          onClick={onHandleClickToggleForm}
        >
          <PageviewRoundedIcon /> Find video
        </StyledButtonWatch>
      </Box>
    </StyledBox>
  )
}

export default Header

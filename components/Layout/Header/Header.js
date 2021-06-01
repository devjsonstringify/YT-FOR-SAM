import { useContext } from 'react'
import Avatar from '@material-ui/core/Avatar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import LockIcon from '@material-ui/icons/Lock'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import styled from 'styled-components'
import HomeContext from 'views/HomeView/HomeContext'
import { breakpoints } from 'utils/breakpoints'

const StyledBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
const StyledParentAccessBtn = styled(Button)`
  .MuiSvgIcon-root {
    margin-right: 0.7rem;
    ${breakpoints('margin', '', [{ 959: 'auto' }])};
  }
`

const Header = () => {
  const { onHandleClickToggleForm } = useContext(HomeContext)
  const isMobileView = useMediaQuery('(max-width:959px)')
  return (
    <StyledBox>
      <Box display="flex" alignItems="center">
        <Box margin="0 1rem 0 0">
          <Avatar
            alt="save-and-watch-videos"
            src="/logo.png"
            variant="square"
          />
        </Box>
        <Typography variant="h6" noWrap>
          {isMobileView ? 'SWV' : 'save-and-watch-videos'}
        </Typography>
      </Box>
      <Box>
        <StyledParentAccessBtn
          variant="contained"
          color="secondary"
          onClick={onHandleClickToggleForm}
        >
          <LockIcon /> {!isMobileView && 'Parent access'}
        </StyledParentAccessBtn>
      </Box>
    </StyledBox>
  )
}

export default Header

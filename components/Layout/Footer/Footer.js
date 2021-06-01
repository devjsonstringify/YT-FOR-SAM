import styled from 'styled-components'
import Box from '@material-ui/core/Box'

const StyledBoxFooter = styled(Box)`
  /* bottom: 0; */
  background-color: #ffc300;
  /* position: absolute;
  left: 0;
  right: 0; */
  margin-top: 1rem;
  min-height: 5rem;
`
const Footer = () => {
  return (
    <StyledBoxFooter color="primary" display="flex">
      <Box margin="auto">Made with ❤️ by Daddy</Box>
    </StyledBoxFooter>
  )
}

export default Footer

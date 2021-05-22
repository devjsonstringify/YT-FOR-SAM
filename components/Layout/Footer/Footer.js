import styled from 'styled-components'
import Box from '@material-ui/core/Box'

const StyledBoxFooter = styled(Box)`
  bottom: 0;
  position: absolute;
`
const Footer = () => {
  return <StyledBoxFooter>footer here..</StyledBoxFooter>
}

export default Footer

import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Card from 'components/Card'
import { repeat } from 'lodash'
import styled from 'styled-components'
import { breakpoints } from 'utils/breakpoints'

// tips: https://css-tricks.com/look-ma-no-media-queries-responsive-layouts-using-css-grid/
const StyledRootCards = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18.75rem, 1fr));
  grid-auto-rows: 1fr;
  gap: 24px 24px;
  width: 100%;
`

const Cards = ({ data }) => {
  return (
    <Box>
      <StyledRootCards>
        {data.map((item) => (
          <Card {...item} key={item.id} />
        ))}
      </StyledRootCards>
    </Box>
  )
}

export default Cards

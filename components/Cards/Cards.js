import { useMemo, useCallback, useState } from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Card from 'components/Card'
import styled from 'styled-components'
import { breakpoints } from 'utils/breakpoints'
import CardsContext from './CardsContext'
import DrawerContent from './Drawer'

// tips: https://css-tricks.com/look-ma-no-media-queries-responsive-layouts-using-css-grid/
const StyledRootCards = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18.75rem, 1fr));
  grid-auto-rows: 1fr;
  gap: 24px 24px;
  width: 100%;
`
const Cards = ({ data }) => {
  const [showItemDetails, setShowItemDetails] = useState(false)
  const [videoDetails, setVideoDetails] = useState({
    id: null,
    name: '',
    link: '',
    description: '',
    date: new Date(),
  })

  const toggleDrawer = useCallback(() => {
    setShowItemDetails((prev) => !prev)
  }, [])

  const CardsAPI = useMemo(
    () => ({
      showItemDetails,
      setShowItemDetails,
      toggleDrawer,
      setVideoDetails,
      videoDetails,
    }),
    [showItemDetails, videoDetails],
  )

  return (
    <CardsContext.Provider value={CardsAPI}>
      <Container maxWidth="lg">
        <StyledRootCards>
          {data.map((item) => (
            <Card {...item} key={item.id} />
          ))}
        </StyledRootCards>
        {/* actual video item content  */}
        <DrawerContent />
      </Container>
    </CardsContext.Provider>
  )
}

export default Cards

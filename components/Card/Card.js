import { useState, useContext } from 'react'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Collapse from '@material-ui/core/Collapse'
import PlayCircleFilledOutlinedIcon from '@material-ui/icons/PlayCircleFilledOutlined'
import styled from 'styled-components'
import CardsContext from 'components/Cards/CardsContext'

const StyledCard = styled(Card)`
  cursor: pointer;
  background-color: #002547;
  border-radius: 8px;
  transition: background-color 0.3s linear;
  position: relative;
  min-height: 12.5rem;

  .MuiCardActionArea-root {
    box-sizing: border-box;
    display: block;
    height: 100%;
    padding: 2rem;
  }

  .MuiCardContent-root {
    padding-top: 0;
  }

  .MuiTypography-colorPrimary {
    color: #fff;
    font-weight: 500;
    word-break: break-all;
  }

  &:hover {
    background-color: #000a14;
  }
`
const VideoCard = ({
  id,
  avatarImage,
  name,
  subheader,
  link,
  description,
  date,
}) => {
  const [isHovered, setIsHovered] = useState()
  const { showItemDetails, setShowItemDetails, toggleDrawer, setVideoDetails } =
    useContext(CardsContext)

  return (
    <StyledCard
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        setVideoDetails((prev) => ({
          ...prev,
          id,
          avatarImage,
          name,
          subheader,
          link,
          description,
          date,
        }))
        toggleDrawer()
      }}
    >
      <Collapse in={isHovered} timeout={1}></Collapse>
      <CardActionArea>
        {/* <CardMedia image="/assets/playing.jpg" title={name} /> */}
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            color="primary"
            noWrap
          >
            {name}
          </Typography>
          {/* <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography> */}
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
    </StyledCard>
  )
}

export default VideoCard

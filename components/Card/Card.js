import { useState } from 'react'
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
import ReactPlayer from 'react-player'
import styled from 'styled-components'

const StyledCard = styled(Card)`
  background-color: #002547;
  border-radius: 8px;
  /* box-shadow: 0px 5px 5px 0px rgba(0, 41, 158, 0.3); */
  transition: background-color 0.3s linear;
  position: relative;
  /* min-width: 18.75rem; */
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
`
const StyledBoxPlayBtn = styled(Box)`
  align-items: flex-end;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 1;

  .MuiSvgIcon-root {
    cursor: pointer;
    fill: #ffc300;
    height: 2em;
    width: 2em;
    transition: all 0.3s ease;
    margin: 1rem;
  }
`

const VideoCard = ({ id, avatarImage, name, subheader, link, description }) => {
  const [isHovered, setIsHovered] = useState()

  return (
    <StyledCard
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Collapse in={isHovered} timeout={1}>
        <StyledBoxPlayBtn>
          {isHovered && <PlayCircleFilledOutlinedIcon />}
        </StyledBoxPlayBtn>
      </Collapse>
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

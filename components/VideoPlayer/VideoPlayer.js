import Head from 'next/head'
import ReactPlayer from 'react-player'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MoreVertIcon from '@material-ui/icons/MoreVert'

const StyledBox = styled(Box)`
  position: relative;
  padding-top: calc((9 / 16) * 100%);
  width: 100%;

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
  }
`

const VideoPlayer = ({ data }) => {
  const { avatarImage, title, subheader, link, description } = data
  return (
    <Box margin="5rem auto">
      <Container maxWidth="sm">
        <Box boxShadow="0px 20px 34px 0px rgba(0,41,158,0.3)">
          <Card>
            <CardHeader
              avatar={<Avatar src={avatarImage} />}
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={title}
              subheader={subheader}
            />
            <StyledBox>
              <ReactPlayer
                className="react-player"
                url={link}
                controls
                playing
              />
            </StyledBox>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {description}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Box>
      </Container>
    </Box>
  )
}

export default VideoPlayer

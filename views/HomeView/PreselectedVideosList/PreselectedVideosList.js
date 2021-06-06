import { useContext, useState, useEffect, Fragment } from 'react'
import Box from '@material-ui/core/Box'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'
import isEmpty from 'lodash/isEmpty'
import HomeContext from 'views/HomeView/HomeContext'
import Cards from 'components/Cards'

const PreselectedVideosList = () => {
  const { nodes } = useContext(HomeContext)

  return (
    <Box padding="1rem" overflow="auto">
      <Box margin="1rem auto">
        <Typography variant="h4">
          {isEmpty(nodes) ? 'Empty list' : 'Recently added'}
        </Typography>
      </Box>
      <Cards data={nodes} />
    </Box>
  )
}

export default PreselectedVideosList

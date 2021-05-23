import { useContext, useState, useMemo, useCallback } from 'react'
import Layout from 'components/Layout'
import VideoPlayer from 'components/VideoPlayer'
import Form from 'components/Form'
import HomeContext from './HomeContext'
import useToggle from 'hooks/useToggle'

const HomeView = () => {
  const [isFormVisible, setIsFormVisible] = useToggle()

  const onHandleClickToggleForm = useCallback(
    () => setIsFormVisible(),
    [isFormVisible],
  )

  const API = useMemo(
    () => ({ onHandleClickToggleForm, isFormVisible }),
    [isFormVisible],
  )

  return (
    <HomeContext.Provider value={API}>
      <Layout>{isFormVisible ? <Form /> : <VideoPlayer />}</Layout>
    </HomeContext.Provider>
  )
}

export default HomeView

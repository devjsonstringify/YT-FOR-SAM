import { useContext, useState, useMemo, useCallback, useRef } from 'react'
import Layout from 'components/Layout'
import VideoPlayer from 'components/VideoPlayer'
import Form from 'components/Form'
import HomeContext from './HomeContext'
import useToggle from 'hooks/useToggle'
import Introduction from './Introduction/Introduction'

const HomeView = () => {
  const showOnlyOnceRef = useRef(false)
  const [isFormVisible, setIsFormVisible] = useToggle()
  const [isIntroduction, setIsIntroduction] = useState(true)
  const [videoPlayerState, setVideoPlayerState] = useState({
    link: '/assets/intro.mp4',
    name: '#intro',
  })

  const onHandleClickToggleForm = useCallback(() => {
    setIsFormVisible()
    showOnlyOnceRef.current = true
  }, [isFormVisible])

  const OnHandleSetPlayerVideo = ({ link, name }) => {
    setVideoPlayerState((prev) => ({
      ...prev,
      link,
      name,
    }))
  }

  const API = useMemo(
    () => ({
      onHandleClickToggleForm,
      OnHandleSetPlayerVideo,
      isFormVisible,
      videoPlayerState,
      showOnlyOnceRef,
    }),
    [isFormVisible, videoPlayerState],
  )

  return (
    <HomeContext.Provider value={API}>
      <Layout>
        {isFormVisible && <Form />}
        {!isFormVisible && isIntroduction && <Introduction />}
      </Layout>
    </HomeContext.Provider>
  )
}

export default HomeView

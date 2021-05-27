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
    description:
      'Credit: video is from https://pixabay.com/videos/puppies-dogs-friendship-joy-69168/',
  })

  const onHandleClickToggleForm = useCallback(() => {
    setIsFormVisible()
    showOnlyOnceRef.current = true
  }, [isFormVisible])

  const OnHandleSetPlayerVideo = ({ link, name, description }) => {
    setVideoPlayerState((prev) => ({
      ...prev,
      link,
      name,
      description,
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

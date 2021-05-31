import {
  useContext,
  useState,
  useMemo,
  useCallback,
  useRef,
  useEffect,
} from 'react'
import Layout from 'components/Layout'
import VideoPlayer from 'components/VideoPlayer'
import Form from 'components/Form'
import HomeContext from './HomeContext'
import useToggle from 'hooks/useToggle'
import useLocalStorage from 'hooks/useLocalStorage'
import Introduction from './Introduction/Introduction'

const HomeView = () => {
  const [nodes, setNodes] = useLocalStorage('nodes', [])
  const showOnlyOnceRef = useRef(false)
  const [isFormVisible, setIsFormVisible] = useToggle()
  const [isIntroduction, setIsIntroduction] = useState(true)
  const [videoPlayerState, setVideoPlayerState] = useState({
    id: '979427ae-f5c6-483e-97ed-cc28fd99062a',
    link: '/assets/intro.mp4',
    name: '#intro',
    description:
      'Credit: video is from https://pixabay.com/videos/puppies-dogs-friendship-joy-69168/',
  })

  useEffect(() => {
    setNodes(nodes)
  }, [setNodes, setNodes])

  const onHandleClickToggleForm = useCallback(() => {
    setIsFormVisible()
    showOnlyOnceRef.current = true
  }, [isFormVisible])

  const OnHandleSetPlayerVideo = ({ id, link, name, description }) => {
    setVideoPlayerState((prev) => ({
      ...prev,
      id,
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
      nodes,
      setNodes,
    }),
    [isFormVisible, videoPlayerState, nodes],
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

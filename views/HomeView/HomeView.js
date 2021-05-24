import { useContext, useState, useMemo, useCallback } from 'react'
import Layout from 'components/Layout'
import VideoPlayer from 'components/VideoPlayer'
import Form from 'components/Form'
import HomeContext from './HomeContext'
import useToggle from 'hooks/useToggle'
import Introduction from './Introduction/Introduction'

const HomeView = () => {
  const [isFormVisible, setIsFormVisible] = useToggle()
  const [isIntroduction, setIsIntroduction] = useState(true)

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
      <Layout>
        {isFormVisible && <Form />}
        {!isFormVisible && isIntroduction && <Introduction />}
      </Layout>
    </HomeContext.Provider>
  )
}

export default HomeView

import Head from 'next/head'
import Box from '@material-ui/core/Box'
import HomeView from 'views/HomeView'

const Home = () => {
  return (
    <>
      <Head>
        <title>save-and-watch-videos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeView />
    </>
  )
}

export default Home

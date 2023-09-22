import Head from 'next/head'

import NavBar from '../navbar'
import { Box, Container, Image } from '@chakra-ui/react'
import Footer from '../footer'
/*import VoxelDogLoader from '../voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})
*/
const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Pentester & Social Engineer" />
        <meta name="author" content="Tahiri Dikovec" />
        <meta name="author" content="Tahiri Dikovec" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon-v2.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Tahiri Dikovec" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tahiridikovec" />
        <meta name="twitter:creator" content="@tahiridikovec" />
        <meta name="twitter:image" content="https://tahiridikovec.com/card.png" />
        <meta property="og:site_name" content="Tahiri Dikovec" />
        <meta name="og:title" content="Tahiri Dikovec" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://tahiridikovec.com/card.png" />
        <title>Tahiri Dikovec - Pentester & Social Engineer</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>

        <Image alt="Tahiri Dikovec" src="/images/tahiridikovec-emoji-laptop.png" />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main

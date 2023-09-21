//import ProfileImage from './index'
import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import {
  Box,
  useColorModeValue,
} from '@chakra-ui/react'

import thunbEslabonDebil from '../public/images/posts/1/el-eslabon-debil-de-tu-empresa.png'
import thunbCyberAttackBusiness from '../public/images/posts/2/ciberataque-contra-una-empresa.png'
import thunbSocialEngineering from '../public/images/posts/3/mi-definicion-ingenieria-social.png'
import thunbSocialEngineeringOffice from '../public/images/posts/4/ingenieria-social-oficina.png'

/*
import thunbVirusDetected from '../public/images/blogs/virus-detected-eyecatch.png'
import thumbWalknote from '../public/images/works/walknote_eyecatch.png'
import thumbFourPainters from '../public/images/works/the-four-painters_eyecatch.jpg'
import thumbMenkiki from '../public/images/works/menkiki_eyecatch.png'
import thumbMargelo from '../public/images/works/margelo_eyecatch.png'
import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
import thumbStyly from '../public/images/works/styly_eyecatch.png'
import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'
import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
import thumbAmembo from '../public/images/works/amembo_eyecatch.png'
*/

const Works = () => (
  <Layout title="Blog">
    <Container>
    <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        ¡Bienvenid@ a mi blog! Espero que disfrutes leyendo mis artículos.
      </Box>
      <Heading as="h3" fontSize={20} mb={4}>
        Mis artículos
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="los-ataques-presenciales-y-no-presenciales-en-la-ingenieria-social" title="Los Ataques Presenciales y No Presenciales en la Ing. Social" thumbnail={thunbSocialEngineeringOffice}></WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="mi-definicion-sobre-el-arte-y-la-ciencia-de-la-ingenieria-social" title="Mi definición sobre el arte y la ciencia de la Ingeniería Social" thumbnail={thunbSocialEngineering}></WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="fases-de-un-ciberataque-contra-el-eslabon-mas-debil-de-tu-empresa" title="Fases de un ciberataque contra el eslabón más débil de tu empresa" thumbnail={thunbCyberAttackBusiness}></WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="encuentra-al-eslabon-mas-debil-de-tu-empresa-y-fortalecelo" title="Encuentra al eslabón más débil de tu empresa y fortalécelo" thumbnail={thunbEslabonDebil}></WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />
      </Section>

    </Container>
  </Layout>
)

export default Works
export { getStaticProps } from '../components/chakra'

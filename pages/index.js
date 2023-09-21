import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Paragraph, Paragraph2 } from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

/*
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
*/

import thunbEslabonDebil from '../public/images/posts/1/el-eslabon-debil-de-tu-empresa.png'
import thunbCyberAttackBusiness from '../public/images/posts/2/ciberataque-contra-una-empresa.png'
import thunbSocialEngineering from '../public/images/posts/3/mi-definicion-ingenieria-social.png'
import thunb4 from '../public/images/posts/4/ingenieria-social-oficina.png'

import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hola, mi nombre es Tahiri Dikovec, soy Pentester y Social Engineer!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Tahiri Dikovec
          </Heading>
          <p>Pentester & Social Engineer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/tahiridikovec-profile.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Sobre mí
        </Heading>
        <Paragraph>
        Soy un profesional con 15 años de experiencia en el campo de la ciberseguridad.
        Me he especializado en Pentesting e Ingeniería Social. A lo largo de mi carrera,
        he liderado proyectos de pentesting y diseñado estrategias de ingeniería social
        para una variedad de empresas, abarcando desde emergentes startups hasta reconocidas
        corporaciones multinacionales.
        </Paragraph>
        <br />
        <Paragraph2>
        Mi misión primordial es fortalecer la defensa de estas organizaciones frente a
        amenazas cibernéticas, asegurando la integridad y confidencialidad de sus sistemas y datos.
        </Paragraph2>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
        Certificados
        </Heading>
        <BioSection>
          <BioYear>⦿</BioYear>
          <Link href="https://verified.elearnsecurity.com/certificates/d4e7bc90-846f-4d22-967f-40dd837f3dfa" target="_blank">eJPT | eLearnSecurity Junior Penetration Tester</Link>
        </BioSection>
        <BioSection>
          <BioYear>⦿</BioYear>
          LCSPC | Lead Cybersecurity Professional Certificate
        </BioSection>
        <BioSection>
          <BioYear>⦿</BioYear>
          CPTE | Certified Penetration Testing Engineer
        </BioSection>
        <BioSection>
          <BioYear>⦿</BioYear>
          CPTC | Certified Penetration Testing Consultant
        </BioSection>
        <BioSection>
          <BioYear>⦿</BioYear>
          CSWAE | Certified Secure Web Application Engineer
        </BioSection>
        <BioSection>
          <BioYear>⦿</BioYear>
          API Security Architect
        </BioSection>
        <BioSection>
          <BioYear>⦿</BioYear>
          <Link href="https://learning.first.org/certificates/e1b71cbc30e34e1fbb0308048c2946db" target="_blank">FIRST CVSSv3.1 Certificate</Link>
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Redes sociales
        </Heading>
        <List>
          <ListItem>
            <Link href="https://www.linkedin.com/in/tahiridikovec/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @tahiridikovec
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/tahiridikovec/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @tahiridikovec
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/TahiriDikovec" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @TahiriDikovec
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/TahiriDikovec" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @TahiriDikovec
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Mis últimos artículos
        </Heading>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="#"
            title="Los Ataques Presenciales y No Presenciales en la Ingeniería Social"
            thumbnail={thunb4}
          >
          </GridItem>
          <GridItem
            href="#"
            title="Mi definición sobre el arte y la ciencia de la Ingeniería Social"
            thumbnail={thunbSocialEngineering}
          >
          </GridItem>
        </SimpleGrid>
        <br/>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="#"
            title="Fases de un ciberataque contra el eslabón más débil de tu empresa"
            thumbnail={thunbCyberAttackBusiness}
          >
          </GridItem>
          <GridItem
            href="#"
            title="Encuentra al eslabón más débil de tu empresa y fortalécelo"
            thumbnail={thunbEslabonDebil}
          >
          </GridItem>
        </SimpleGrid>
        <Box align="center" my={6}>
          <NextLink href="/blog" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Mis artículos
            </Button>
          </NextLink>
        </Box>
      </Section>

    </Container>
  </Layout>
)

export default Home
export { getStaticProps } from '../components/chakra'

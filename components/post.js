
import { Heading, Box, Image, Badge } from '@chakra-ui/react'

export const Title = ({ children }) => (
  <Box 
  textAlign="center">
    <Heading display="inline-block" as="h1" fontSize={24} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const WorkImage = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const PostImage = ({ src, alt }) => (
  <Image borderRadius="xl" w="full" src={src} alt={alt} mb={4} />
)

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)

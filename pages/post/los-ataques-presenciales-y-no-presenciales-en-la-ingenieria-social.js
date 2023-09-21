import {
    Container
    /*
    ,
    Link,
    List,
    ListItem,
    AspectRatio
    */
  } from '@chakra-ui/react'
  //import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, /*WorkImage,*/ PostImage/*, Meta*/ } from '../../components/post'
  import { P, Paragraph2, Bold } from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  import {
    Box,
    useColorModeValue,
    Heading,
  } from '@chakra-ui/react'
  
  const Work = () => (
    <Layout title="Los Ataques Presenciales y No Presenciales en la Ingeniería Social">
      <Container>
      <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
        ¿Qué son los ataques presenciales y no presenciales en la ingeniería social?
      </Box>
      <Title>
      Los Ataques Presenciales y No Presenciales en la Ingeniería Social
      </Title>
      <PostImage alt="Ingeniería Social en la Oficina" src="/images/posts/4/ingenieria-social-oficina.png" />
    <P>
    ¡Hola, estimado amigo lector! Dado que ya te introduje al mundo de la ingeniería social en el artículo &quot;Mi definición sobre el arte y la ciencia de la Ingeniería Social&quot;, es hora de explorar más detalladamente sus dos principales modalidades: los ataques presenciales y los no presenciales. Ambos tienen sus propias tácticas y desafíos. Si aún no has leído el artículo anterior, te recomiendo que le eches un vistazo aquí para tener una base sólida. Pero si ya estás al día, acompáñame en este viaje para entender cómo funcionan y cómo protegerte de ellos. ¡Vamos allá!
    </P>
    <br/>
    <Box flexGrow={1}>
        <Heading as="h3" variant="page-title" fontSize={18}>
        Ataques Presenciales de Ingeniería Social
        </Heading>
    </Box>
    <br/>
    <PostImage alt="Ingeniería Social en la oficina" src="/images/posts/4/ingenieria-social-presencial.png" />
    <Paragraph2>
    Los ataques presenciales de ingeniería social se caracterizan por la interacción directa entre el ingeniero social y su objetivo. En este escenario, el ingeniero social se encuentra físicamente presente y utiliza diversas técnicas para manipular o persuadir a su objetivo en tiempo real. Esta modalidad se asemeja a un juego de roles en el que el ingeniero social adopta una identidad o situación específica, conocida como &quot;pretexting&quot;, para acercarse y obtener la información deseada. La clave aquí es la habilidad del ingeniero para leer y responder al lenguaje corporal, establecer confianza rápidamente, empatizar y ser persuasivo. Es un juego de percepción y adaptabilidad, donde el ingeniero social debe estar siempre un paso adelante para lograr su objetivo.
    </Paragraph2>
    <br/>
    <Box flexGrow={1}>
        <Heading as="h3" variant="page-title" fontSize={18}>
        Ataques No Presenciales de Ingeniería Social
        </Heading>
    </Box>
    <br/>
    <PostImage alt="Ingeniería Social con Vishing" src="/images/posts/4/ingenieria-social-no-presencial.png" />
    <Paragraph2>
    En contraste con los ataques presenciales, los ataques no presenciales de ingeniería social no requieren la presencia física del ingeniero social. En lugar de eso, se aprovechan de medios de comunicación a distancia, como llamadas telefónicas, correos electrónicos o mensajes en redes sociales. Estas técnicas incluyen:
    </Paragraph2>
    <br/>
    <Paragraph2>
    <Bold>1. Técnicas de ataques por voz (Vishing):</Bold> Utilizando solo la voz y, en ocasiones, sonidos de fondo estratégicamente seleccionados para crear un ambiente o escenario específico, el ingeniero social intenta manipular o persuadir al objetivo a través de una llamada telefónica. La elección de palabras, el tono, la cadencia y el uso adecuado de esos sonidos de fondo son esenciales para que esta técnica sea efectiva.
    </Paragraph2>
    <br/>
    <Paragraph2>
    <Bold>2. Técnicas de ataques por medios digitales:</Bold> Aquí, el ingeniero social utiliza plataformas digitales, como correos electrónicos, redes sociales o chats, para engañar al objetivo. Un correo que parece legítimo o un mensaje urgente en una red social puede ser suficiente para obtener la información deseada.
    </Paragraph2>
    <br/>
    <Paragraph2>
    <Bold>3. Técnicas de ataques por medios físicos:</Bold> Aunque menos común en la era digital, esta técnica implica el uso de cartas, paquetes o folletos para manipular al objetivo. Puede ser un regalo inesperado o una carta que parece oficial, pero que tiene como objetivo engañar al receptor.
    </Paragraph2>
    <br/>
    <Box flexGrow={1}>
        <Heading as="h3" variant="page-title" fontSize={18}>
        Anécdotas de Ingeniería Social Presencial: El &quot;Técnico&quot; Inesperado
        </Heading>
    </Box>
    <br/>
    <PostImage alt="Falso técnico de telecomunicaciones" src="/images/posts/4/falso-tecnico-telecomunicaciones.png" />
    <Paragraph2>
    Hace unos años, en una empresa de renombre, el personal de la recepción recibió a un individuo vestido con un uniforme de técnico de telecomunicaciones. Alegó que había sido enviado para solucionar un problema con la línea telefónica del edificio. Con una identificación colgando de su cuello y una actitud confiada, fue dirigido hacia el cuarto de servidores. Una vez dentro, no reparó ninguna línea telefónica. En su lugar, instaló un dispositivo que recopilaba datos transmitidos a través de la red de la empresa. No fue hasta una revisión de seguridad rutinaria, días después, que se descubrió el dispositivo. Esta historia sirve como recordatorio de la importancia de verificar siempre las credenciales y de tener protocolos de seguridad estrictos, incluso para las visitas aparentemente rutinarias.
    </Paragraph2>
    <br/>
    <Box flexGrow={1}>
        <Heading as="h3" variant="page-title" fontSize={18}>
        Anécdotas de Ingeniería Social No Presencial: El Correo Falso del CEO
        </Heading>
    </Box>
    <br/>
    <PostImage alt="CEO Falso" src="/images/posts/4/ceo-falso.png" />
    <Paragraph2>
    En una pequeña startup, el contable recibió un correo electrónico urgente que parecía ser del CEO. El mensaje decía que necesitaba una transferencia inmediata de fondos para cerrar un trato confidencial y que no podía hablar de ello por teléfono debido a la naturaleza sensible del acuerdo. El contable, queriendo ser proactivo y ayudar, realizó la transferencia sin dudarlo. Sin embargo, más tarde ese día, al encontrarse con el CEO en persona, descubrió que el correo electrónico era falso. Un cibercriminal había investigado a la empresa y, aunque replicó la firma de correo electrónico del CEO, utilizó un dominio de correo que era sorprendentemente similar al original, con una pequeña variación que pasó desapercibida a primera vista. Esta táctica, conocida como &quot;spoofing&quot; de dominio, se aprovechó de la confianza y la urgencia para estafar a la empresa. Esta anécdota destaca la importancia de siempre verificar las solicitudes inusuales o urgentes y de prestar atención a los detalles, especialmente cuando involucran dinero o información confidencial.
    </Paragraph2>
    <br/>
    <Box flexGrow={1}>
        <Heading as="h3" variant="page-title" fontSize={18}>
        Conclusión
        </Heading>
    </Box>
    <br/>
    <Paragraph2>
    La ingeniería social, con sus múltiples facetas y técnicas, representa un desafío persistente y en constante evolución en la actualidad. Desde la interacción directa en ataques presenciales hasta la manipulación remota en ataques no presenciales, los ingenieros sociales emplean una variedad de métodos para engañar y manipular. Las anécdotas y casos de estudio que hemos explorado subrayan la astucia y adaptabilidad de estos actores maliciosos, y la necesidad de estar siempre alerta.
    </Paragraph2>
    <br/>
    <Paragraph2>
    Sin embargo, con la conciencia adecuada, la educación y las herramientas, tanto individuos como organizaciones pueden fortalecerse contra estos ataques. Es esencial que todos adoptemos una postura proactiva, cuestionando lo inusual, verificando la información y manteniendo una actitud escéptica en situaciones que parezcan sospechosas. La seguridad no solo se trata de la tecnología que empleamos, sino también de cómo nos educamos y preparamos para enfrentar estos desafíos.
    </Paragraph2>
    <br/>
    <Paragraph2>
    En un mundo donde la información es más valiosa que nunca, nuestra capacidad para discernir, cuestionar y proteger nuestra privacidad y datos se convierte en nuestra primera línea de defensa. La ingeniería social nos recuerda que, más allá de la tecnología, las emociones y la psicología humana son campos de batalla en la ciberseguridad. Mantente seguro, informado y siempre alerta.
    </Paragraph2>
    <br/>
  <Box
      borderRadius="lg"
      mb={6}
      p={3}
      textAlign="center"
      bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      css={{ backdropFilter: 'blur(10px)' }}
      >
      ¿Te ha sido útil esta información? ¡Comparte el artículo con tus amigos y colegas! Juntos, ayudaremos a las personas a mantenerse seguras en internet.
  </Box>
  </Container>
  </Layout>
  )
  
  export default Work
  export { getStaticProps } from '../../components/chakra'
  
  
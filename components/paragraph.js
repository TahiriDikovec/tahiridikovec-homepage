import styled from '@emotion/styled'

const Paragraph = styled.p`
  text-align: justify;
  text-indent: 1em;
  hyphens: auto;
`

const P = styled.p`
  text-align: justify;
  text-indent: 1em;
  hyphens: auto;
`

const Paragraph2 = styled.p`
  text-align: justify;
  hyphens: auto;
`
/*
const Bold = styled.p`
  text-align: justify;
  hyphens: auto;
  font-weight: bold;
`
*/
const Bold = styled.span`
  font-weight: bold;
`;

export { P, Paragraph, Paragraph2, Bold }
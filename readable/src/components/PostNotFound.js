import React from 'react';
import { Box, Heading, Paragraph, Anchor } from 'grommet';

function PostNotFoundComponent() {
  return (
    <Box flex fill align='center'>
      <Heading level='3'>O post não foi encontrado! :(</Heading>

      <Paragraph>Desculpe, o post que você está procurando não existe!</Paragraph>

      <Anchor href='/'>Clique aqui para ver os posts existentes! ;)</Anchor>
    </Box>
  )
}

export default PostNotFoundComponent;

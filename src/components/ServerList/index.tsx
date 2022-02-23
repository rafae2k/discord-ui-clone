import React from 'react';

import ServerButton from '../ServerButton';
import { Container, Separator } from './styles';

function ServerList() {
  return (
    <Container>
      <ServerButton isHome />

      <Separator />

      <ServerButton hasNotifications />
      <ServerButton mentions={1020} />
      <ServerButton />
      <ServerButton mentions={1} />
    </Container>
  );
}

export default ServerList;

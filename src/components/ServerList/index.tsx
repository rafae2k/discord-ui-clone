import ServerButton from '../ServerButton';
import Tooltip from '../Tooltip';

import { Container, Separator } from './styles';

function ServerList() {
  return (
    <Container>
      <Tooltip name='Topics' icon={<ServerButton isHome />} />

      <Separator />

      <Tooltip
        name='Servidor do Rafo'
        icon={<ServerButton hasNotifications />}
        side={'left'}
      />

      <Tooltip
        name='Servidor do Rafo'
        icon={<ServerButton hasNotifications />}
        side={'right'}
      />

      <ServerButton mentions={1020} />
      <ServerButton />
      <ServerButton mentions={1} />
    </Container>
  );
}

export default ServerList;

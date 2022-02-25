import ServerButton from '../ServerButton';
import Tooltip from '../Tooltip';

import { Container, Separator } from './styles';

function ServerList() {
  return (
    <Container>
      <ServerButton name='Discord' isHome />

      <Separator />

      <ServerButton name='Servidor do Rafo' hasNotifications />
      <ServerButton name='Servidor do Rafo' hasNotifications />
      <ServerButton name='Servidor do Rafo' mentions={1020} />
      <ServerButton name='Servidor do Rafo'/>
      <ServerButton name='Servidor do Rafo' mentions={1} />

    </Container>
  );
}

export default ServerList;

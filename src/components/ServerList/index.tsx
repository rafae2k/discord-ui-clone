import ServerButton from '../ServerButton';
import Tooltip from '../Tooltip';

import { Container, Separator } from './styles';

function ServerList() {
  return (
    <Container>
      <Tooltip name='Discord' side='right' offset={30} icon={<ServerButton isHome />} />

      <Separator />

      <Tooltip name='Servidor do Rafo' side='right' offset={30}  icon={<ServerButton hasNotifications />} />
      <Tooltip name='Servidor do Rafo' side='right' offset={30}  icon={<ServerButton mentions={1020} />} />
      <Tooltip name='Servidor do Rafo' side='right' offset={30}  icon={<ServerButton mentions={1} />} />
      <Tooltip name='Servidor do Rafo' side='right' offset={30}  icon={<ServerButton hasNotifications mentions={1} />} />

    </Container>
  );
}

export default ServerList;

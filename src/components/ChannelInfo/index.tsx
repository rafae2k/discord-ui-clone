import { Input } from 'styled-icons/material-twotone';
import ChannelToolbar from '../ChannelToolbar';

import { Container, Header, ChannelIcon, Title } from './styles';

function ChannelInfo() {
  return (
    <Container>
      <Header>
        <ChannelIcon />
        <Title>Canal do Rafo</Title>
      </Header>
      <ChannelToolbar />
    </Container>
  );
}

export default ChannelInfo;

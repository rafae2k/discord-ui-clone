import { Grid } from './styles';

import * as TooltipPrimitive from '@radix-ui/react-tooltip';

import ServerList from '../ServerList';
import ServerName from '../ServerName';
import ChannelInfo from '../ChannelInfo';

const Provider = TooltipPrimitive.Provider;

function Layout() {
  return (
    <Provider delayDuration={200} skipDelayDuration={500}>
      <Grid>
        <ServerList />
        <ServerName />
        <ChannelInfo />
      </Grid>
    </Provider>
  );
}

export default Layout;

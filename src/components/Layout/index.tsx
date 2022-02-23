import React, { ReactNode } from 'react';

import { Grid } from './styles';

import ServerList from '../ServerList';
import ServerName from '../ServerName';

function Layout() {
  return (
    <Grid>
      <ServerList />
      <ServerName />
    </Grid>
  );
}

export default Layout;

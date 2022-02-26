import React from 'react';

import { Button } from './styles';

import Discord from '../../assets/Discord.svg';

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
}

const ServerButton = React.forwardRef<HTMLButtonElement, Props>(({
  selected,
  isHome,
  hasNotifications,
  mentions,
  ...props
}, ref) => (
  <Button
    isHome={isHome}
    hasNotifications={hasNotifications}
    mentions={mentions}
    className={selected ? 'active' : ''}
    ref={ref}
    {...props}
  >
    { isHome && <img src={Discord} alt="Server logo" /> }
  </Button>
));

export default ServerButton;
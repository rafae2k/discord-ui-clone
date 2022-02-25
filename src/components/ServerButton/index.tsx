import React from 'react';

import { Button } from './styles';
import {
  Provider,
  TooltipRoot,
  TooltipTrigger,
  TooltipContent,
  StyledArrow,
} from '../Tooltip/styles';

import Discord from '../../assets/Discord.svg';

export interface Props {
  name: string;
  side?: 'bottom' | 'left' | 'right' | 'top' | undefined;
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
}

const ServerButton: React.FC<Props> = ({ name, side , selected,
isHome,
hasNotifications,
mentions }) => {
  return (
    <Provider delayDuration={200} skipDelayDuration={500}>
      <TooltipRoot>
        <TooltipTrigger asChild>
          <Button
            isHome={isHome}
            hasNotifications={hasNotifications}
            mentions={mentions}
            className={selected ? 'active' : ''}
          >
            { isHome && <img src={Discord} alt="Server logo" /> }
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right" sideOffset={30}>
          <StyledArrow />
          {name}  
        </TooltipContent>
      </TooltipRoot>
    </Provider>
  );
};

export default ServerButton;
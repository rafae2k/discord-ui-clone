import { ReactNode } from 'react';

import {
  Provider,
  TooltipRoot,
  TooltipTrigger,
  TooltipContent,
  StyledArrow,
} from './styles';

export interface Props {
  name: string;
  icon: ReactNode;
  side?: 'bottom' | 'left' | 'right' | 'top' | undefined;
}

const Tooltip: React.FC<Props> = ({ name, icon, side = 'bottom' }) => {
  return (
    <Provider delayDuration={200} skipDelayDuration={500}>
      <TooltipRoot>
        <TooltipTrigger asChild>{icon}</TooltipTrigger>
        <TooltipContent side={side} sideOffset={5}>
          <StyledArrow />
          {name}
        </TooltipContent>
      </TooltipRoot>
    </Provider>
  );
};

export default Tooltip;

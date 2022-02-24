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
}

const Tooltip: React.FC<Props> = ({ name, icon }) => {
  return (
    <Provider delayDuration={200} skipDelayDuration={500}>
      <TooltipRoot>
        <TooltipTrigger asChild>{icon}</TooltipTrigger>
        <TooltipContent sideOffset={5}>
          {name}
          <StyledArrow />
        </TooltipContent>
      </TooltipRoot>
    </Provider>
  );
};

export default Tooltip;

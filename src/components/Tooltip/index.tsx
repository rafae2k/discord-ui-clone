import { ReactNode } from 'react';

import {
  TooltipRoot,
  TooltipTrigger,
  TooltipContent,
  StyledArrow,
} from './styles';

export interface Props {
  name: string;
  icon: ReactNode;
  side?: 'bottom' | 'left' | 'right' | 'top' | undefined;
  offset?:number
}

const Tooltip: React.FC<Props> = ({ name, icon, side = 'bottom', offset = 5 }) => {
  return (
    <TooltipRoot >
      <TooltipTrigger asChild>{icon}</TooltipTrigger>
        <TooltipContent side={side} sideOffset={offset}>
          <StyledArrow />
          {name}
        </TooltipContent>
    </TooltipRoot>
  );
};

export default Tooltip;

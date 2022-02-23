import styled from 'styled-components';

import { ChevronDown } from '@styled-icons/boxicons-regular';


export const Container = styled.div`
  grid-area: SN;

  background-color: var(--secondary);

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.6rem 1.4rem 1.4rem 3.8rem;

  box-shadow: rgba(0, 0, 0, 0.2) 0 0.1rem 0 0;

  cursor: pointer;

  transition: all 0.2s;

  &:hover {
    background-color: #4f545c;
  }

`;

export const Title = styled.h1`
  font-size: 1.6rem;

  color: var(--white);
  font-weight: bold;
`;

export const ExpandIcon = styled(ChevronDown)`
  width: 2.8rem;
  height: 2.8rem;

  color: var(--white);

  cursor: pointer;
`;

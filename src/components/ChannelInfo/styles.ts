import styled from 'styled-components';

import { Hash } from '@styled-icons/boxicons-regular/Hash';


export const Container = styled.div`
  grid-area: CI;

  background-color: var(--primary);

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.6rem 1.4rem 1.4rem 3.8rem;

  box-shadow: rgba(0, 0, 0, 0.2) 0 0.1rem 0 0;
`

export const Header = styled.div`
  display: flex;
  align-items: center;

  justify-content: flex-start;
`;

export const ChannelIcon = styled(Hash)`
  width: 2.8rem;
  height: 2.8rem;

  padding-right: 0.8rem;

  color: var(--white);
  opacity: 50%
`
export const Title = styled.h2`
  font-size: 1.6rem;

  color: var(--white);
  font-weight: bold;
`

import styled from 'styled-components';

import { Props } from '.';

export const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: 4.8rem;
  height: 4.8rem;

  margin-bottom: 0.8rem;

  background-color: ${(props) => (props.isHome ? 'var(--logo)' : 'var(--primary)')};

  position: relative;
  cursor: pointer;

  border-radius: ${(props) => (props.isHome ? '1.6rem' : '50%')};
  transition: border-radius .2s ease-out;

  > img {
    width: 2.4rem;
    height: 2.4rem;
  }

  :hover { 
    border-radius: 1.6rem;
    background-color: var(--logo)
  }

  &::before {
    content: '';

    display: ${props => props.hasNotifications ? 'inline' : 'none'};
    background-color: var(--white);

    width: .9rem;
    height: .9rem;

    position: absolute;
    left: -1.7rem;
    top: calc(50% - .45rem);

    border-radius: 50%;

    transition: height 200ms ease-in-out;

    &:hover{
      &::before {
          content: '';
          height: 2rem;
        }
    }
  }


  &::after {
    content: '${props => props.mentions && ((props.mentions > 99) ? ('+99') : (props.mentions))}';
    display: ${props => props.mentions && props.mentions > 0 ? 'inline' : 'none'};
    
    background-color: var(--notification);

    width: auto;
    height: 1.6rem;

    padding: 0 .4rem;

    position: absolute;
    top: calc(50% + .5rem);
    right: -.4rem;

    font-size: 1.3rem;
    color: var(--white);
    text-align: right;

    border: .4rem solid var(--quaternary);
    border-radius: 1.2rem;
  }
`;

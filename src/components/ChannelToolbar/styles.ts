import styled from 'styled-components';

import { Bell } from '@styled-icons/boxicons-solid/Bell';
import { PinAngleFill } from '@styled-icons/bootstrap/PinAngleFill';
import { ListPlus } from '@styled-icons/boxicons-regular/ListPlus';
import { UserFriends } from '@styled-icons/fa-solid/UserFriends';
import { Search as SearchIcon1 } from '@styled-icons/boxicons-regular/Search';
import { Inbox as InboxIcon } from '@styled-icons/boxicons-solid/Inbox';
import { HelpCircle } from '@styled-icons/boxicons-solid/HelpCircle';

export const Toolbar = styled.div`
  display: flex;
  align-items: center;

  justify-content: flex-end;

  gap: 1rem;
`;

export const Topics = styled(ListPlus)`
  width: 2.8rem;
  height: 2.8rem;

  color: var(--white);
  opacity: 70%;

  cursor: pointer;

  transition: opacity 0.2s ease-in;

  &:hover {
    opacity: 100%;
  }
`;

export const Notifications = styled(Bell)`
  width: 2rem;
  height: 2rem;

  color: var(--white);
  opacity: 70%;

  cursor: pointer;

  transition: opacity 0.2s ease-in;

  &:hover {
    opacity: 100%;
  }
`;

export const FixedMessages = styled(PinAngleFill)`
  width: 2rem;
  height: 2rem;

  color: var(--white);
  opacity: 70%;

  cursor: pointer;

  transition: opacity 0.2s ease-in;

  &:hover {
    opacity: 100%;
  }
`;

export const HideMembersList = styled(UserFriends)`
  width: 2.2rem;
  height: 2.2rem;

  color: var(--white);
  opacity: 70%;

  cursor: pointer;

  transition: opacity 0.2s ease-in;

  &:hover {
    opacity: 100%;
  }
`;

export const SearchWrapper = styled.div`
  width: 14.4rem;
  height: 2.4rem;
`;

export const SearchIcon = styled(SearchIcon1)`
  width: 1.2rem;
  height: 1.2rem;

  color: var(--white);
  opacity: 70%;
`;

export const Input = styled.input`
  display: flex;
  position: relative;

  width: 100%;
  height: 100%;

  padding: 1rem;

  color: var(--white);

  background-color: var(--tertiary);
  border-radius: 0.4rem;

  position: relative;

  transition: width 0.2s ease-in-out;

  &::placeholder {
    color: var(--white);
    opacity: 70%;
  }

  ~ svg {
    position: relative;
    top: -1.7rem;
    left: 12.5rem;
    transition: 180 ease-in-out;
  }

  /* &:focus {
    width: 20rem;
  } */
`;

export const Inbox = styled(InboxIcon)`
  width: 2rem;
  height: 2rem;

  color: var(--white);
  opacity: 70%;

  cursor: pointer;

  transition: opacity 0.2s ease-in;

  &:hover {
    opacity: 100%;
  }
`;

export const Help = styled(HelpCircle)`
  width: 2rem;
  height: 2rem;

  color: var(--white);
  opacity: 70%;

  cursor: pointer;

  transition: opacity 0.2s ease-in;

  &:hover {
    opacity: 100%;
  }
`;

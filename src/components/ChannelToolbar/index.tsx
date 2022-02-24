import { ReactNode } from 'react';

import {
  Toolbar,
  Notifications,
  FixedMessages,
  Topics,
  HideMembersList,
  SearchWrapper,
  SearchIcon,
  Input,
  Inbox,
  Help,
} from './styles';

function ChannelToolbar() {
  return (
    <Toolbar>
      <Topics />
      <Notifications />
      <FixedMessages />
      <HideMembersList />
      <SearchWrapper>
        <Input placeholder="Search"/>
        <SearchIcon />
      </SearchWrapper>
      <Inbox />
      <Help />
    </Toolbar>
  );
}

export default ChannelToolbar;

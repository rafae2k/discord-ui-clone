import {
  Toolbar,
  Topics,
  Notifications,
  FixedMessages,
  HideMembersList,
  SearchWrapper,
  SearchIcon,
  Input,
  Inbox,
  Help,
} from './styles';

import Tooltip from '../Tooltip';

function ChannelToolbar() {
  return (
    <Toolbar>
      <Tooltip name='Topics' icon={<Topics />} />
      <Tooltip name='Notifications' icon={<Notifications />} />
      <Tooltip name='Fixed Messages' icon={<FixedMessages />} />
      <Tooltip name='Hide Member List' icon={<HideMembersList />} />
      <SearchWrapper>
        <Input placeholder='Search' />
        <SearchIcon />
      </SearchWrapper>
      <Tooltip name='Inbox' icon={<Inbox />} />
      <Tooltip name='Need help?' icon={<Help />} />
    </Toolbar>
  );
}

export default ChannelToolbar;

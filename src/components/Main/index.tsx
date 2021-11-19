import React from 'react';

import { MdVerified } from 'react-icons/md';
import ProfilePage from '../ProfilePage';
import { Container, Header, BackIcon, ProfileInfo, BottomMenu, HomeIcon, SearchIcon, BellIcon, EmailIcon } from './styles';

export const ProfileName = ({ name }: { name?: string }): any => {
  return (
    <strong>
      {name}
      <MdVerified className="verifiedIcon" />
    </strong>
  );
};

ProfileName.defaultProps = {
  name: 'Twitter',
};

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button type="button">
          <BackIcon />
        </button>

        <ProfileInfo>
          <ProfileName name="Twitter" />
          <span>14.8K Tweets</span>
        </ProfileInfo>
      </Header>

      <ProfilePage />

      <BottomMenu>
        <HomeIcon className="active" />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
    </Container>
  );
};

export default Main;

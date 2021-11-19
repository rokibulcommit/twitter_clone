import React from 'react';
import { MdVerified } from 'react-icons/md';

import Feed from '../Feed';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton, LinkIcon, CalendarIcon } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Edit Profile</EditButton>

        <h1 style={{ position: 'relative' }}>
          Twitter
          {'  '}
          <MdVerified style={{ position: 'absolute', top: '6px' }} />
        </h1>
        <h2>@twitter</h2>

        <p>what’s happening?!</p>

        <ul>
          <li>
            <LocationIcon />
            everywhere
          </li>
          <li>
            <LinkIcon />
            <a href="https://about.twitter.com" target="_blank" rel="noopener noreferrer">
              about.twitter.com
            </a>
          </li>
          <li>
            <CakeIcon />
            Born March 21
          </li>
          <li>
            <CalendarIcon />
            Joined February 2007
          </li>
        </ul>

        <Followage>
          <span>
            <strong>0 </strong>
            Following
          </span>
          <span>
            <strong>60.4M </strong>
            Followers
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;

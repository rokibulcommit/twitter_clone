import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import google from '~/assets/img/google.jpg';
import youtube from '~/assets/img/youtube.jpg';
import cnn from '~/assets/img/cnn.jpg';

import { Container, SearchWrapper, SearchInput, SearchIcon, Body } from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Search Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="You might like"
            elements={[
              <FollowSuggestion name="Google" nickname="@google" avatar={google} />,
              <FollowSuggestion name="YouTube" nickname="@youtube" avatar={youtube} />,
              <FollowSuggestion name="CNN" nickname="@cnn" avatar={cnn} />,
            ]}
          />
          <List title="What’s happening" elements={[<News />, <News />, <News />, <News />, <News />, <News />]} />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;

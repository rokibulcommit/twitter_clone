import React from 'react';
import { Tooltip } from '@material-ui/core';
import { MdVerified } from 'react-icons/md';

import kFormatter from '../../utils/kFormatter';

import twitter from '~/assets/img/avatar.jpg';
import twitterpic from '~/assets/img/twitterpic.jpg';
import windowspic from '~/assets/img/windowspic.jpg';
import windows from '~/assets/img/windows.jpg';

import youtube from '~/assets/img/youtube.jpg';
import youtubepic from '~/assets/img/youtubepic.png';

import { useStyles } from '../../styles/MaterialUI';
import {
  Container,
  Retweeted,
  RTHeaderIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
  ShareIcon,
} from './styles';

interface Props {
  showPicture?: boolean;
}

export interface AvatarProps {
  avatar: string;
}

const Tweet: React.FC<Props> = ({ showPicture = false }) => {
  const classes = useStyles();
  const tweets = [
    {
      name: 'Twitter',
      user: '@Twitter',
      avatar: twitter,
      message: `pls stop posting screenshots of Tweets on IG Stories. you can now share Tweets directly on iOS. 
      -management`,
      picture: twitterpic,
    },
    {
      name: 'Windows',
      user: '@windows',
      avatar: windows,
      message: `New number but still the home for PC gaming. #Windows11`,
      picture: windowspic,
    },
    {
      name: 'Windows',
      user: '@windows',
      avatar: windows,
      message: `New number but still the home for PC gaming. #Windows11`,
      picture: windowspic,
    },
    {
      name: 'YouTube',
      user: '@youtube',
      avatar: youtube,
      message: `using only food, where did you grow up?`,
      picture: youtubepic,
    },
  ];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const currentTweet = tweets[Math.floor(Math.random() * tweets.length)];
  return (
    <Container>
      {currentTweet.user !== '@Twitter' && (
        <Retweeted>
          <RTHeaderIcon />
          You Retweeted
        </Retweeted>
      )}

      <Body>
        <Tooltip title={`Go to ${currentTweet.user} profile`} placement="bottom" arrow classes={{ tooltip: classes.tooltip }}>
          <Avatar avatar={currentTweet.avatar} onClick={() => window.open(`https://twitter.com/${currentTweet.user}`, 'blank')} />
        </Tooltip>

        <Content>
          <Header>
            <strong>
              {currentTweet.name}
              <MdVerified className="verifiedIcon" />
            </strong>
            <Tooltip title={`Go to ${currentTweet.user} profile`} placement="bottom" arrow classes={{ tooltip: classes.tooltip }}>
              <span onClick={() => window.open(`https://twitter.com/${currentTweet.user}`, 'blank')}>{currentTweet.user}</span>
            </Tooltip>
            <Dot />
            <time>{`${months[Math.floor(Math.random() * months.length)]} ${Math.floor(Math.random() * 28)}`}</time>
          </Header>

          <Description>{currentTweet.message}</Description>
          {showPicture ? <ImageContent avatar={currentTweet.picture} /> : null}

          <Icons>
            <Tooltip title="Show replies" placement="bottom" arrow classes={{ tooltip: classes.tooltip }}>
              <Status>
                <CommentIcon />
                {kFormatter(Math.floor(Math.random() * 5000))}
              </Status>
            </Tooltip>

            <Tooltip title="Retweet" placement="bottom" arrow classes={{ tooltip: classes.tooltip }}>
              <Status>
                <RetweetIcon />
                {kFormatter(Math.floor(Math.random() * 5000))}
              </Status>
            </Tooltip>

            <Tooltip title="Like Tweet" placement="bottom" arrow classes={{ tooltip: classes.tooltip }}>
              <Status>
                <LikeIcon />
                {kFormatter(Math.floor(Math.random() * 5000))}
              </Status>
            </Tooltip>

            <Tooltip title="Share Tweet" placement="bottom" arrow classes={{ tooltip: classes.tooltip }}>
              <Status>
                <ShareIcon />
              </Status>
            </Tooltip>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;

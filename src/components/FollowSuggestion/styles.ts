import styled from 'styled-components';

import Button from '../Button';

import { AvatarProps } from '.';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
  }
`;

export const Avatar = styled.div<AvatarProps>`
  width: 49px;
  height: 49px;
  background: ${(props) => (props.avatar ? `url(${props.avatar})` : 'var(--gray)')};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;
  margin-right: 10px;
`;

export const Info = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;

  > strong {
    font-size: 14px;
  }
  > span {
    font-size: 14px;
    color: var(--gray);
  }
`;

export const FollowButton = styled(Button)`
  padding: 6px 17px;
`;

import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import BackIcon from '../../../assets/images/back.svg';

const PostTagWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

const Tag = styled(Link)`
  background-color: ${({ theme }) => theme.font.primary};
  color: ${({ theme }) => theme.font.white};
  padding: 8px;
  border-radius: 4px;
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 600;
`;
const StyledBackIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 20px;
`;

const PostTag = ({ children, backTo, tagTo }) => {
  return (
    <PostTagWrapper>
      <Link to={backTo}>
        <StyledBackIcon src={BackIcon} />
      </Link>
      <Tag to={tagTo}>{children}</Tag>
    </PostTagWrapper>
  );
};

export default PostTag;

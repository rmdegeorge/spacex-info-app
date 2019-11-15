import React from 'react';
import styled from 'styled-components';
import NewsEntry from '../components/NewsEntry';
import { withData } from '../context-providers/DataProvider';
import {device} from '../themes/GlobalStyle';

const NewsContainer = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0 100px 0;
  @media ${device.tablet} {
    width: 75%
  }
  @media ${device.computer} {
    width: 50%
  }
`;
const NewsHeader = styled.h2`
  font-size: 20pt;
`;

class News extends React.Component {
  componentDidMount() {
    this.props.getHistory();
  }
  render() {
    const displayHistory = this.props.history.reverse().map(story => <NewsEntry key={story.id} storyInfo={story} />)
    return (
      <NewsContainer>
        <NewsHeader>News</NewsHeader>
        {displayHistory}
      </NewsContainer>
    );
  }
}

export default withData(News);
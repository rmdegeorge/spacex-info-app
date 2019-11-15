import React from 'react';
import styled from 'styled-components';
import NewsEntry from '../components/NewsEntry';
import { withData } from '../context-providers/DataProvider';

const NewsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0 100px 0;
`;

class News extends React.Component {
  componentDidMount() {
    this.props.getHistory();
  }
  render() {
    const displayHistory = this.props.history.map(story => <NewsEntry key={story.id} storyInfo={story} />)
    return (
      <NewsContainer>
        {displayHistory}
      </NewsContainer>
    );
  }
}

export default withData(News);
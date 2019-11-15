import React from 'react';
import styled from 'styled-components';

const NewsEntryContainer = styled.div`
  border: 1px solid #000000;
  width: 100%;
  padding: 10px;
  margin: 0 0 20px 0;
  box-shadow: 14px 10px 21px 0px rgba(31,31,31,1);
  border-radius: 5px;
`;

const EntryTitle = styled.div`
  font-weight: bold;
  font-size: 18pt;
  width: 100%;

`;
const EntryDate = styled.div`
  font-size: 10pt;
  padding: 0 10px;
  width: 100%;

`;
const EntryDetails = styled.div`
  padding: 10px;
  width: 100%;

`;
const EntryLinks = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0 0 10px;
  width: 100%;
  font-size: 10pt;

  > a {
    color: #000000;
    text-decoration: none;
    padding: 4px;
  
    :hover {
      text-decoration: underline
      font-weight: bold;
    }
  }
`;

function NewsEntry(props) {
  const {
    title,
    event_date_utc,
    details,
    links
  } = props.storyInfo
  return (
    <NewsEntryContainer>
      <EntryTitle>{title}</EntryTitle>
      <EntryDetails>{details}</EntryDetails>
      <EntryLinks>
        <div>Read more:</div>
        {links.reddit !== null ? <a href={links.reddit}>Reddit</a> : null}
        {links.article !== null ? <a href={links.article}>Article</a> : null}
        {links.wikipedia !== null ? <a href={links.wikipedia}>Wikipedia</a> : null}
      </EntryLinks>
      <EntryDate>{new Date(event_date_utc).toUTCString()}</EntryDate>
    </NewsEntryContainer>
  );
}

export default NewsEntry;

// {
//   "id": 1,
//   "title": "Falcon 1 Makes History",
//   "event_date_utc": "2008-09-28T23:15:00Z",
//   "event_date_unix": 1222643700,
//   "flight_number": 4,
//   "details": "Falcon 1 becomes the first privately developed liquid fuel rocket to reach Earth orbit.",
//   "links": {
//       "reddit": null,
//       "article": "http://www.spacex.com/news/2013/02/11/flight-4-launch-update-0",
//       "wikipedia": "https://en.wikipedia.org/wiki/Falcon_1"
//   }
// },
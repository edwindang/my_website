import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id ="tech">
    <SectionDivider />
    <br />
      <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of front-end and back-end technologies in web development.
    </SectionText>
    <List>
    <ListItem>
        <DiReact size = "3rem" />
        <ListContainer>
          <ListTitle>Technical Product Management</ListTitle>
          <ListParagraph>
            Experience with <br />
            Product Lifecycle Management, Agile & Scrume Methodologies, Roadmap Creation, Stakeholder Management, Aha!, JIRA, Confluence, Power BI
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size = "3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js, HTML, CSS, JavaScript, Bootstrap, Git, AWS Amplify, Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size = "3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js, Python, Java, Express.js, Flask, SQL, MongoDB, Redis, GraphQL, REST API, WebSockets, AWS, Pulumi, Postman
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;

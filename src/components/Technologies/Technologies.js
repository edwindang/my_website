import React from "react";
import { DiFirebase, DiReact, DiOnedrive } from "react-icons/di";
import { FaGears } from "react-icons/fa6";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of front-end and back-end technologies in web
      development.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>React.js, Javascript, Socket.IO</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End & CI/CD Infrastructure</ListTitle>
          <ListParagraph>
            Node, RESTAPI, Flask, SQL, Express, Java, Pulumi, Github Actions
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiOnedrive size="3rem" />
        <ListContainer>
          <ListTitle>Cloud</ListTitle>
          <ListParagraph>
            AWS Lambda, EC3, VPC, Elasticache, APIGateway
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
      <FaGears size="3rem" />
        <ListContainer>
          <ListTitle>Machine Learning</ListTitle>
          <ListParagraph>
            Support Vector Machines, Neural Networks, KNN, Linear Regression,
            NLP, PyTorch
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;

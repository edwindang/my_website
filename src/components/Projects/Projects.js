import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
  <Section $nopadding id="projects">
    <SectionDivider />
    <SectionTitle $main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(
        ({ id, image, title, description, tags, source, visit }) => (
          <BlogCard key={id}>
            <Img src={image} />
            <TitleContent>
              <HeaderThree $title>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div>
            <Hr />
              <TitleContent>Tech Stack</TitleContent>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              {id === 0 ? (
                <ExternalLinks
    onClick={() => {
        if (typeof window !== "undefined") {
          console.log("ExternalLinks clicked in undefined check, Take me there!");
            window.open(visit, "_blank");
        }
    }}
>
                  Take me there!
                </ExternalLinks>
              ) : null}
              <ExternalLinks onClick={() => {
              console.log("ExternalLinks clicked, Source Code");
              window.open(source, "_blank")}
              }
              >
                Source Code
              </ExternalLinks>
            </UtilityList>
          </BlogCard>
        )
      )}
    </GridContainer>
  </Section>
);

export default Projects;

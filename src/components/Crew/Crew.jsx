import styled from "styled-components";

import CrewDesktopBgImg from "/src/assets/crew/background-crew-desktop.jpg";
import CrewTabletBgImg from "/src/assets/crew/background-crew-tablet.jpg";
import CrewMobileBgImg from "/src/assets/crew/background-crew-mobile.jpg";

import Content from "../Content/Content";
import data from "../../data/data.json";
import { useState } from "react";

const CrewDiv = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  min-height: 26rem;

  @media (max-width: 768px) {
    padding: 0 2rem;
    min-height: 17rem;
    align-items: center;
    text-align: center;
    flex-direction: column-reverse;
    justify-content: flex-end;
  }
`;

const CrewContent = styled.div`
  /* min-height: 16rem; */

  @media (max-width: 768px) {
    min-height: 14rem;
    margin-top: 3rem;
  }
`;

const CrewRole = styled.h3`
  color: gray;
  text-transform: uppercase;
  font-weight: 300;
  font-size: 1.5rem;
  padding-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CrewName = styled.h2`
  font-size: 3.2rem;
  text-transform: uppercase;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 2.8rem;
  }
`;

const CrewBio = styled.p`
  font-size: 1.2rem;
  font-weight: 200;
  padding-top: 2rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const Carrousel = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    justify-content: center;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    justify-content: center;
  }
`;

const CarouselElement = styled.div`
  display: flex;
  bottom: 5rem;
  background-color: ${(props) => (props.$active ? "white" : "grey")};
  cursor: pointer;
  border-radius: 50%;
  margin-top: 3rem;
  width: 1.2rem;
  height: 1.2rem;

  &:hover {
    background-color: white;
    box-shadow: 0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 40px #ffffff;
  }

  @media (max-width: 768px) {
    /* position: relative; */
    /* top: 2rem; */
    margin-top: 0;
  }
`;

const CrewImg = styled.div`
  background-image: url(${(props) => props.$image});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 35rem;
  height: 35rem;
  position: absolute;
  bottom: 0;
  right: 2rem;

  @media (max-width: 768px) {
    position: inherit;
    /* top: 8rem; */
    /* bottom: initial; */
    width: 20rem;
    height: 20rem;
    justify-self: center;
    align-self: center;
    margin-top: 3rem;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    position: absolute;
    bottom: 0;
    left: 50%;
    right: 50%;
    transform: translateX(-50%);
    width: 37rem;
    height: 37rem;
  }
`;

export default function Crew() {
  const [crew, setCrew] = useState(data.crew[0]);

  const handleClick = (crewPerson) => {
    setCrew(crewPerson);
  };

  const getImageUrl = (name) => {
    const formattedName = name.toLowerCase().replace(" ", "-");
    return new URL(
      `../../assets/crew/image-${formattedName}.png`,
      import.meta.url
    ).href;
  };

  return (
    <Content
      numPage="02"
      headingText="MEET YOUR CREW"
      $desktopbgImg={CrewDesktopBgImg}
      $tabletbgImg={CrewTabletBgImg}
      $mobilebgImg={CrewMobileBgImg}
      $reverseOnMobile={true}
      leftSideContent={
        <CrewDiv>
          <CrewContent key={crew.name}>
            <CrewRole>{crew.role}</CrewRole>
            <CrewName>{crew.name}</CrewName>
            <CrewBio>{crew.bio}</CrewBio>
          </CrewContent>
          <Carrousel>
            {data.crew.map((crewPerson) => {
              return (
                <CarouselElement
                  key={crewPerson.name}
                  onClick={() => handleClick(crewPerson)}
                  $active={crew.name === crewPerson.name}
                ></CarouselElement>
              );
            })}
          </Carrousel>
        </CrewDiv>
      }
      rightSideContent={<CrewImg $image={getImageUrl(crew.name)} />}
    ></Content>
  );
}

import { useState } from "react";

import styled from "styled-components";

import DestDesktopBgImg from "/src/assets/destination/background-destination-desktop.jpg";
import DestTabletBgImg from "/src/assets/destination/background-destination-tablet.jpg";
import DestMobileBgImg from "/src/assets/destination/background-destination-mobile.jpg";

import Content from "../Content/Content";

import data from "../../data/data.json";

const Paragraph = styled.p`
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Carounsel = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

const CarouselContent = styled.div`
  cursor: pointer;
  padding: 0.5rem 0;
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: 300;
  border-bottom: 2px solid transparent;
  text-transform: uppercase;
  border-bottom: 2px solid
    ${(props) => (props.$active ? "white" : "transparent")};

  &:hover {
    border-bottom: 2px solid white;
  }

  @media (max-width: 768px) {
    margin: 0 0.5rem;
  }
`;

const Span = styled.span`
  font-size: 5rem;
  font-weight: 300;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const PlanetsImg = styled.div`
  background-image: url("/src/assets/destination/image-mars.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 35rem;
  height: 35rem;

  @media (max-width: 768px) {
    width: 15rem;
    height: 15rem;
    justify-self: center;
    align-self: center;
    margin-top:3rem;
`;

const RightSideContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    align-items: center;
    text-align: center;
  }
`;

const Hr = styled.div`
  margin: 2rem 0;
  border: 0.5px solid grey;
  width: 100%;
  height: 1px;

  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  alingn-items: center;
  gap: 4rem;
  text-align: start;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 2rem;
  }
`;

const InfoText = styled.p`
  font-size: 0.8rem;
  color: gray;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const InfoData = styled.p`
  font-size: 1.8rem;
  font-weight: 400;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export default function Destination() {
  const [dest, setDest] = useState(data.destinations[0]);

  const handleClick = (destinationName) => {
    setDest(destinationName);
  };

  return (
    <>
      <Content
        numPage="01"
        headingText="PICK YOUR DESTINATION"
        $desktopbgImg={DestDesktopBgImg}
        $tabletbgImg={DestTabletBgImg}
        $mobilebgImg={DestMobileBgImg}
        leftSideContent={<PlanetsImg />}
        rightSideContent={
          <RightSideContent>
            <Carounsel>
              {data.destinations.map((destination) => {
                return (
                  <CarouselContent
                    key={destination.name}
                    onClick={() => handleClick(destination)}
                    $active={dest.name === destination.name}
                  >
                    {destination.name}
                  </CarouselContent>
                );
              })}
            </Carounsel>
            <Span key={dest.name}>{dest.name}</Span>
            <Paragraph>{dest.description}</Paragraph>
            <Hr />
            <Info>
              <div>
                <InfoText>AVG. DISTANCE</InfoText>
                <InfoData>{dest.distance} </InfoData>
              </div>
              <div>
                <InfoText>EST. TRAVEL TIME</InfoText>
                <InfoData>{dest.travel}</InfoData>
              </div>
            </Info>
          </RightSideContent>
        }
      />
    </>
  );
}

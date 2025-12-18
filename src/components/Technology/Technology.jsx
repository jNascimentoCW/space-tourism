import { useState, useEffect } from "react";
import Content from "../Content/Content";
import data from "../../data/data.json";

import styled from "styled-components";

import TechDesktopBgImg from "../../assets/technology/background-technology-desktop.jpg";
import TechTabletBgImg from "../../assets/technology/background-technology-tablet.jpg";
import TechMobileBgImg from "../../assets/technology/background-technology-mobile.jpg";

const Carousel = styled.div`
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
  }
`;

const CarouselContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.$active ? "#000000" : "#ffffff")};
  background-color: ${(props) => (props.$active ? "#ffffff" : "transparent")};
  cursor: pointer;
  border: 0.5px solid #ffffff;
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  margin: 1rem 2rem;

  &:hover {
    background-color: white;
    color: #000000;
    box-shadow: 0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 40px #ffffff;
  }

  @media (max-width: 768px) {
    margin: 0 1rem;
    width: 3.5rem;
    height: 3.5rem;
  }
`;

const TechDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    flex-direction: column-reverse;
  }
`;

const TechContent = styled.div`
  padding: 1rem;

  @media (max-width: 768px) {
    min-height: 13rem;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
  }
`;

const TechHeader = styled.p`
  text-transform: uppercase;
  font-weight: 100;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const TechName = styled.h2`
  font-size: 3.1rem;
  font-weight: 300;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 2.8rem;
  }
`;

const TechDescription = styled.p`
  font-weight: 100;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const TechImg = styled.div`
  background-image: url(${(props) => props.$image});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  position: absolute;
  right: 0;
  width: 30rem;
  height: 30rem;

  @media (max-width: 768px) {
    position: inherit;
    max-height: 12rem;
    width: 100vw;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    position: inherit;
    width: 100vw;
    height: 21rem;
  }
`;

export default function Technology() {
  const [tech, setTech] = useState(data.technology[0]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 769);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (techStack) => {
    setTech(techStack);
  };

  const getImageUrl = (name) => {
    console.log(name);
    const formattedName = name.toLowerCase().replace(" ", "-");
    console.log(formattedName);

    const orientation = isMobile ? "landscape" : "portrait";

    return new URL(
      `../../assets/technology/image-${formattedName}-${orientation}.jpg`,
      import.meta.url
    ).href;
  };

  return (
    <Content
      numPage="03"
      headingText="SPACE LAUNCH 101"
      $desktopbgImg={TechDesktopBgImg}
      $tabletbgImg={TechTabletBgImg}
      $mobilebgImg={TechMobileBgImg}
      $reverseOnMobile={true}
      leftSideContent={
        <TechDiv>
          <Carousel>
            {data.technology.map((techStack, index) => {
              return (
                <CarouselContent
                  key={techStack.name}
                  $active={tech.name === techStack.name}
                  onClick={() => handleClick(techStack)}
                >
                  {index + 1}
                </CarouselContent>
              );
            })}
          </Carousel>
          <TechContent>
            <TechHeader>THE TERMINOLOGY...</TechHeader>
            <TechName>{tech.name}</TechName>
            <TechDescription>{tech.description}</TechDescription>
          </TechContent>
        </TechDiv>
      }
      rightSideContent={<TechImg $image={getImageUrl(tech.name)} />}
    ></Content>
  );
}

import { Link } from "react-router-dom";

import Content from "../Content/Content";
import HomeDesktopBgImg from "/src/assets/home/background-home-desktop.jpg";
import HomeTabletBgImg from "/src/assets/home/background-home-tablet.jpg";
import HomeMobileBgImg from "/src/assets/home/background-home-mobile.jpg";

import styled from "styled-components";

const ExploreBtn = styled(Link)`
  background: white;
  border-radius: 50%;
  width: 15rem;
  height: 15rem;
  color: black;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  position: relative;
  font-weight: 500;
  font-size: 1.2rem;
  text-decoration: none;

  &:hover {
    box-shadow: 0 0 50px 20px rgba(255, 255, 255, 0.8);
    transition: box-shadow 0.4s ease-in-out;
  }

  @media (max-width: 768px) {
    width: 10rem;
    height: 10rem;
  }
`;

const LeftContent = styled.div`
  width: 90%;
`;

const TopParagraph = styled.p`
  font-size: 1.7rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const BottomParagraph = styled.p`
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Span = styled.span`
  font-size: 9rem;
  font-weight: 300;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 5rem;
  }
`;

export default function Home() {
  return (
    <Content
      $desktopbgImg={HomeDesktopBgImg}
      $tabletbgImg={HomeTabletBgImg}
      $mobilebgImg={HomeMobileBgImg}
      headingText=""
      leftSideContent={
        <LeftContent>
          <TopParagraph>So, you want to travel to</TopParagraph>
          <Span>SPACE</Span>
          <BottomParagraph>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </BottomParagraph>
        </LeftContent>
      }
      rightSideContent={<ExploreBtn to="/destination">EXPLORE</ExploreBtn>}
    />
  );
}

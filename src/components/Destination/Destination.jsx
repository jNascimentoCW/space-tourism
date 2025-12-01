import styled from "styled-components";

import HomeDesktopBgImg from "/src/assets/destination/background-destination-desktop.jpg";
import HomeTabletBgImg from "/src/assets/destination/background-destination-tablet.jpg";
import HomeMobileBgImg from "/src/assets/destination/background-destination-mobile.jpg";

import Content from "../Content/Content";

const Paragraph = styled.p`
  font-size: 1.2rem;
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

  &:hover {
    border-bottom: 2px solid white;
  }
`;

const Span = styled.span`
  font-size: 5rem;
  font-weight: 500;
`;

const PlanetsImg = styled.div`
  background-image: url("/src/assets/destination/image-mars.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 40rem;
  height: 500rem;
`;

const RightSideContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
`;

const Hr = styled.div`
  margin: 2rem 0;
  border: 0.5px solid grey;
  width: 100%;
  height: 1px;

  @media (max-width: 768px) {
    display: none;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    display: none;
  }
`;

export default function Destination() {
  return (
    <>
      <Content
        numPage
        headingText="PICK YOUR DESTINATION"
        desktopbgImg={HomeDesktopBgImg}
        tabletbgImg={HomeTabletBgImg}
        mobilebgImg={HomeMobileBgImg}
        leftSideContent={<PlanetsImg />}
        rightSideContent={
          <RightSideContent>
            <Carounsel>
              <CarouselContent>MOON</CarouselContent>
              <CarouselContent>MARS</CarouselContent>
              <CarouselContent>MOON</CarouselContent>
              <CarouselContent>MARS</CarouselContent>
            </Carounsel>
            <Span>MARS</Span>
            <Paragraph>
              Don’t forget to pack your hiking boots. You’ll need them to tackle
              Olympus Mons, the tallest planetary mountain in our solar system.
              It’s two and a half times the size of Everest!
            </Paragraph>
            <Hr />
            <div>
              <div>
                <p></p>
                <p></p>
              </div>
              <div>
                <p></p>
                <p></p>
              </div>
            </div>
          </RightSideContent>
        }
      />
    </>
  );
}

import styled from "styled-components";

const Container = styled.div`
  background-color: #000000;
  background-image: ${(props) => `url(${props.$desktopbgImg})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;

  @media (max-width: 768px) {
    background-image: ${(props) => `url(${props.$mobilebgImg})`};
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    background-image: ${(props) => `url(${props.$tabletbgImg})`};
  }
`;

const ContainerContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;
  height: 100vh;

  @media (max-width: 768px) {
    justify-content: space-evenly;
    flex-direction: column;
    height: auto;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding-top: 12rem;
    flex-direction: column;
    height: auto;
  }
`;

const ContentHeading = styled.h2`
  position: absolute;
  top: 10rem;
  left: 9rem;
  font-weight: 300;

  @media (max-width: 768px) {
    top: 6rem;
    left: 1.5rem;
    font-size: 1.2rem;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    top: 4rem;
    left: 2rem;
    font-size: 1.5rem;
  }
`;

const ContentDiv = styled.div`
  width: 50%;
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5rem 6rem;
  text-align: start;

  @media (max-width: 768px) {
    text-align: center;
    padding: 1rem 2rem;
    height: 20rem;
    width: 100%;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 100%;
    padding: 4rem;
    text-align: center;
  }
`;

const ContentP = styled.p`
  font-size: 1.2rem;
  font-weight: 100;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ContentSpan = styled.span`
  font-size: 7rem;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

const Span = styled.span`
  color: gray;
  font-weight: 800;
  padding-right: 1rem;
`;

const CarouselContent = styled.div``;

export default function Content({
  $desktopbgImg,
  $tabletbgImg,
  $mobilebgImg,
  headingText,
  leftSideContent,
  rightSideContent,
  numPage,
}) {
  return (
    <Container
      $desktopbgImg={$desktopbgImg}
      $tabletbgImg={$tabletbgImg}
      $mobilebgImg={$mobilebgImg}
    >
      <ContentHeading>
        <Span>{numPage}</Span> {headingText}
      </ContentHeading>
      <ContainerContent>
        <ContentDiv>{leftSideContent}</ContentDiv>
        <ContentDiv>{rightSideContent}</ContentDiv>
      </ContainerContent>
    </Container>
  );
}

import styled from "styled-components";

const Container = styled.div`
  background-color: #000000;
  background-image: ${(props) => `url(${props.$desktopbgImg})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: scroll;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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
  padding: 10rem 4rem 0rem;
  min-height: 100vh;

  @media (max-width: 768px) {
    /* justify-content: space-evenly; */
    align-items: flex-start;
    flex-direction: ${(props) =>
      props.$reverseOnMobile ? "column-reverse" : "column"};
    min-height: calc(100svh - 6rem);
    padding: 6rem 0 1rem;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding-top: 12rem;
    flex-direction: column;
    align-items: flex-start;
    height: auto;
    /* padding: 10rem 4rem 0; */
    min-height: 0rem;
  }
`;

const ContentHeading = styled.h2`
  position: absolute;
  top: 10rem;
  left: 9rem;
  font-weight: 300;
  letter-spacing: 0.25rem;

  @media (max-width: 768px) {
    top: 6rem;
    left: 1.5rem;
    font-size: 1rem;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    top: 9rem;
    left: 2rem;
    font-size: 1.5rem;
  }
`;

const ContentDiv = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: start;
  padding-left: 3rem;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1rem 2rem;
    min-height: 18rem;
    width: 100%;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 100%;
    min-height: 20rem;
    padding: 3rem 0rem;
    text-align: center;
    justify-content: center;
    align-items: center;
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
  $reverseOnMobile,
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
      <ContainerContent $reverseOnMobile={$reverseOnMobile}>
        <ContentDiv>{leftSideContent}</ContentDiv>
        <ContentDiv>{rightSideContent}</ContentDiv>
      </ContainerContent>
    </Container>
  );
}

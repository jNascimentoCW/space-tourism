import styled from "styled-components";
import Navbar from "../Navbar/Navbar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Content = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6rem;
  text-align: center;
`;

const ContentP = styled.p`
  font-size: 1.2rem;
  font-weight: 100;
`;

const ContentSpan = styled.span`
  font-size: 7rem;
  font-weight: 500;
`;

const ExploreBtn = styled.p`
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

  &:hover {
    box-shadow: 0 0 50px 20px rgba(255, 255, 255, 0.8);
    transition: box-shadow 0.4s ease-in-out;
  }
`;

export default function Main() {
  return (
    <Container>
      <Navbar />
      <ContentContainer>
        <Content>
          <ContentP>So, you want to travel to</ContentP>
          <ContentSpan>SPACE</ContentSpan>
          <ContentP>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </ContentP>
        </Content>
        <Content>
          <ExploreBtn>EXPLORE</ExploreBtn>
        </Content>
      </ContentContainer>
    </Container>
  );
}

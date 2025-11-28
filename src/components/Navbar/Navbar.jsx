import LogoImg from "../../assets/shared/logo.svg";
import styled from "styled-components";

const NavbarDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavbarNav = styled.div`
  display: flex;
  justify-self: flex-end;
  justify-content: space-evenly;
  align-items: center;
  background: rgba(255, 255, 255, 0.23);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(9.9px);
  -webkit-backdrop-filter: blur(9.9px);
  padding: 0 9rem 0 5rem;
  width: 60%;
`;

const DivBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 1.5rem 1rem;
  gap: 0.5rem;
  border-bottom: 3px solid transparent;

  &:hover {
    border-bottom: 3px solid white;
    cursor: pointer;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  cursor: pointer;
`;

const Hr = styled.div`
  border: 0.5px solid grey;
  min-width: 56%;
  height: 1px;
  position: absolute;
  left: -50%;
`;

const NumberSpan = styled.span`
  font-weight: bold;
`;

const NavP = styled.p`
  font-weight: thinner;
`;

export default function Navbar() {
  return (
    <NavbarDiv>
      <Logo className="logo">
        <a href="#home">
          <img src={LogoImg} alt="Logo" />
        </a>
      </Logo>
      <NavbarNav className="navbar-nav">
        <Hr />
        <DivBtn>
          <NumberSpan>00</NumberSpan>
          <NavP>HOME</NavP>
        </DivBtn>
        <DivBtn>
          <NumberSpan>01</NumberSpan>
          <NavP>DESTINATION</NavP>
        </DivBtn>
        <DivBtn>
          <NumberSpan>02</NumberSpan>
          <NavP>CREW</NavP>
        </DivBtn>
        <DivBtn>
          <NumberSpan>03</NumberSpan>
          <NavP>TECHNOLOGY</NavP>
        </DivBtn>
      </NavbarNav>
    </NavbarDiv>
  );
}

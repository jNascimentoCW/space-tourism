import styled from "styled-components";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import LogoImg from "../../assets/shared/logo.svg";

const NavbarDiv = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  z-index: 1000;
`;

const NavbarNav = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 0 9rem 0 5rem;
  width: 60%;

  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    right: 0;
    flex-direction: column;
    width: 100vw;
    padding: 2rem 1rem;
    background: rgba(255, 255, 255, 0.1);
    display: ${(props) => (props.open ? "flex" : "none")};
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 80%;
    padding: 0 0.5rem;
  }
`;

const DivBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 1.5rem 1rem;
  gap: 0.5rem;
  border-bottom: 3px solid transparent;

  &:active {
    background-color: rgba(0, 0, 0, 0.1);
  }

  &:hover {
    border-bottom: 3px solid white;
  }

  @media (max-width: 768px) {
    width: 100vw;
    border-bottom: 0px;

    &:hover {
      border-bottom: 0px;
    }
  }
`;

const Logo = styled.div`
  padding: 2rem;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Hr = styled.div`
  border: 0.5px solid grey;
  min-width: 56%;
  height: 1px;
  position: absolute;
  left: -50%;

  @media (max-width: 768px) {
    display: none;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    display: none;
  }
`;

const NumberSpan = styled.span`
  font-weight: bold;
`;

const NavP = styled.p`
  font-weight: lighter;
`;

const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;
  padding: 1rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <NavbarDiv>
      <Logo>
        <a href="#home">
          <img src={LogoImg} alt="Logo" />
        </a>
      </Logo>

      <HamburgerIcon onClick={() => setOpen(!open)}>
        <FontAwesomeIcon icon={open ? faXmark : faBars} size="2xl" />
      </HamburgerIcon>

      {/* NAV MENU */}
      <NavbarNav open={open}>
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

/* eslint-disable no-unused-vars */
import React from "react";
import styled, { css, keyframes } from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { WEIGHTS } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="Menu">
        <CloseButton onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
        <Filler />
        <Nav>
          <NavLink stagger={1} href="/sale">
            Sale
          </NavLink>
          <NavLink stagger={2} href="/new">
            New&nbsp;Releases
          </NavLink>
          <NavLink stagger={3} href="/men">
            Men
          </NavLink>
          <NavLink stagger={4} href="/women">
            Women
          </NavLink>
          <NavLink stagger={5} href="/kids">
            Kids
          </NavLink>
          <NavLink stagger={6} href="/collections">
            Collections
          </NavLink>
        </Nav>
        <Footer>
          <SubLink stagger={7} href="/terms">
            Terms and Conditions
          </SubLink>
          <SubLink stagger={8} href="/privacy">
            Privacy Policy
          </SubLink>
          <SubLink stagger={9} href="/contact">
            Contact Us
          </SubLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideLeftFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(40%);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

const rotateFromIn = keyframes`
  from {
    opacity: 0.5;
    transform: rotateY(-45deg);
  }
  to {
    opacity: 1;
    transform: rotateY(0deg);
  }
`;

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-backdrop);
  display: flex;
  justify-content: flex-end;
  animation: ${fadeIn} 500ms;
  perspective: 500px;
`;

const Content = styled(DialogContent)`
  background: white;
  width: 300px;
  height: 100%;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${rotateFromIn} 500ms cubic-bezier(0.34, 0.23, 0.61, 1.44);
    transform-origin: right center;
  }
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const fadeInStagger = css`
  animation: ${fadeIn} 300ms 300ms both;

  @media (prefers-reduced-motion: no-preference) {
    --stagger: ${(p) => p.stagger};
    animation: ${slideLeftFadeIn} 300ms both;
    animation-delay: calc(50ms * var(--stagger));
  }
`;

const NavLink = styled.a`
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;
  ${fadeInStagger}

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Filler = styled.div`
  flex: 1;
`;
const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-end;
`;

const SubLink = styled.a`
  color: var(--color-gray-700);
  font-size: 0.875rem;
  text-decoration: none;
  ${fadeInStagger}
`;

export default MobileMenu;

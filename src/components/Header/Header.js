import React from "react";
import styled, { css } from "styled-components/macro";

import { QUERIES, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import VisuallyHidden from "../VisuallyHidden";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavLink href="/sale" data-hover="Sale">
            Sale
          </NavLink>
          <NavLink href="/new" data-hover="New&nbsp;Releases">
            New&nbsp;Releases
          </NavLink>
          <NavLink href="/men" data-hover="Men">
            Men
          </NavLink>
          <NavLink href="/women" data-hover="Women">
            Women
          </NavLink>
          <NavLink href="/kids" data-hover="Kids">
            Kids
          </NavLink>
          <NavLink href="/collections" data-hover="Collections">
            Collections
          </NavLink>
        </DesktopNav>
        <MobileActions>
          <ShoppingBagButton>
            <Icon id="shopping-bag" />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </ShoppingBagButton>
          <UnstyledButton>
            <Icon id="search" />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${QUERIES.tabletAndSmaller} {
    justify-content: space-between;
    align-items: center;
    border-top: 4px solid var(--color-gray-900);
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 32px;
    display: flex;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    flex: revert;
  }
`;

const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`;

const Filler = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const navLinkHalfBorderVariant = css`
  position: relative;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;

  &:first-of-type {
    color: var(--color-secondary);
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    border-bottom: solid 2px;
    border-left: solid 2px;
    transform: translateY(calc(-100% + 2px));
    transition: transform 200ms;
  }

  &:hover::after {
    transform: translateY(0px);
  }
`;

function NavLink(props) {
  return (
    <SNavLink href={props.href}>
      <span className="effect" aria-hidden="true">
        {props.children}
      </span>
      <span className="main">{props.children}</span>
    </SNavLink>
  );
}

const SNavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: ${WEIGHTS.medium};
  position: relative;
  overflow: hidden;

  .main,
  .effect {
    display: block;
    padding-left: 10px;
    padding-right: 10px;
  }
  .main {
    background-color: white;
    color: var(--color-gray-900);
  }

  .effect {
    display: none;
  }

  &:hover,
  &:focus-visible {
    .main {
      background-color: var(--color-gray-900);
      color: white;
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    .main,
    .effect {
      transition: transform 200ms;
      will-change: transform;
    }

    .main {
      transform: translateX(0px);
      background-color: white;
      color: var(--color-gray-900);
    }
    .effect {
      display: revert;
      position: absolute;
      inset: 0 0 0 0;
      background-color: var(--color-gray-900);
      color: white;
      transform: translateX(-25%);
      z-index: -1;
    }

    &:hover,
    &:focus-visible {
      outline: none;

      .main {
        transform: translateX(100%);
        background-color: white;
        color: var(--color-gray-900);
      }
      .effect {
        transform: translateX(0%);
        visibility: visible;
      }
    }
  }
`;

export default Header;

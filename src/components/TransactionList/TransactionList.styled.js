import styled from 'styled-components';

export const EditButton = styled.button`
  position: relative;
  border: none;
  background: none;
  width: 24px;
  height: 24px;
  cursor: pointer;
  vertical-align: middle;
  margin-right: 8px;
  border: 1px solid transparent;
  border-radius: 100%;
  transition: border 150ms;

  & svg {
    fill: none;
    stroke: var(--font-color-dark);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 14px;
    height: 14px;
    z-index: 10;
    transition: stroke 150ms, border 150ms;
  }

  &:hover {
    border: 1px solid var(--color-brand-primary);
    transition: border 75ms;

    svg {
      stroke: var(--color-brand-primary);
      transition: stroke 75ms;
    }
  }
`;
export const TransactionContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  width: 100%;
  max-height: calc(100vh - 300px);
  overflow: hidden;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    max-height: calc(100vh - 470px);
  }
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    max-height: calc(100vh - 300px);
  }
  overflow-y: auto;
  overflow-y: auto;
  width: 100%;
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-logout-button);
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--color-logout-button);
  }

  mask-image: linear-gradient(to top, transparent, black),
    linear-gradient(to left, transparent 4px, black 4px);
  mask-size: 100% 20000px;
  mask-position: left bottom;
  -webkit-mask-image: linear-gradient(to top, transparent, black),
    linear-gradient(to left, transparent 4px, black 4px);
  -webkit-mask-size: 100% 20000px;
  -webkit-mask-position: left bottom;
  transition: mask-position 0.3s, -webkit-mask-position 0.3s;

  &:hover {
    -webkit-mask-position: left top;
    mask-position: left top;
  }

  li {
    flex-grow: 1;
    ul {
      align-items: center;
      justify-content: flex-start;
      list-style: none;
      margin: 0;
      padding: 0;
      padding-left: 20px;
      overflow: hidden;
    }
  }
`;
export const Sum = styled.li`
  font-weight: 700;
  color: ${props =>
    props.$isIncome === true
      ? 'var(--color-brand-secondary)'
      : 'var(--color-brand-accent)'} !important;
`;
export const TransactionRow = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  list-style: none;
  height: 54px;
  margin: 0;
  padding: 0;
  width: 100%;
  font-family: Circe;
  font-size: 16px;
  font-weight: 400;
  border-bottom: ${props =>
    props.$variant === 'border' ? '1px solid var(--background-gray)' : 'none'};
  box-shadow: ${props =>
    props.$variant === 'border' ? '0px 1px 0px var(--background-light)' : 'none'};
  transition: background-color 555ms;
  &:hover {
    background-color: #08086412;
    transition: background-color 25ms;
  }
  li {
    color: var(--font-color-dark);
    flex: 1;
    overflow: hidden;
  }
  li:nth-child(1) {
    min-width: 80px;
    max-width: 80px;
  }
  li:nth-child(2) {
    min-width: 40px;
    max-width: 40px;
    text-align: center;
  }
  li:nth-child(3) {
    flex-grow: 2;
    max-width: 180px;
    min-width: 180px;
  }
  li:nth-child(4) {
    flex-grow: 3;
    width: 100%;

    overflow-x: auto;
    overflow-y: hidden;
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  li:nth-child(5) {
    max-width: 80px;
    min-width: 80px;
    margin-left: auto;
  }
  li:nth-child(6) {
    margin-left: auto;
    min-width: 110px;
    max-width: 110px;
  }
`;

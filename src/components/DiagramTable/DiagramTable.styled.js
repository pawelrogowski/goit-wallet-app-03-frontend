import styled from 'styled-components';

export const StyledTable = styled.div`
  max-width: 395px;
  min-width: 280px;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    max-width: 336px;
    height: 100%;
  }
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    max-width: 395px;
  }
`;

export const BoxInputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  div {
    width: 100%;
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    gap: 16px;
    flex-direction: row;
    div {
      max-width: 160px;
    }
  }
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    gap: 32px;
    flex-direction: row;
    div {
      max-width: 182px;
    }
  }
`;
export const BoxHeading = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 30px;
  background: var(--background-light);

  h3 {
    color: var(--font-color-dark);
    font-family: 'Circe';
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding: 16px 28px;
    margin: 0;
  }
`;
export const List = styled.ul`
  margin: 0;
  list-style: none;
  padding: 0;
  height: 100%;
  max-height: 470px;
  overflow-y: auto;
  @media screen and (orientation: landscape) {
    min-height: 94px;
  }
  &::-webkit-scrollbar {
    width: 4px;
  }
  /* Track */
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: var(--color-logout-button);
  }
  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: var(--color-logout-button);
  }

  -webkit-mask-image: linear-gradient(to top, transparent, black),
    linear-gradient(to left, transparent 4px, black 4px);
  -webkit-mask-size: 100% 20000px;
  -webkit-mask-position: left bottom;
  mask-image: linear-gradient(to top, transparent, black),
    linear-gradient(to left, transparent 4px, black 4px);
  mask-size: 100% 20000px;
  mask-position: left bottom;
  transition: mask-position 0.3s, -webkit-mask-position 0.3s;

  &:hover {
    -webkit-mask-position: left top;
    mask-position: left top;
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 28px;
  border-bottom: 1px solid #dcdcdf;
  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
  font-family: 'Circe';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;
export const ColorCategory = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 2px;
  display: block;
`;
export const Category = styled.p`
  color: var(--font-color-dark);
  margin: 0;
  padding: 14px 16px;
  flex-grow: 2;
`;
export const Sum = styled.p`
  margin: 0;
  color: var(--font-color-dark);
`;
export const BoxFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 28px;
  color: var(--font-color-dark);
  font-family: Circe;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const Expenses = styled.p`
  display: inline-flex;
  justify-content: space-between;
  margin: 0;
  padding: 16px 0;
  line-height: 18px;
  span {
    color: var(--color-brand-accent);
    text-align: right;
  }
`;
export const Income = styled.p`
  display: inline-flex;
  justify-content: space-between;
  margin: 0;
  padding: 16px 0;
  line-height: 18px;
  span {
    color: var(--color-brand-secondary);
    text-align: right;
  }
`;

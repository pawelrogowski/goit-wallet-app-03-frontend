import styled from 'styled-components';

export const Background = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(25px);
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: calc(100vh - 60px);

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    min-height: calc(100vh - 80px);
    height: calc(100vh - 80px);
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    flex-direction: row;
  }
`;

export const MainContainer = styled.main`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
  flex-wrap: wrap;
  z-index: 1;
  padding: 32px 20px;
  gap: 32px;
  height: 100%;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    justify-content: space-between;
    flex-direction: row;
    align-items: flex-start;
    align-content: flex-start;
    padding: 20px 32px 32px 32px;
    height: calc(100% - 400px);
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding: 46px 16px 0px 69px;
    height: calc(100% - 90px);
  }
`;

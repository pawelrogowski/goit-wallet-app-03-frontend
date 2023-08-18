import styled from 'styled-components';

export const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  height: 100%;
  width: 100%;
  padding: 0px;
  flex: 1 1;
  max-width: 90%;
  align-self: start;
  justify-self: start;

  div {
    max-width: 90%;
  }
  canvas {
    width: 100% !important;
    height: 100% !important;
    max-width: 390px;
    min-height: 280px;
    min-width: 280px;
    max-height: 500px;
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      max-width: calc(100vh - 80px - 214px - 114px);
      max-height: calc(100vh - 80px - 214px - 144px);
    }
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      max-width: calc(100vh - 80px - 214px - 114px);
      max-height: calc(100vh - 80px - 350px);
    }
  }
`;

export const Balance = styled.span`
  color: var(--font-color-dark);
  font-size: calc(14px + (100vw - 288px) * 0.01);
  font-weight: 700;
  font-family: 'Circe';
  font-style: normal;
  line-height: normal;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

import * as React from 'react';
import styled from 'styled-components';
import { ReactComponent as Triangles } from './currencyBackground.svg';
import getCurrencyData from './CurrencyFetchData';

const TableStyledContainer = styled.ul`
  list-style: none;
  padding: 0px;
  width: 100%;
  max-width: 440px;
  background-color: var(--color-brand-primary);
  margin-top: 32px;
  border-radius: 30px;
  overflow: hidden;
  position: relative;
  overflow-y: auto;
  min-height: 210px;
  height: calc(100vh - 390px);
  max-height: 550px;

  li:first-child {
    background-color: rgb(255 255 255 / 22%);
    margin-bottom: 16px;
  }
  li:last-of-type {
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    margin-top: 0;
    height: 100%;
  }
  @media (min-width: 768px) {
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledHeaderParagraph = styled.p`
  margin: 0;
  color: var(--background-light);
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 11px 0px 12px 0px;
  flex-basis: 33.33%;
`;
const StyledBodyParagraph = styled.p`
  margin: 0;
  color: var(--background-light);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-bottom: 12px;
  flex-basis: 33.33%;
`;

const StyledListElement = styled.li`
  display: flex;
  justify-content: space-around;
  text-align: center;
`;

const TrianglesBackground = styled(Triangles)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  path {
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

const Currency = () => {
  const currencyData = getCurrencyData();
  return (
    <TableStyledContainer>
      <StyledListElement>
        <StyledHeaderParagraph>Currency</StyledHeaderParagraph>
        <StyledHeaderParagraph>Purchase</StyledHeaderParagraph>
        <StyledHeaderParagraph>Sale</StyledHeaderParagraph>
      </StyledListElement>
      {currencyData.map((item, index) => (
        <StyledListElement key={item.currency + index}>
          <StyledBodyParagraph>{item.currency}</StyledBodyParagraph>
          <StyledBodyParagraph>{item.purchase}</StyledBodyParagraph>
          <StyledBodyParagraph>{item.sale}</StyledBodyParagraph>
        </StyledListElement>
      ))}

      <TrianglesBackground />
    </TableStyledContainer>
  );
};

export default Currency;

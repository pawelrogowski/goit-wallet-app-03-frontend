import styled from 'styled-components';
export const BalanceSection = styled.div`
  max-width: 395px;
  min-width: 280px;
  width: 100%;
  background-color: var(--background-light);
  border-radius: 30px;
  padding-left: 40px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: space-evenly;
`;
export const BalanceParagraph = styled.p`
  margin: 0;
  color: #a6a6a6;
  font-family: Circe;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 13px;
  text-transform: uppercase;
`;
export const AmountParagraph = styled.p`
  margin: 0;
  color: var(--font-color-dark);
  font-family: Poppins;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px;
`;
export const DollarHolder = styled.span`
  font-weight: 400;
`;

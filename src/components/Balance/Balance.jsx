import styled from 'styled-components';

const BalanceSection = styled.div`
  max-width: 440px;
  min-width: 280px;
  width: 100%;
  background-color: var(--background-light);
  border-radius: 30px;
  padding: 4px 0px 11px 40px;
  margin-top: 28px;
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    margin-top: 13px;
  }
`;
const BalanceParagraph = styled.p`
  color: #a6a6a6;
  font-family: Circe;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 17.69px;
  text-transform: uppercase;
`;
const AmountParagraph = styled.p`
  margin: 0;
  color: var(--font-color-dark);
  font-family: Poppins;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const getBalance = 15000;

const Balance = () => {
  return (
    <BalanceSection>
      <BalanceParagraph>Your Balance</BalanceParagraph>
      <AmountParagraph>$ {getBalance} </AmountParagraph>
    </BalanceSection>
  );
};

export default Balance;

import { useEffect } from 'react';
import styled from 'styled-components';
import triangles from './currencyBackground.svg';
import getCurrencyData from './CurrencyFetchData';
import { useLocation, useNavigate } from 'react-router-dom';

const TableStyledContainer = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0px;
  width: 100%;
  max-width: 393px;
  background-color: var(--color-brand-primary);
  border-radius: 30px;
  overflow: hidden;
  position: relative;
  overflow-y: auto;
  height: 100%;
  min-height: 333px;
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;
  li:first-child {
    background-color: #6e78e8;
    margin-bottom: 16px;
    position: sticky;
    top: 0;
  }
  li:last-of-type {
    margin-bottom: 20px;
  }
  @media (min-width: ${props => props.theme.breakpoints.tabletForMaxMedia}) {
    min-height: 182px;
    max-height: 331px;
  }
  @media (max-width: ${props => props.theme.breakpoints.desktopForMaxMedia}) {
    max-height: 182px;
    max-width: 333px;
  }
  @media (max-width: ${props => props.theme.breakpoints.tabletForMaxMedia}) {
    display: none;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledHeaderParagraph = styled.p`
  margin: 0;
  color: var(--background-light);
  font-family: 'Circe';
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
  font-family: 'Circe';
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

const currencyData = await getCurrencyData();
const Currency = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const locationCurrency = location.pathname === '/currency';

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767 && locationCurrency) {
        navigate('/');
      }
    };
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [navigate, locationCurrency]);

  return (
    <TableStyledContainer
      style={{ display: locationCurrency ? 'block' : '', backgroundImage: `url(${triangles})` }}
    >
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
    </TableStyledContainer>
  );
};

export default Currency;

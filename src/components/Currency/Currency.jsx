import { useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as Triangles } from './currencyBackground.svg';
import getCurrencyData from './CurrencyFetchData';
import { useLocation, useNavigate } from 'react-router-dom';

const TableStyledContainer = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0px;
  width: 100%;
  max-width: 440px;
  background-color: var(--color-brand-primary);
  border-radius: 30px;
  overflow: hidden;
  position: relative;
  overflow-y: auto;
  height: auto;
  min-height: 185px;
  max-height: 550px;

  li:first-child {
    background-color: rgb(255 255 255 / 22%);
    margin-bottom: 16px;
  }
  li:last-of-type {
    margin-bottom: 20px;
  }
  @media (min-width: ${props => props.theme.breakpoints.tabletForMaxMedia}) {
    height: calc(100vh - 390px);
    margin-top: 32px;
  }
  @media (max-width: ${props => props.theme.breakpoints.desktopForMaxMedia}) {
    min-height: 210px;
    height: auto;
    max-height: 550px;
  }
  @media (max-width: ${props => props.theme.breakpoints.tabletForMaxMedia}) {
    display: none;
    margin-top: 15px;
    min-height: 210px;
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

  const currencyData = getCurrencyData();
  return (
    <TableStyledContainer style={{ display: locationCurrency ? 'block' : '' }}>
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

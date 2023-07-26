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
  max-width: 393px;
  background-color: var(--color-brand-primary);
  border-radius: 30px;
  overflow: hidden;
  position: relative;
  overflow-y: auto;
  height: auto;
  min-height: 174px;
  max-height: 331px;
  li:first-child {
    background-color: #6e78e8;
    margin-bottom: 16px;
    position: sticky;
    top: 0;
    right: 0;
  }
  li:last-of-type {
    margin-bottom: 20px;
  }
  @media (min-width: ${props => props.theme.breakpoints.tabletForMaxMedia}) {
    margin-top: 32px;
    min-height: 182px;
  }
  @media (max-width: ${props => props.theme.breakpoints.desktopForMaxMedia}) {
    max-height: 210px;
    max-width: 333px;
  }
  @media (max-width: ${props => props.theme.breakpoints.tabletForMaxMedia}) {
    display: none;
    margin-top: 15px;
    max-height: 331px;
  }

  &::-webkit-scrollbar {
    width: 4px;
  }
  /* Track */
  &::-webkit-scrollbar-track {
    margin-top: 57px;
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
  position: sticky;
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

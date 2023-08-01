import { useEffect } from 'react';
import triangles from '../../assets/icons/currencyBackground.svg';
import getCurrencyData from './CurrencyFetchData';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  StyledBodyParagraph,
  StyledHeaderParagraph,
  StyledListElement,
  TableStyledContainer,
} from './Currency.styled';

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

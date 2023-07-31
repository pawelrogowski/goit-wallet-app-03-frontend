import styled from 'styled-components';

export const LogoContainer = styled.div`
  width: 120px;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 180px;
    height: 40px;

    svg {
      width: 40px;
      height: 40px;
    }
  }
`;

export const LogoText = styled.span`
  font-family: ${props => props.theme.fonts.poppins};
  font-weight: 700;
  font-size: 23px;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 30px;
    line-height: 45px;
    margin-right: 20px;
  }
`;

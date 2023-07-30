import styled from 'styled-components';
import { Icon } from 'components/Icon/Icon';
import { LogoButton } from 'components/Buttons/Buttons';
import { Container } from 'components/Container/Container';
import { useSelector, useDispatch } from 'react-redux';
import { setIsModalLogoutOpen } from 'redux/slices/globalSlice';

const HeaderDiv = styled.header`
  height: 60px;
  display: flex;
  background-color: ${props => props.theme.background.light};

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    height: 80px;
  }
`;
const ContainerHeader = styled(Container)`
  display: flex;
  width: 100%;
  padding: 15px 20px 15px 20px;
  max-width: 1400px;
  align-items: center;
  justify-content: space-between;
`;

const LogoutDiv = styled.div`
  display: flex;
  gap: 4px;
  height: 30px;
  align-items: center;
  fill: ${props => props.theme.colors.logoutButton};
  font-size: 18px;
  font-weight: 400;

  svg {
    width: 18px;
    height: 18px;
    transition: fill 150ms;
  }

  .exitText {
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      display: none;
    }
  }

  .nameText {
    margin-right: -4px;
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      margin-right: 0px;
    }
  }

  .exitButton {
    display: flex;
    cursor: pointer;
    transition: color 150ms;

    span {
      margin-left: 6px;
    }

    &:hover,
    &:focus {
      transition: color 150ms;
      color: var(--color-brand-primary);
      svg {
        transition: fill 150ms;
        fill: var(--color-brand-primary);
      }
    }
  }

  .divider {
    height: 30px;
    margin-right: 4px;
    border: 1px solid ${props => props.theme.colors.logoutButton};
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      display: none;
    }
  }

  .button {
    outline: none;
    border: none;
    background-color: transparent;
    color: ${props => props.theme.colors.logoutButton};
  }
`;

const Header = () => {
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const trimmedUserName = user.name.length > 10 ? user.name.slice(0, 10) + '...' : user.name;

  const openModal = () => {
    dispatch(setIsModalLogoutOpen(true));
  };

  return (
    <HeaderDiv>
      <ContainerHeader>
        <LogoButton />
        <LogoutDiv>
          <span className="nameText">
            <button className="button" type="button">
              {trimmedUserName}
            </button>
          </span>
          <div className="divider button"></div>
          <button type="button" className="exitButton button" onClick={openModal}>
            <Icon icon="icon__exit"></Icon>
            <span className="exitText">Exit</span>
          </button>
        </LogoutDiv>
      </ContainerHeader>
    </HeaderDiv>
  );
};

export default Header;

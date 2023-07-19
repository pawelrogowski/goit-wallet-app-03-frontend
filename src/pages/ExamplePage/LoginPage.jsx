import LoginForm from 'components/LoginForm/LoginForm';
import { Background } from 'components/Background/Background';
import { Icon } from 'components/Icon/Icon';
import styled from 'styled-components';

const LoginPageHeader = styled.div`
  display: none;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 60px;
    margin-bottom: 50px;

    svg {
      width: 260px;
      height: 250px;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 0;
    margin-bottom: 50px;
    margin-right: 38px;

    svg {
      width: 435px;
      height: 420px;
    }
  }
`;

const LoginPageDiv = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    max-width: 538px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    /* margin: 0 118px 196px 118px; */
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    display: flex;
    flex-direction: row;
    max-width: 1280;
    padding-top: 150px;
    /* margin: 0 auto; */
    /* margin: 0 118px 196px 118px; */
  }

  .loginText {
    font-weight: 400;
    font-size: 30px;
    margin-right: 40px;

    @media (min-width: ${props => props.theme.breakpoints.desktop}) {
      margin: 28px 0 77.5px 0;
    }
  }
`;

const LoginPage = () => {
  return (
    <Background>
      <LoginPageDiv>
        <LoginPageHeader>
          <Icon className="loginIcon" icon="icon__big-logo-man1" />
          <span class="loginText">Finance App</span>
              </LoginPageHeader>
        <LoginForm />
      </LoginPageDiv>
    </Background>
  );
};

export default LoginPage;

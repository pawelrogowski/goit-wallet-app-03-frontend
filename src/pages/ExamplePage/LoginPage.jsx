import LoginForm from 'components/LoginForm/LoginForm';
import { Background } from 'components/Background/Background';
import { Icon } from 'components/Icon/Icon';
import styled from 'styled-components';

const LoginPageContainer = styled.div`
  @media (max-width: ${props => props.theme.breakpoints.tabletForMaxMedia}) {
    form {
      padding-bottom: 107px;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    max-width: 538px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    width: 100vw;
    max-width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0;
  }

  .loginText {
    font-weight: 400;
    font-size: 30px;
    margin: 0 40px 0 0;

    @media (min-width: ${props => props.theme.breakpoints.desktop}) {
      margin: 28px 0 0 0;
    }
  }
`;

const LoginHeaderContainer = styled.div`
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
    justify-content: center;
    margin: 0;
    padding-right: 38px;

    svg {
      width: 435px;
      height: 420px;
    }
  }
`;

const LoginFormContainer = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    display: flex;
    align-items: center;
    position: relative;
  }

  &::after {
    @media (min-width: ${props => props.theme.breakpoints.desktop}) {
      content: '';
      position: fixed;
      z-index: -1;
      width: 100vw;
      height: 100vh;
      background-color: #ffffff40;
      backdrop-filter: blur(10px);
    }
  }

  form {
    @media (max-width: ${props => props.theme.breakpoints.tabletForMaxMedia}) {
      border-radius: 0px;
    }

    @media (min-width: ${props => props.theme.breakpoints.desktop}) {
      margin-left: 107px;
    }
  }
`;

const LoginPage = () => {
  return (
    <LoginPageContainer>
      <LoginHeaderContainer>
        <Icon className="loginIcon" icon="icon__big-logo-man1" />
        <span class="loginText">Finance App</span>
      </LoginHeaderContainer>
      <LoginFormContainer>
        <LoginForm />
      </LoginFormContainer>
    </LoginPageContainer>
  );
};

export default LoginPage;

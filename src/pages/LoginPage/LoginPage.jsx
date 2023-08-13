import { useEffect, useState } from 'react';
import LoginForm from 'components/LoginForm/LoginForm';
import { Icon } from 'components/Icon/Icon';
import { LoginFormContainer, LoginHeaderContainer, LoginPageContainer } from './LoginPage.styled';
import { Heading } from 'components/Heading/Heading';
const LoginPage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth > 767);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth > 1279);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);
  return (
    <>
      <LoginPageContainer>
        <LoginHeaderContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.08, 0.82, 0.17, 1] }}
        >
          {windowWidth ? (
            <Icon className="loginIcon" icon="icon__big-logo-man1" />
          ) : (
            <Icon className="loginIcon" icon="icon__big-logo-man2" />
          )}
          <Heading as="h1">Finance App</Heading>
        </LoginHeaderContainer>{' '}
        <LoginFormContainer>
          <LoginForm />
        </LoginFormContainer>
      </LoginPageContainer>
    </>
  );
};

export default LoginPage;

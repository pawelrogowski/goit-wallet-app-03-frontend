import { useEffect, useState } from 'react';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import { Icon } from 'components/Icon/Icon';
import { Heading } from 'components/Heading/Heading';
import {
  RegistrationFormContainer,
  RegistrationHeaderContainer,
  RegistrationPageContainer,
} from './RegistrationPage.styled';

const RegistrationPage = () => {
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
    <RegistrationPageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.08, 0.82, 0.17, 1] }}
    >
      <RegistrationHeaderContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.08, 0.82, 0.17, 1] }}
      >
        {windowWidth ? (
          <Icon className="loginIcon" icon="icon__big-logo-woman1" />
        ) : (
          <Icon className="loginIcon" icon="icon__big-logo-woman2" />
        )}

        <Heading as="h1">Finance App</Heading>
      </RegistrationHeaderContainer>
      <RegistrationFormContainer>
        <RegistrationForm />
      </RegistrationFormContainer>
    </RegistrationPageContainer>
  );
};

export default RegistrationPage;

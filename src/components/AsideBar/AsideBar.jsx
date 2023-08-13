import Balance from 'components/Balance/Balance';
import Currency from 'components/Currency/Currency';
import Navigation from 'components/Navigation/Navigation';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FlexWrapper } from './AsideBar.styled';
import { AnimatePresence, motion } from 'framer-motion';

const AsideMenu = () => {
  const location = useLocation();
  const isCurrency = location.pathname === '/currency';
  const isHome = location.pathname === '/home' || location.pathname === '/';

  const [windowWidth, setWindowWidth] = useState(window.innerWidth > 767);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth > 767);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);

  const sideVariants = {
    hidden: {
      y: '-100%',
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: 'spring',
        stiffness: 80,
      },
    },
    exit: {
      y: '-100%',
      opacity: 0,
      transition: {
        duration: 0.5,
        type: 'spring',
        stiffness: 80,
      },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        className="aside-container"
        layout
        initial="hidden"
        animate="visible"
        variants={sideVariants}
      >
        <FlexWrapper>
          <Navigation />
          {windowWidth || isHome ? <Balance /> : ''}
        </FlexWrapper>
        {isCurrency ? '' : <Currency />}
      </motion.div>
    </AnimatePresence>
  );
};

export default AsideMenu;

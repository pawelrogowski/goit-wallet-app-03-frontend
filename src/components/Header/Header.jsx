import { Icon } from 'components/Icon/Icon';
import { LogoButton } from 'components/LogoButton/LogoButton';
import { useSelector, useDispatch } from 'react-redux';
import { setIsModalLogoutOpen } from 'redux/slices/globalSlice';
import { ContainerHeader, HeaderDiv, LogoutDiv } from './Header.styled';
import { motion, AnimatePresence } from 'framer-motion';
import Balance from 'components/Balance/Balance';
const Header = () => {
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const trimmedUserName = user.name.length > 10 ? user.name.slice(0, 10) + '...' : user.name;
  const { isLoading } = useSelector(state => state.global);

  const openModal = () => {
    dispatch(setIsModalLogoutOpen(true));
  };

  return (
    <HeaderDiv>
      <ContainerHeader>
        <LogoButton />
        <Balance />
        <LogoutDiv>
          <span className="nameText">
            <button className="button" type="button">
              {trimmedUserName}
            </button>
          </span>
          <button type="button" className="exitButton button" onClick={openModal}>
            <Icon icon="icon__exit"></Icon>
            <span className="exitText">Exit</span>
          </button>
        </LogoutDiv>
      </ContainerHeader>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ width: '0px', opacity: 1 }}
            animate={{ width: '100vw', opacity: 1 }}
            exit={{
              width: '100vw',
              opacity: 0,
              transition: { duration: 0.3, ease: 'linear' }, // Use linear easing for both width and opacity
            }}
            className="loader-header"
          />
        )}
      </AnimatePresence>
    </HeaderDiv>
  );
};

export default Header;

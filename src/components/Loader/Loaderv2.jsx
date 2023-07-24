import { Icon } from 'components/Icon/Icon';

const { styled } = require('styled-components');

const LoaderBox = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
const IconLoader = styled(Icon)`
  margin-right: 10px;
`;
const Loader = styled.span`
  font-size: 48px;
  display: inline-block;
  font-family: ${props => props.theme.fonts.poppins};
  font-weight: 700;
  color: #fff;
  box-sizing: border-box;
  text-shadow: 0 0 2px #000, 0 0 1px #000, 0 0 1px #000;
  letter-spacing: 2px;
  position: relative;

  &::after {
    content: 'WalletAPP';
    position: absolute;
    left: 0;
    top: 0;
    color: #000;
    width: 100%;
    height: 100%;
    overflow: hidden;
    box-sizing: border-box;
    animation: animloader 1s linear 1;
  }

  @keyframes animloader {
    0% {
      width: 0%;
    }
    50% {
      width: 50%;
    }
    100% {
      width: 100%;
    }
  }
`;

const LoaderV2 = () => {
  return (
    <LoaderBox>
      <IconLoader icon="icon__logo" width="50" height="50"></IconLoader>
      <Loader>WalletAPP</Loader>
    </LoaderBox>
  );
};

export default LoaderV2;

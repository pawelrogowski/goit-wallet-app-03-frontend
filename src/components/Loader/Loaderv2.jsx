import Loader from './Loader.styled';
import { IconLoader, LoaderBox } from './Loaderv2.styled';

const LoaderV2 = () => {
  return (
    <LoaderBox>
      <IconLoader icon="icon__logo"></IconLoader>
      <Loader>WalletAPP</Loader>
    </LoaderBox>
  );
};

export default LoaderV2;

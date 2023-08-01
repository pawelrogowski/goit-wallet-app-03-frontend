import { Loader, ContainerLoader, LoaderInner } from './LoaderGlobal.styled';

export const LoaderGlobal = () => {
  return (
    <ContainerLoader>
      <Loader />
      <LoaderInner />
    </ContainerLoader>
  );
};

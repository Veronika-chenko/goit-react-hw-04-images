import { ThreeDots } from 'react-loader-spinner';
import { LoaderInnerWrap } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderInnerWrap>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#db7093"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </LoaderInnerWrap>
  );
};

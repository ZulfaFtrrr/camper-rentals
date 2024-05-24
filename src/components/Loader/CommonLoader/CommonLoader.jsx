import { ThreeDots } from 'react-loader-spinner';

function CommonLoader({ loaderColor }) {
  return (
    <ThreeDots
      visible={true}
      height="30"
      width="40"
      color={loaderColor}
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
}

export default CommonLoader;

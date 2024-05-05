import { ThreeDots } from 'react-loader-spinner';

function Loader() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(17, 18, 19, 0.4)',
      }}
    >
      <ThreeDots
        visible={true}
        height="100"
        width="100"
        color="#ffc531"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Loader;

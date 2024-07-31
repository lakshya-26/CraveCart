import { InfinitySpin } from 'react-loader-spinner'


const Spinner = () => {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <InfinitySpin
        width="200"
        color="#d87339"
      />
    </div>
  );
};

export default Spinner;

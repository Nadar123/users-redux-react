import PuffLoader from 'react-spinners/PuffLoader';
import { SpinnerProps } from '../../../constants/interfaces.constant';

const override = {
  display: 'block',
  margin: '100px auto',
};

const Spinner: React.FC<SpinnerProps> = ({ loading }) => {
  return (
    <PuffLoader
      color='#4338ca'
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
};
export default Spinner;

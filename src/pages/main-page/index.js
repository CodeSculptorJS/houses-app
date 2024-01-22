import { useDataFetch } from '../../effects/useDataFetch';
import { HouseGradient } from '../../components/house-gradient';
import { useContext } from 'react';
import { GradientsContext } from '../../context';
import { Loader } from '../../components/loader';
import styles from './styles.module.css';

const MainPage = () => {
  const data = useDataFetch();
  const { isLoading } = useContext(GradientsContext);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        data.map((house) => <HouseGradient house={house} key={house.name} />)
      )}
    </div>
  );
};

export { MainPage };

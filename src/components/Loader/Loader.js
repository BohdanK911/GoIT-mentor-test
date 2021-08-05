import { useEffect, useState } from 'react';
import styles from './Loader.module.css';

const suffixArr = ['.', '..', '...'];

const Loader = () => {
  const [suffixIndex, setSuffixIndex] = useState(null);

  useEffect(() => {
    let intervalId0, intervalId1, intervalId2, intervalId3;

    intervalId0 = setInterval(() => setSuffixIndex(0), 1000);
    const timeout0 = setTimeout(() => (intervalId1 = setInterval(() => setSuffixIndex(1), 1000)), 250);
    const timeout1 = setTimeout(() => (intervalId2 = setInterval(() => setSuffixIndex(2), 1000)), 500);
    const timeout2 = setTimeout(() => (intervalId3 = setInterval(() => setSuffixIndex(null), 1000)), 750);

    return () => {
      clearTimeout(timeout0);
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearInterval(intervalId0);
      clearInterval(intervalId1);
      clearInterval(intervalId2);
      clearInterval(intervalId3);
    };
  }, []);

  return <p className={styles.loader}>Loading{suffixArr[suffixIndex]}</p>;
};

export default Loader;

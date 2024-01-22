import styles from './styles.module.css';
import React, { useState } from 'react';
import { isValidColor } from '../../utils/isValidColor';

const HouseGradient = ({ house }) => {
  const [colors] = useState(house.houseColours.split(' and '));
  const isValid = colors.every((color) => isValidColor(color));

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.name}>{house.name}</div>
        <div>{house.animal}</div>
      </div>
      <div
        className={styles.gradient}
        style={{
          background: isValid
            ? `linear-gradient(to right, ${colors[0]}, ${colors[1]})`
            : `linear-gradient(to right, white, black)`,
        }}
      ></div>
      <div className={styles.footer}>
        <div>
          Founder: <span className={styles.founder}>{house.founder}</span>
        </div>
      </div>
    </div>
  );
};

export { HouseGradient };

import { setFilter } from '../../reduxState/filterSlice';
import styles from './Filter.module.css';
import { useDispatch } from 'react-redux';
import React, { FormEvent } from 'react';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <input
      placeholder="What currency are you looking for?🧐"
      className={styles.input}
      onChange={handleChange}
    />
  );
};

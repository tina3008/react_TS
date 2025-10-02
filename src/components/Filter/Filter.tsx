import { setFilter } from '../../reduxState/filterSlice';
import styles from './Filter.module.css';
import React, { FormEvent } from 'react';
import { TypedUseSelectorHook, useDispatch,  } from 'react-redux';
import type { RootState, AppDispatch } from '../../reduxState/store';

export const useAppDispatch: () => AppDispatch = useDispatch;



export const Filter = () => {
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter(event.target.value));
  };


  return (
    <input
      type="text"
      placeholder="What currency are you looking for?🧐"
      className={styles.input}
      onChange={handleChange}
    />
  );
};

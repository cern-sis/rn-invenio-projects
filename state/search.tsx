import create from 'zustand';
import axios from 'axios';
import {pathOr} from 'ramda';

import {SearchHookProps} from '../types';

export const useStore = create<SearchHookProps>(set => ({
  errorMessage: '',
  setErrorMessage: (newErrorMessage: string) =>
    set(() => ({errorMessage: newErrorMessage})),

  loader: true,
  setLoader: (loader: boolean) => set(() => ({loader: loader})),

  data: [],
  fetch: url => {
    console.log(url);
    set(() => ({loader: true}));
    axios
      .get(url)
      .then(response => {
        set({
          data: pathOr([], ['data', 'hits', 'hits'], response),
          loader: false,
        });
      })
      .catch(error => {
        set(() => ({errorMessage: error, loader: false}));
      });
  },
}));

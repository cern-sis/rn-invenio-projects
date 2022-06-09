import create from 'zustand';
import axios from 'axios';
import {pathOr} from 'ramda';

import {SearchHookProps} from '../types';

export const useStore = create<SearchHookProps>(set => ({
  serchParam: '',
  setSearchParam: (newSerchParam: string) =>
    set(() => ({serchParam: newSerchParam})),

  selectedMethod: '',
  setSelectedMethod: (newMethod: string) =>
    set(() => ({selectedMethod: newMethod})),

  errorMessage: '',
  setErrorMessage: (errorMessage: string) =>
    set(() => ({errorMessage: errorMessage})),

  loader: true,
  setLoader: (loader: boolean) => set(() => ({loader: loader})),

  data: [],
  fetch: url => {
    console.log(url);
    set(() => ({loader: true}));
    axios
      .get(url)
      .then(response => {
        set({data: pathOr([], ['data', 'hits', 'hits'], response)});
        set(() => ({loader: false}));
      })
      .catch(error => {
        set(() => ({errorMessage: error}));
        set(() => ({loader: false}));
      });
  },
  clean: () =>
    set(() => ({selectedMethod: '', serchParam: '', errorMessage: ''})),
}));

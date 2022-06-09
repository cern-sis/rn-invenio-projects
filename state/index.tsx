import create from 'zustand';
import {ChangeTitleHookProps} from '../types';

export const useStore = create<ChangeTitleHookProps>(set => ({
  title: 'Search',
  changeTitle: (newTitle: string) => set(state => ({title: newTitle})),

  darkTheme: true,
  setDarkTheme: (theme: boolean) => set(state => ({darkTheme: theme})),
}));

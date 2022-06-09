import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export interface ProjectProps {
  name: string;
  title: string;
  api: string;
  description: string;
  additional: string;
  methods: string[];
}

interface ScreenProps {
  params?: ProjectProps;
  item?: ProjectProps;
}

export type RootStackParamList = {
  Welcome: undefined;
  Search: ScreenProps;
  Item: ScreenProps;
  Preferences: ScreenProps;
};

export type Props = NativeStackScreenProps<RootStackParamList, 'Search'>;

export interface ChangeTitleHookProps {
  title: string;
  changeTitle(title: string): void;
  darkTheme: boolean;
  setDarkTheme(theme: boolean): void;
}

export interface SearchHookProps {
  data: string[];
  fetch(url: string): void;
  errorMessage: string;
  loader: boolean;
  setLoader(value: boolean): void;
  setErrorMessage(message: string): void;
}

import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export interface ProjectProps {
  name: string;
  title: string;
  api: string;
}

interface SearchProps {
  params: ProjectProps;
}

export type RootStackParamList = {
  Welcome: undefined;
  Search: SearchProps;
};

export type Props = NativeStackScreenProps<RootStackParamList, 'Search'>;

import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export interface ProjectProps {
  name: string;
  title: string;
  api: string;
}

interface ScreenProps {
  params: ProjectProps;
}

export type RootStackParamList = {
  Welcome: undefined;
  Search: ScreenProps;
  Item: ScreenProps;
};

export type Props = NativeStackScreenProps<RootStackParamList, 'Search'>;

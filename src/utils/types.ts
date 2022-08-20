import { FeedItem } from 'react-native-rss-parser';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Article: FeedItem;
}

export type StackScreenProps<Page extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, Page>;

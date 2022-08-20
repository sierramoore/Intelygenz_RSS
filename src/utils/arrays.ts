import { FeedItem } from "react-native-rss-parser";


export const sortArrByDate = (array: FeedItem[]) => {
    return array.sort((a, b) => new Date(b.published).valueOf() - new Date(a.published).valueOf());
};

import * as rssParser from 'react-native-rss-parser';

export const fetchRss = async (url: string) => {
    const response = await fetch(url)
    const responseText = await response.text();
    const parsedData = await rssParser.parse(responseText);
    return parsedData;
}
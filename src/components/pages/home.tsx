import React, {FC, useState, useEffect} from "react";
import { View, FlatList } from 'react-native';
import styled from 'styled-components';
import { fetchRss } from '../../utils/fetch';
import { sortArrByDate } from '../../utils/arrays';
import { ListCard } from "../organisms/listCard";
import { Header } from "../molecules/header";
import { Icons } from "../atoms/icon/icons";
import { Feed, FeedItem } from "react-native-rss-parser";
import { StackScreenProps } from "../../utils/types";

type Props = StackScreenProps<'Home'>;

export const Home: FC<Props> = ({ navigation }) => {
    const [rssData, setRssData] = useState<Feed>();
    useEffect(() => {
       fetchRss('https://www.nasa.gov/rss/dyn/breaking_news.rss')
        .then((response) => setRssData(response));
    }, []);

    const sortedRssData = rssData !== undefined ? sortArrByDate(rssData.items) : [];
    const handleArticlePress = (article: FeedItem) => {
        navigation.navigate('Article', article);
    };
    return (
        <>
            <Header title="RSS FEED" iconName={Icons.arrowRight}/>
            <FeedPage>
                {sortedRssData && 
                    <FlatList 
                        data={sortedRssData}
                        renderItem={({ item }) => (
                            <ListCard 
                                article={item}
                                onPress={handleArticlePress}
                            />
                        )}
                        keyExtractor={(item) => item.id}
                    />
                }
            </FeedPage>
        </>
    )
}

const FeedPage = styled(View)`
    padding: 20px 10px;
    max-width: 98%;
`